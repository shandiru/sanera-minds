"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function BookNowPage() {
  const [form, setForm] = useState({
    option: "",
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const whatsappNumber = "447414786958";

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Send to WhatsApp
  const sendWhatsApp = () => {
    const text = `New%20Enquiry%0A%0AOption:%20${form.option}%0AName:%20${form.name}%0AEmail:%20${form.email}%0AMessage:%20${form.message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, "_blank");
  };

  // ✅ Send Email via EmailJS (NO redirect)
  const sendEmail = () => {
    if (!form.option || !form.name || !form.email || !form.message) {
      setStatus("Please fill all fields.");
      return;
    }

    setStatus("Sending...");

    emailjs
      .send(
        "service_404lxe7", // ✔ Replace
        "template_kbmn3vk", // ✔ Replace
        {
          option: form.option,
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "tmUgtXKf_TwGrV1iE" // ✔ Replace
      )
      .then(() => {
        setStatus("Message sent successfully 🎉");

        // Reset form
        setForm({
          option: "",
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5f7f5] to-[#e9ece7] px-4 py-20">
      <div className="w-full max-w-[720px] bg-white/90 backdrop-blur-xl rounded-3xl shadow-lg border border-[#e2e7e1] p-10">

        {/* CONTACT INFO */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="mailto:saneraminds@gmail.com"
            className="flex items-center gap-2 px-5 py-3 border border-[#cfd5cf] rounded-full bg-white text-[#0d2f25] shadow-sm hover:bg-[#f5f7f5] transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/>
            </svg>
            <span className="font-medium">E-mail</span>
          </a>

          <a
            href="https://wa.me/447414786958"
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 border border-[#25D366] rounded-full bg-[#eafff2] text-[#0d2f25] shadow-sm hover:bg-[#d8ffe8] transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="#25D366">
              <path d="M16 .5C7.6.5.5 7.6.5 16c0 2.7.7 5.4 2 7.7L.5 31.5l8.1-2c2.2 1.2 4.8 1.8 7.4 1.8 8.4 0 15.5-7.1 15.5-15.5S24.4.5 16 .5zm0 28c-2.4 0-4.8-.6-6.9-1.8l-.5-.3-4.8 1.2 1.2-4.7-.3-.5c-1.2-2.1-1.8-4.5-1.8-6.9 0-7 5.8-12.8 12.8-12.8S28.8 9 28.8 16 23 28.5 16 28.5zm7-8.6c-.4-.2-2.3-1.1-2.7-1.2-.4-.2-.7-.2-1 .2-.3.4-1.2 1.2-1.4 1.4-.2.2-.5.3-1 .1-.5-.2-2-.7-3.8-2.2-1.4-1.2-2.3-2.7-2.6-3.2-.3-.5 0-.8.2-1 .2-.2.4-.5.6-.8.2-.3.3-.5.4-.8.1-.3 0-.5 0-.7 0-.2-.9-2.2-1.3-3-.3-.7-.7-.6-1-.6h-.9c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.2 0 1.9 1.4 3.7 1.6 4 .2.3 2.8 4.3 6.8 6 4 .2 4 .2 4.7.2 1.8 0 2.9-1.3 3.3-2 .4-.7.4-1.2.4-1.4s-.3-.4-.7-.6z"/>
            </svg>
            <span className="font-medium">WhatsApp</span>
          </a>
        </div>

        <h1 className="text-4xl font-semibold text-[#0d2f25] text-center mb-3">
          Get In Touch
        </h1>
        <p className="text-center text-[17px] text-[#062016]/80 mb-10 max-w-lg mx-auto">
          Book a complimentary initial assessment with one of our therapists.
        </p>

        {/* FORM FIELDS */}
        <form className="max-w-md mx-auto space-y-6" onSubmit={(e) => e.preventDefault()}>

          <div className="space-y-1">
            <label className="text-[#0d2f25] font-medium">Select a type *</label>
            <select
              name="option"
              value={form.option}
              onChange={handleInput}
              className="w-full border border-[#cfd5cf] rounded-xl py-3 px-4 bg-white shadow-sm"
            >
              <option value="">Choose an option...</option>
              <option value="Organisation">Organisation</option>
              <option value="School">School</option>
              <option value="University">University</option>
              <option value="Events">Events</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[#0d2f25] font-medium">Name *</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleInput}
              className="w-full border border-[#d6dcd6] rounded-xl py-3 px-4 shadow-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[#0d2f25] font-medium">Email *</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleInput}
              className="w-full border border-[#d6dcd6] rounded-xl py-3 px-4 shadow-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[#0d2f25] font-medium">Message *</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleInput}
              rows="4"
              className="w-full border border-[#d6dcd6] rounded-xl py-3 px-4 shadow-sm resize-none"
            />
          </div>
        </form>

        {/* BUTTONS */}
        <div className="mt-10 max-w-md mx-auto space-y-4">
          <button
            onClick={sendWhatsApp}
            className="w-full py-3.5 rounded-xl bg-[#25D366] text-white font-semibold shadow-md"
          >
            Send via WhatsApp
          </button>

          <button
            onClick={sendEmail}
            className="w-full py-3.5 rounded-xl bg-[#0a3d2f] text-white font-semibold shadow-md"
          >
            Send via Email
          </button>

          {status && (
            <p className="text-sm text-[#0d2f25] font-medium text-center pt-2">
              {status}
            </p>
          )}
        </div>

      </div>
    </main>
  );
}
