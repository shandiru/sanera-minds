"use client"
import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { motion } from "framer-motion";

/* =========================
   Init AOS Hook
   ========================= */
function useAOS() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      offset: 120,
      once: true,
    })
  }, [])
}

/* =========================
   1) Banner
   ========================= */
function OrgBanner() {
  useAOS()

  return (
    <div
      className="relative h-[300px] md:h-[400px] w-full overflow-hidden"
      data-aos="zoom-in"
    >
      <img
        src="/s1.jpeg"
        alt="Organisation Workshops"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[rgba(6,32,22,0.72)]" />

      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <h1
          className="font-display text-white text-4xl md:text-5xl font-bold uppercase tracking-wide"
          data-aos="fade-up"
        >
          <span className="small-caps">Organisations</span>
        </h1>
      </div>
    </div>
  )
}

/* =========================
   2) Intro
   ========================= */
function OrgIntro() {
  useAOS()

  return (
    <section className="bg-[#eff0ea] py-14 md:py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-5">

        <h2
          className="font-display text-2xl md:text-3xl text-[#11604b]"
          data-aos="fade-up"
        >
          Mental Wellbeing Workshops for Organisations
        </h2>
 
        <p
          className="font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed"
          data-aos="fade-up"
        >
           When people thrive, so does the workplace.
        </p> 

        <p
          className="org-para font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed"
          data-aos="fade-up"
        >
          Our therapist-led workshops help organisations create healthier, more connected teams 
          reducing stress, preventing burnout, and building a culture where wellbeing isn’t just a
          buzzword, it’s part of how you work.
        </p>

        <p
          className="org-para font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed"
          data-aos="fade-up"
        >
          We know every workplace is different. That's why every session is tailored to your people,
          your challenges, and your goals.
        </p>

      </div>
    </section>
  )
}

/* =========================
   3) What to Expect
   ========================= */
function OrgExpect() {
  useAOS()

  const items = [
    <>
      <span className="font-semibold text-[#11604b]">Therapist-led sessions that feel real and relevant.</span>{" "}
      Grounded, practical, and designed to fit naturally into the working day.
    </>,
    <>
      <span className="font-semibold text-[#11604b]">Tailored wellbeing assessments.</span>{" "}
      We start by understanding your organisation’s needs, then design workshops that meet them.
    </>,
    <>
      <span className="font-semibold text-[#11604b]">Training for managers and leaders.</span>{" "}
      Learn how to recognise signs of stress and create psychologically safe spaces.
    </>,
    <>
      <span className="font-semibold text-[#11604b]">Coping and resilience strategies for staff.</span>{" "}
      CBT techniques and stress management tools that people can apply instantly.
    </>,
    <>
      <span className="font-semibold text-[#11604b]">Flexible formats.</span>{" "}
      From 60–90 minute virtual sessions to full-day training  whatever works for your team.
    </>,
    <>
      <span className="font-semibold text-[#11604b]">E-learning: supporting life’s hardest moments.</span>{" "}
      Modules on grief, loss, miscarriage, infertility, illness and more  compassionate, private, and
      accessible anytime.
    </>,
  ]

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">

        <h2
          className="font-display text-2xl md:text-3xl text-[#11604b] mb-6 text-center"
          data-aos="fade-up"
        >
          What to Expect
        </h2>

        <ul className="font-body text-[#062016]/90 text-[17px] md:text-lg space-y-5">
          {items.map((item, index) => (
            <li key={index} className="org-item" data-aos="fade-up">
              {item}
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

/* =========================
   4) Why It Matters
   ========================= */



function OrgWhyItMatters() {
  useAOS();

  return (
    <section className="bg-[#eff0ea] py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-5">

        <h2
          className="font-display text-2xl md:text-3xl text-[#11604b]"
          data-aos="fade-up"
        >
          Why It Matters
        </h2>

        <p
          className="org-why font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed"
          data-aos="fade-up"
        >
          Mental health isn’t separate from performance — it drives it.
        </p>

        {/* --- IMAGE GRID WITH HOVER/ACTIVE ANIMATION --- */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6"
          data-aos="fade-up"
        >
          {["/w1.png", "/w2.png", "/w3.png"].map((src, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -8,
                scale: 1.03,
                borderColor: "#11604b",
              }}
              whileTap={{
                y: -8,
                scale: 1.03,
                borderColor: "#11604b",
              }}
              transition={{
                duration: 0.22,
                ease: "easeOut",
              }}
              className="border border-[#bfc8c5] rounded-xl overflow-hidden bg-white cursor-pointer"
            >
              <img
                src={src}
                alt={`Why It Matters ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <p
          className="org-why font-body text-[#062016]/90 text-lg md:text-xl"
          data-aos="fade-up"
        >
          Supporting mental health isn’t just kindness — it’s smart business.
        </p>

      </div>
    </section>
  );
}



/* =========================
   5) Closing CTA
   ========================= */
function OrgClosing() {
  useAOS()

  return (
    <section className="bg-white py-20 px-6 text-center">

      <p
        className="org-close-copy font-body max-w-3xl mx-auto text-[#062016]/90 text-lg md:text-xl mb-6"
        data-aos="fade-up"
      >
        Whether you’re a small business or a large organisation, our goal is to help you build a
        workplace where people feel supported, capable, and calm  even during the busiest times.
      </p>

      <h3
        className="font-display text-2xl md:text-3xl text-[#062016]"
        data-aos="fade-up"
      >
        Because healthy teams do better work.{" "}
        <span className="italic text-[#11604b]">Let's build yours.</span>
      </h3>

      <a
        href="/contact"
        className="org-close-cta inline-block mt-8 px-6 py-3 rounded-lg bg-[#11604b] text-white font-body tracking-wide hover:opacity-90 transition"
        data-aos="zoom-in"
      >
        Get in touch
      </a>

    </section>
  )
}

/* =========================
   PAGE EXPORT
   ========================= */
export default function OrganisationPage() {
  return (
    <main>
      <OrgBanner />
      <OrgIntro />
      <OrgExpect />
      <OrgWhyItMatters />
      <OrgClosing />
    </main>
  )
}
