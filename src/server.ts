import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";
import path from "path";

dotenv.config();
const PORT = Number(process.env.PORT) || 3000;
const mongoUri = process.env.MONGODB_URI!;

const app = express();
app.use(cors());
app.use(express.json());

const client = new MongoClient(mongoUri);
const db = client.db(); // default database from URI
const leads = db.collection("soe_leads");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  pool: true,
  maxConnections: 5,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
});

app.post("/api/submit", async (req: Request, res: Response) => {
  try {
    const { name, email, company, jobTitle } = req.body as { 
        name?: string; 
        email?: string;
        company?: string;
        jobTitle?: string;
    };

    // validate
    if (!email || !company || !jobTitle)
        return res.status(400).json({ error: "Missing required fields" });

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return res.status(400).json({ error: "Invalid email" });

    //save lead
    await leads.insertOne({ name, email, company, jobTitle, ts: new Date() });

    //send mail
    await transporter.sendMail({
      from: `"EnterpriseNGR" <${process.env.SENDER_EMAIL}>`,
      to: email,
      subject: "Your State of Enterprise 2025 report",
      html: `
        <p>Hi ${name ?? "there"},</p>
        <p>Thanks for your interest in our State of Enterprise 2025 report.</p>
        <p>Best regards,<br/>EnterpriseNGR Research Team</p>
      `,
      attachments: [{ filename: "The State of Enterprise 2025 Report.pdf", path: path.join(__dirname, "../public/The-State-of-Enterprise-2025-Report.pdf") }]
    });

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.use(express.static(path.join(__dirname, "../public")));
// app.get("/*", (_, res) =>
//   res.sendFile(path.join(__dirname, "../public/index.html"))
// );

app.use((_, res) => {
  res.sendFile(path.resolve(process.cwd(), "index.html"));
});

client.connect().then(() => {
  app.listen(PORT, () =>
    console.log(` Server ready on http://localhost:${PORT}`)
  );
});
