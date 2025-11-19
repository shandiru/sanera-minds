"use client"
import React, { useState } from "react"
import emailjs from "@emailjs/browser"

export default function BookNowPage() {
  const [form, setForm] = useState({
    option: "",
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState("")

  const whatsappNumber = "447414786958"

  // Handle form updates
  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // WhatsApp send
  const sendWhatsApp = () => {
    const text = `New%20Enquiry%20from%20Sanera%20Minds%0A%0AOption%3A%20${form.option}%0AName%3A%20${form.name}%0AEmail%3A%20${form.email}%0AMessage%3A%20${form.message}`
    const url = `https://wa.me/${whatsappNumber}?text=${text}`
    window.open(url, "_blank")
  }

  // EmailJS send
  const sendEmail = (e) => {
    e.preventDefault()

    if (!form.option || !form.name || !form.email || !form.message) {
      setStatus("Please fill all fields.")
      return
    }

    setStatus("Sending...")

    emailjs
      .send(
        "YOUR_SERVICE_ID",      // <-- replace
        "YOUR_TEMPLATE_ID",     // <-- replace
        {
          option: form.option,
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "YOUR_PUBLIC_KEY"       // <-- replace
      )
      .then(
        () => {
          setStatus("Message successfully sent 🎉")
          setForm({
            option: "",
            name: "",
            email: "",
            message: "",
          })
        },
        (error) => {
          console.error(error)
          setStatus("Failed to send message. Try again.")
        }
      )
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f5f6f4] to-[#eaece8] px-4 py-20">
      <div className="w-full max-w-[720px] bg-white rounded-[20px] shadow-xl border border-[#e9ebe7] p-10 text-center">

        <h1 className="font-display text-3xl md:text-4xl text-[#0d2f25] font-semibold mb-4">
          Get In Touch
        </h1>

        <p className="font-body text-[#062016]/80 text-[17px] md:text-lg leading-relaxed mb-10">
          Welcome! On this page you can book a complimentary initial assessment with one of our qualified therapists.
        </p>

        {/* FORM */}
        <form className="max-w-md mx-auto space-y-6 text-left">

          {/* Option */}
          <div>
            <label className="block text-[#0d2f25]/90 mb-2 font-medium">Select a type *</label>
            <select
              name="option"
              value={form.option}
              onChange={handleInput}
              required
              className="w-full border border-[#cdd2cd] rounded-md py-3 px-4"
            >
              <option value="">Choose an option...</option>
              <option value="Organisation">Organisation</option>
              <option value="School">School</option>
              <option value="University">University</option>
              <option value="Events">Events</option>
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="block text-[#0d2f25]/90 mb-2 font-medium">Name *</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleInput}
              required
              className="w-full border border-[#d5d9d4] rounded-md py-3 px-4"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#0d2f25]/90 mb-2 font-medium">Email *</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleInput}
              required
              className="w-full border border-[#d5d9d4] rounded-md py-3 px-4"
              placeholder="Enter your email"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-[#0d2f25]/90 mb-2 font-medium">Message *</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleInput}
              required
              rows="4"
              className="w-full border border-[#d5d9d4] rounded-md py-3 px-4 resize-none"
              placeholder="Type your message here..."
            />
          </div>
        </form>

        {/* SEND BUTTONS */}
        <div className="mt-10 max-w-md mx-auto space-y-4">

          <button
            onClick={sendWhatsApp}
            className="w-full py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:scale-[1.02] transition flex items-center justify-center gap-2"
          >
             Send via WhatsApp
          </button>

          <button
            onClick={sendEmail}
            className="w-full py-3 bg-[#0a3d2f] text-white font-semibold rounded-lg hover:bg-[#082d22] transition flex items-center justify-center gap-2"
          >
             Send via Email
          </button>

          {status && (
            <p className="text-sm text-[#0d2f25] font-medium pt-2">{status}</p>
          )}
        </div>

      </div>
    </main>
  )
}
