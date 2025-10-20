'use client'
import { useState } from 'react'

export default function Header() {
  const [openServices, setOpenServices] = useState(false)
  const [openMobile, setOpenMobile] = useState(false)
  const [openMobileServices, setOpenMobileServices] = useState(false)

  return (
    <header className="bg-[#eff0ea] border-b border-[#11604b]/20 relative z-[1000]">
      {/* MOBILE BAR */}
      <div className="lg:hidden grid grid-cols-[1fr_auto_1fr] items-center px-5 py-3">
        <span />
        <a href="/" className="justify-self-center flex flex-col items-center">
          <img src="/logo png.png" alt="Sanera Minds" className="h-10 sm:h-16 w-auto" />
          <span className="-mt-1 text-xs sm:text-sm text-[#062016]/90 tracking-[0.08em] text-center">
            EMPOWERING A NEW ERA OF MENTAL WELLNESS
          </span>
        </a>
        <button
          onClick={() => setOpenMobile(!openMobile)}
          className="justify-self-end inline-flex flex-col items-center justify-center w-11 h-11 gap-1.5"
        >
          <span className="w-8 h-[2px] bg-[#062016]" />
          <span className="w-8 h-[2px] bg-[#062016]" />
          <span className="w-8 h-[2px] bg-[#062016]" />
        </button>
      </div>

      {/* DESKTOP NAV */}
      <div className="hidden lg:flex flex-col items-center max-w-7xl mx-auto">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 min-h-24 px-6 w-full">
          {/* LEFT NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="/"
              className="px-3 py-2 rounded-md uppercase tracking-[0.18em] text-[14px] text-[#062016] hover:bg-[#11604b] hover:text-white transition"
            >
              Home
            </a>

            {/* Services — click only */}
            <div className="relative">
              <button
                onClick={() => setOpenServices((prev) => !prev)}
                className={`px-3 py-2 rounded-md uppercase tracking-[0.18em] text-[14px] transition ${
                  openServices
                    ? 'bg-[#11604b] text-white'
                    : 'text-[#062016] hover:bg-[#11604b] hover:text-white'
                }`}
              >
                Services <span className="ml-1 text-[12px] opacity-80">▾</span>
              </button>

              {openServices && (
                <ul
                  role="menu"
                  className="absolute left-0 mt-3 min-w-64 rounded-xl border border-[#11604b]/25 bg-white shadow-xl p-2 z-50"
                >
                  {[
                    { label: 'Organisations', href: '/services/organisation' },
                    { label: 'Education', href: '/services/education' },
                    { label: 'Workshops', href: '/services/workshops' },
                    { label: 'Resources', href: '/services/resources' },
                    { label: 'Contact us', href: '/contact' },
                  ].map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="block px-3 py-2 rounded-lg text-[15px] tracking-[0.02em] text-[#062016] hover:bg-[#eff0ea]"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <a
              href="/about"
              className="px-3 py-2 rounded-md uppercase tracking-[0.18em] text-[14px] text-[#062016] hover:bg-[#11604b] hover:text-white transition"
            >
              About me
            </a>
          </nav>

          {/* CENTER LOGO */}
          <a href="/" className="flex items-center justify-center shrink-0">
            <img src="/logo png.png" alt="Sanera Minds" className="h-10 lg:h-8 xl:h-10 w-auto" />
          </a>

          {/* RIGHT NAV */}
          <nav className="hidden lg:flex items-center gap-8 justify-end">
            <a
              href="/contact"
              className="px-3 py-2 rounded-md uppercase tracking-[0.18em] text-[14px] text-[#062016] hover:bg-[#11604b] hover:text-white transition"
            >
              Contact us
            </a>
            <a
              href="/faqs"
              className="px-3 py-2 rounded-md uppercase tracking-[0.18em] text-[14px] text-[#062016] hover:bg-[#11604b] hover:text-white transition"
            >
              FAQs
            </a>
            <a
              href="/appointments"
              className="px-4 py-3 rounded-lg uppercase tracking-[0.15em] text-[14px] font-bold bg-[#11604b] text-white hover:opacity-90 transition"
            >
              Book Now
            </a>
          </nav>
        </div>

        {/* SLOGAN */}
        <div className="-mt-4 mb-3">
          <p className="text-[14px] lg:text-[15px] text-[#062016]/90 tracking-[0.08em] text-center">
            EMPOWERING A NEW ERA OF MENTAL WELLNESS
          </p>
        </div>
      </div>

      {/* MOBILE PANEL */}
      <div
        className={`lg:hidden overflow-hidden bg-[#eff0ea] border-t border-[#11604b]/20 transition-[max-height] duration-200 ${
          openMobile ? 'max-h-[75vh]' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col py-2">
          <a href="/" className="px-6 py-3 uppercase tracking-[0.18em] text-[13px] text-[#062016]">
            Home
          </a>

          {/* Services dropdown for mobile */}
          <button
            onClick={() => setOpenMobileServices((s) => !s)}
            className="px-6 py-3 text-left uppercase tracking-[0.18em] text-[13px] text-[#062016] flex items-center justify-between"
          >
            <span>Services</span>
            <span className="text-[12px]">{openMobileServices ? '▴' : '▾'}</span>
          </button>

          <div className={`${openMobileServices ? 'block' : 'hidden'} px-3 pb-2`}>
            {[
              { label: 'Organisations', href: '/services/organisation' },
              { label: 'Education', href: '/services/education' },
              { label: 'Workshops', href: '/services/workshops' },
              { label: 'Resources', href: '/services/resources' },
              { label: 'Contact us', href: '/contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block mx-3 mb-2 px-4 py-2 rounded-lg border border-[#11604b]/25 bg-white text-[#062016] tracking-[0.02em]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="/about"
            className="px-6 py-3 uppercase tracking-[0.18em] text-[13px] text-[#062016]"
          >
            About me
          </a>
          <a
            href="/contact"
            className="px-6 py-3 uppercase tracking-[0.18em] text-[13px] text-[#062016]"
          >
            Contact us
          </a>
          <a
            href="/faqs"
            className="px-6 py-3 uppercase tracking-[0.18em] text-[13px] text-[#062016]"
          >
            FAQs
          </a>

          <a
            href="/appointments"
            className="mx-6 my-3 text-center px-4 py-3 rounded-lg uppercase tracking-[0.15em] text-[14px] font-bold bg-[#11604b] text-white hover:opacity-90 transition"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  )
}
