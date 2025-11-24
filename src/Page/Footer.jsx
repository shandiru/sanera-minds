"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#f4f5ef] text-[#062016] pt-16 pb-10 px-6 border-t border-[#dfe1d8] font-bold">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-[15px] md:text-base">
        
        {/* BRAND / INTRO */}
        <div>
          <h2 className="font-display text-2xl md:text-3xl tracking-wide text-[#062016]">
            SANERA MINDS
          </h2>
          <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-[#062016]/85">
            Empowering a new era of mental wellness with therapist-led learning
            and meaningful wellbeing experiences for organisations, education
            settings, and events.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-display text-xl md:text-2xl text-[#11604b] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-[15px] md:text-[16px]">
            <li>
              <a href="/" className="hover:text-[#11604b] transition">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#11604b] transition">About Us</a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#11604b] transition">Services</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#11604b] transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* OUR WORK */}
        <div>
          <h3 className="font-display text-xl md:text-2xl text-[#11604b] mb-4">
            Our Work
          </h3>
          <ul className="space-y-2 text-[15px] md:text-[16px]">
            <li>
              <a href="/services/organisation" className="hover:text-[#11604b] transition">
                Organisations
              </a>
            </li>
            <li>
              <a href="/services/education" className="hover:text-[#11604b] transition">
                Education
              </a>
            </li>
            <li>
              <a href="/services/events" className="hover:text-[#11604b] transition">
                Events
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-display text-xl md:text-2xl text-[#11604b] mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-[15px] md:text-[16px]">

            {/* EMAIL */}
            <li>
              <a
                href="mailto:saneraminds@gmail.com"
                className="hover:text-[#11604b] transition"
              >
                E-mail
              </a>
            </li>

            {/* WHATSAPP */}
            <li>
              <a
                href="https://wa.me/447414786958"
                target="_blank"
                className="hover:text-[#11604b] transition"
              >
                WhatsApp
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:text-[#11604b] transition">
                Enquiry Form
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* LOGO + ACCREDITATION ROW */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-center gap-10">

        {/* Main Logo */}
        <img
          src="/logo png.png"
          alt="Sanera Minds Logo"
          className="h-16 md:h-20 object-contain"
        />

        {/* BABCP Accreditation */}
        <img
          src="/babcp.png"
          alt="BABCP Accredited"
          className="h-24 md:h-28 object-contain"
        />
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 text-center text-[13px] md:text-sm text-[#062016]/75">
        © {new Date().getFullYear()} Sanera Minds. All rights reserved.
      </div>
    </footer>
  );
}
