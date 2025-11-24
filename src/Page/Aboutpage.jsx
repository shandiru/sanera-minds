"use client"
import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

/* =========================
   INIT AOS
   ========================= */
function useAOS() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 120 })
  }, [])
}

/* =========================
   1) Banner
   ========================= */
function AboutBanner() {
  useAOS()

  return (
    <div
      className="relative h-[300px] md:h-[400px] w-full overflow-hidden"
      data-aos="zoom-in"
    >
      <img
        src="/s1.jpeg"
        alt="About Sanera Minds"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[rgba(6,32,22,0.72)]"></div>

      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <h1
          className="font-display text-white text-4xl md:text-5xl font-bold uppercase tracking-wide"
          data-aos="fade-up"
        >
          <span className="small-caps">About</span>{" "}
          <span className="italic">Sanera Minds</span>
        </h1>
      </div>
    </div>
  )
}

/* =========================
   2) Intro Section
   ========================= */
function AboutIntro() {
  useAOS()

  return (
    <section className="bg-[#eff0ea] py-12 md:py-16 px-6 text-center">
      <p
        className="font-body max-w-3xl mx-auto text-[#062016]/90 text-lg md:text-xl"
        data-aos="fade-up"
      >
        We’re a team of accredited psychotherapists who found ourselves clicking
        through the same e-learning... and honestly? It felt more like a
        ‘tick-box’ exercise than something genuinely useful. So we decided to do
        something about it.
      </p>
    </section>
  )
}

/* =========================
   3) Content Section
   ========================= */
function AboutContent() {
  useAOS()

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-6 font-body text-[#062016]/90 text-[17px] md:text-lg">
        <p data-aos="fade-up">
          We work with businesses and organisations looking to train and support their teams, including nurseries, schools and universities that are embedding emotional resilience and self-awareness, small businesses seeking wellbeing and team building, and events that want thoughtful, wellbeing-focused moments that stand out
        </p>
      </div>
    </section>
  )
}

/* =========================
   3b) Content + Image
   ========================= */
function AboutContentWithImage() {
  useAOS()

  return (
    <section className="bg-white py-14 md:py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-5" data-aos="fade-right">
          <h2 className="font-display text-2xl md:text-3xl text-[#11604b]">
            Our Story
          </h2>
          <p className="font-body text-[#062016]/90 text-[17px] md:text-lg leading-relaxed">
            We built Sanera Minds to bring learning back to life: people-centred, warm, practical, and genuinely uplifting. Our work is rooted in the belief that people learn best when they feel supported, understood, and inspired. We’re here to create experiences that make that possible..
          </p>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-lg"
          data-aos="fade-left"
        >
          <img
            src="/about1.png"
            alt="Sanera Minds Workshop"
            className="w-full h-[380px] object-cover"
          />
        </div>

      </div>
    </section>
  )
}

/* =========================
   4) We work with
   ========================= */
function AboutWorkWith() {
  useAOS()

  return (
    <section className="bg-[#eff0ea] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-2xl md:text-3xl text-[#11604b] mb-6"
          data-aos="fade-up"
        >
          We work with:
        </h2>

        <ul className="font-body list-disc list-inside space-y-3 text-[#062016]/90 text-[17px] md:text-lg">
          <li data-aos="fade-up">Businesses & organisations looking to support their teams</li>
          <li data-aos="fade-up">Nurseries, schools & universities embedding emotional resilience</li>
          <li data-aos="fade-up">Small businesses seeking wellbeing & team-building</li>
          <li data-aos="fade-up">Events hiring us to create thoughtful wellbeing-focused moments</li>
        </ul>
      </div>
    </section>
  )
}

/* =========================
   5) Closing CTA
   ========================= */
function AboutClosing() {
  useAOS()

  return (
    <section className="bg-white py-20 px-6 text-center">
      <p
        className="font-body max-w-3xl mx-auto text-[#062016]/90 text-lg md:text-xl mb-6"
        data-aos="fade-up"
      >
        Whether it’s online, in-person, or hybrid, our sessions are interactive,
        practical, and always human.
      </p>

      <h3
        className="font-display text-2xl md:text-3xl text-[#062016]"
        data-aos="fade-up"
      >
        It’s time for a new era.{" "}
        <span className="italic text-[#11604b]">Welcome to Sanera Minds.</span>
      </h3>

      <a
        href="/contact"
        className="inline-block mt-8 px-6 py-3 rounded-lg bg-[#11604b] text-white tracking-wide hover:opacity-90 transition"
        data-aos="zoom-in"
      >
        Get in touch
      </a>
    </section>
  )
}

/* =========================
   MAIN PAGE
   ========================= */
export default function AboutPage() {
  return (
    <main>
      <AboutBanner />
      <AboutIntro />
      <AboutContent />
      <AboutContentWithImage />
      <AboutWorkWith />
      <AboutClosing />
    </main>
  )
}
