import React, { useState, forwardRef } from 'react';
import Button from './UI/Button';
import { CheckCircleIcon } from 'lucide-react';

import SOE_2025 from '../assets/SOE 2025.png';


const DownloadForm = forwardRef<HTMLDivElement> ((props, ref) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Here you would handle the form submission, e.g., with an API call
  //   setIsSubmitted(true);
  // };
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitted(true);

    const formData = Object.fromEntries(new FormData(e.currentTarget));
    const payload = Object.fromEntries(
    Object.entries(formData).map(([k, v]) => [k, (v as string).trim()])
  );
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) alert("Check your inbox for the PDF!");
    else alert("Oops—please try again.");
    setIsSubmitted(false);
  }


  return <section ref={ref} className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#01562c] to-[#017a3e] rounded-xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left side: Form */}
              <div className="p-6 md:p-8 lg:p-12">
                {!isSubmitted ? <>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6 text-center md:text-left">
                      Get the Full 2025 State of Enterprise Report
                    </h2>
                    <p className="text-white/80 mb-6 md:mb-8 text-center md:text-left">
                      Unlock in-depth analysis, data-driven insights across 9
                      FPS sub-sectors, and strategic recommendations.
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                            Full Name
                          </label>
                          <input type="text" name="name" id="name" className="w-full px-4 py-3 md:py-2 rounded-md border-0 focus:ring-2 focus:ring-[#01b71c] text-base" placeholder="Enter your full name" required />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                            Email Address
                          </label>
                          <input type="email" name="email" id="email" className="w-full px-4 py-3 md:py-2 rounded-md border-0 focus:ring-2 focus:ring-[#01b71c] text-base" placeholder="Enter your email address" required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium text-white mb-1">
                              Company
                            </label>
                            <input type="text" name="company" id="company" className="w-full px-4 py-3 md:py-2 rounded-md border-0 focus:ring-2 focus:ring-[#01b71c] text-base" placeholder="Enter company name" required />
                          </div>
                          <div>
                            <label htmlFor="jobTitle" className="block text-sm font-medium text-white mb-1">
                              Job Title
                            </label>
                            <input type="text" name="jobTitle" id="jobTitle" className="w-full px-4 py-3 md:py-2 rounded-md border-0 focus:ring-2 focus:ring-[#01b71c] text-base" placeholder="Enter job title" required />
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 md:mt-8">
                        <Button type="submit" variant="primary" size="lg" className="w-full py-4 text-base">
                          Download Now
                        </Button>
                      </div>
                    </form>
                  </> : <div className="h-full flex flex-col items-center justify-center text-center py-8">
                    <CheckCircleIcon size={64} className="text-[#01b71c] mb-6" />
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                      Thank You!
                    </h3>
                    <p className="text-white/80 mb-8">
                      Your download is ready. The report has been sent to your
                      email address.
                    </p>
                    <Button variant="primary" size="lg" className="w-full md:w-auto">
                      Download Again
                    </Button>
                  </div>}
              </div>
              {/* Right side: Report preview image - hidden on mobile */}
              <div className="hidden md:block relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{
                backgroundImage: `url(${SOE_2025})`
              }}></div>
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white text-center max-w-xs">
                    <p className="font-medium">
                      2025 State of Enterprise Report
                    </p>
                    <p className="text-sm mt-2">
                      Comprehensive analysis of Nigeria's Financial and
                      Professional Services sector
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
});

export default DownloadForm;