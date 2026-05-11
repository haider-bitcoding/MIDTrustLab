"use client";
import siteConfig from "@/data/site-config.json";
import { useState } from "react";
import { sendEmail } from "@/app/actions/contact";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setIsPending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const result = await sendEmail(formData);

    if (result.success) {
      setStatus(result.message);
      form.reset();
    } else {
      setStatus(result.message);
    }
    setIsPending(false);
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contact Us</h1>
            <p className="text-lg text-gray-600 mb-12">
              Have questions or a proposal? We'd love to hear from you. Use the form or reach out directly via email.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-lab-gray rounded-full flex items-center justify-center text-primary shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                  <a href={`mailto:${siteConfig.contactEmail}`} className="text-gray-600 hover:text-primary transition-colors">
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-lab-gray rounded-full flex items-center justify-center text-primary shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Location</h4>
                  <p className="text-gray-600">
                    {siteConfig.institution}<br />
                    {siteConfig.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Name</label>
                  <input required name="name" type="text" className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent outline-none transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Email</label>
                  <input required name="email" type="email" className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent outline-none transition-all" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Subject</label>
                <input required name="subject" type="text" className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent outline-none transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <textarea required name="message" rows={5} className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent outline-none transition-all resize-none"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isPending}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg disabled:opacity-50"
              >
                {isPending ? "Sending..." : "Send Message"}
              </button>
              {status && <p className={`text-center text-sm font-medium ${status.includes("success") ? "text-accent" : "text-red-500"}`}>{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
