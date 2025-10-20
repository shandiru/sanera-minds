"use client"
import React, { useState } from "react"

export default function BookNowPage() {
  const [option, setOption] = useState("")

  const handleChange = (e) => {
    const selected = e.target.value
    setOption(selected)

    const whatsappBase = "https://wa.me/447700900123"
    const emailBase = "mailto:hello@saneraminds.com"

    const messages = {
      Organisation: `${whatsappBase}?text=Hi%2C%20I'd%20like%20to%20book%20an%20Organisation%20workshop.`,
      School: `${emailBase}?subject=School%20Workshop%20Booking&body=Hi%2C%20I'd%20like%20to%20book%20a%20School%20workshop.`,
      University: `${whatsappBase}?text=Hi%2C%20I'd%20like%20to%20book%20a%20University%20session.`,
      Workshop: `${emailBase}?subject=General%20Workshop%20Booking&body=Hi%2C%20I'd%20like%20to%20book%20a%20workshop.`,
    }

    if (messages[selected]) window.open(messages[selected], "_blank")
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f5f6f4] to-[#eaece8] px-4 sm:px-8 md:px-12 lg:px-20 py-20">
      <div className="w-full max-w-[720px] bg-white rounded-[20px] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-[#e9ebe7] p-8 md:p-12 lg:p-14 text-center">
        
        {/* Heading */}
        <h1 className="font-display text-3xl md:text-4xl text-[#0d2f25] font-semibold mb-6 tracking-tight">
          Get In Touch
        </h1>

        {/* Intro Text */}
        <p className="font-body text-[#062016]/80 text-[17px] md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Welcome! On this page, you can book a complimentary initial assessment with one of our qualified therapists.  
          <br />
          <br />
          To confirm your appointment, we’ll send you an email confirmation.  
          By booking, you agree that your data will be securely stored in our system.
        </p>

        {/* Select an Option */}
        <div className="max-w-md mx-auto text-left mb-10">
          <label
            htmlFor="option"
            className="block text-[#0d2f25]/90 font-medium mb-2 font-body text-[16px]"
          >
            Select an option
          </label>
          <select
            id="option"
            value={option}
            onChange={handleChange}
            className="w-full border border-[#cdd2cd] rounded-md py-3 px-4 text-[#0d2f25] font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-[#11604b]/40 bg-white hover:border-[#11604b]/40 transition-all"
          >
            <option value="">Choose an option...</option>
            <option value="Organisation">Organisation</option>
            <option value="School">School</option>
            <option value="University">University</option>
            <option value="Workshop">Workshop</option>
          </select>
          <p className="text-[13px] text-[#11604b]/70 mt-2 italic">
            Clicking an option will open WhatsApp or Email directly.
          </p>
        </div>

        {/* Form */}
        <form className="max-w-md mx-auto space-y-6">
          <div>
            <label className="block text-[#0d2f25]/80 font-body mb-2 font-medium">
              Name <span className="text-[#11604b]">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-[#d5d9d4] rounded-md py-3 px-4 text-[#062016] font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-[#11604b]/40 transition-all bg-[#fafaf9] focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-[#0d2f25]/80 font-body mb-2 font-medium">
              Email <span className="text-[#11604b]">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-[#d5d9d4] rounded-md py-3 px-4 text-[#062016] font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-[#11604b]/40 transition-all bg-[#fafaf9] focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-[#0d2f25]/80 font-body mb-2 font-medium">
              Message <span className="text-[#11604b]">*</span>
            </label>
            <textarea
              rows="4"
              placeholder="Type your message here..."
              className="w-full border border-[#d5d9d4] rounded-md py-3 px-4 text-[#062016] font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-[#11604b]/40 transition-all bg-[#fafaf9] focus:bg-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#11604b] text-white font-body uppercase tracking-wider text-[15px] rounded-md shadow-[0_4px_18px_rgba(17,96,75,0.25)] hover:bg-[#0f503c] transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/447700900123?text=Hi%2C%20I'd%20like%20to%20connect%20with%20Sanera%20Minds."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white rounded-full shadow-lg p-4 hover:scale-110 transition-transform duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M12 .5C5.649.5.5 5.649.5 12a11.48 11.48 0 001.551 5.753L.5 23.5l5.882-1.527A11.48 11.48 0 0012 23.5c6.351 0 11.5-5.149 11.5-11.5S18.351.5 12 .5zm0 21a9.97 9.97 0 01-5.083-1.383l-.363-.215-3.484.905.93-3.394-.236-.377A9.97 9.97 0 012 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.457-7.167c-.298-.15-1.762-.868-2.034-.967-.273-.1-.473-.15-.673.15-.2.298-.773.966-.95 1.166-.174.2-.349.224-.647.075-.298-.15-1.26-.464-2.4-1.478-.887-.791-1.484-1.77-1.658-2.068-.173-.298-.018-.459.131-.608.134-.133.298-.349.448-.523.15-.174.2-.298.298-.498.1-.2.05-.373-.025-.523-.075-.15-.673-1.62-.923-2.222-.243-.584-.491-.507-.673-.516l-.574-.01c-.2 0-.523.075-.798.373-.274.298-1.048 1.025-1.048 2.5 0 1.475 1.074 2.9 1.223 3.098.149.198 2.113 3.23 5.115 4.532.716.309 1.274.493 1.709.631.718.228 1.37.196 1.885.118.575-.085 1.762-.719 2.012-1.413.248-.693.248-1.287.174-1.413-.074-.125-.272-.198-.57-.348z" />
        </svg>
      </a>
    </main>
  )
}
