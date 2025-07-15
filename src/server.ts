import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";
import path from "path";

// ─── config ─────────────────────────────────────────────────────────────────────
dotenv.config();
const PORT = Number(process.env.PORT) || 3000;
const mongoUri = process.env.MONGODB_URI!;

// ─── init ───────────────────────────────────────────────────────────────────────
const app = express();
app.use(cors());
app.use(express.json());

// ─── db connection (one global) ────────────────────────────────────────────────
const client = new MongoClient(mongoUri);
const db = client.db(); // default database from URI
const leads = db.collection("soe_leads");

// ─── mail transporter ──────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  pool: true,
  maxConnections: 5,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
});

// ─── routes ────────────────────────────────────────────────────────────────────
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

    // 1️⃣ save lead
    await leads.insertOne({ name, email, company, jobTitle, ts: new Date() });

    // 2️⃣ send mail
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

// ─── static files (after /api so API takes priority) ───────────────────────────
app.use(express.static(path.join(__dirname, "../public")));
// app.get("/*", (_, res) =>
//   res.sendFile(path.join(__dirname, "../public/index.html"))
// );

app.use((_, res) => {
  res.sendFile(path.resolve(process.cwd(), "index.html"));
});

// ─── start ─────────────────────────────────────────────────────────────────────
client.connect().then(() => {
  app.listen(PORT, () =>
    console.log(`⚡ Server ready → http://localhost:${PORT}`)
  );
});
