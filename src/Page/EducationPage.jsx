"use client"
import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

/* =========================
   INIT AOS
   ========================= */
function useAOS() {
  useEffect(() => {
    AOS.init({ duration: 900, offset: 120, once: true })
  }, [])
}

/* =========================
   1) Banner (AOS)
   ========================= */
function EducationBanner() {
  useAOS()

  return (
    <div
      className="relative h-[300px] md:h-[400px] w-full overflow-hidden"
      data-aos="zoom-in"
    >
      <img
        src="/s1.jpeg"
        alt="Education at Sanera Minds"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(6,32,22,0.72)]" />

      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <h1
          className="font-display text-white text-4xl md:text-5xl font-bold uppercase tracking-wide"
          data-aos="fade-up"
        >
          <span className="small-caps">Education</span>
        </h1>
      </div>
    </div>
  )
}

/* =========================
   2) Intro Section
   ========================= */
function EducationIntro() {
  useAOS()

  return (
    <section className="bg-[#eff0ea] py-14 md:py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-5">

        <h2
          className="font-display text-2xl md:text-3xl text-[#11604b]"
          data-aos="fade-up"
        >
          Mental Wellbeing Workshops for Nurseries, Schools & Universities
        </h2>

         <p
          className="font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed"
          data-aos="fade-up"
        >
           Learning starts with feeling safe, supported, and seen.
        </p> 

        <p
          className="font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed"
          data-aos="fade-up"
        >
          We create thoughtful, down-to-earth workshops designed specifically for nurseries,
          schools, colleges, and universities. Whether you’re supporting your staff, students,
          or both  our sessions give people the tools and confidence to approach mental health
          with awareness, empathy, and practical skills they can use every day.
        </p>

        <p
          className="font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed"
          data-aos="fade-up"
        >
          Led by accredited psychotherapists, our workshops bring evidence-based practice to life
          through warmth, connection, and practical learning you can genuinely use.
        </p>

        <p
          className="font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed"
          data-aos="fade-up"
        >
          Flexible, assessment-based approach. We tailor every session to your specific needs 
          from staff wellbeing training, neurodiversity workshops, and student mental health days
          to curriculum-linked workshops.
        </p>

      </div>
    </section>
  )
}

/* =========================
   3) What to Expect
   ========================= */
function EducationExpect() {
  useAOS()

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

          <li data-aos="fade-up">
            <span className="font-semibold text-[#11604b]">
              Thoughtful, down-to-earth workshops.
            </span>{" "}
            Designed for nurseries, schools, colleges, and universities  grounded, warm, and tailored
            to real needs.
          </li>

          <li data-aos="fade-up">
            <span className="font-semibold text-[#11604b]">
              Led by accredited psychotherapists.
            </span>{" "}
            We translate evidence-based practice into real-world, practical tools that staff and
            students can use immediately.
          </li>

          <li data-aos="fade-up">
            <span className="font-semibold text-[#11604b]">
              Flexible, assessment-based approach.
            </span>{" "}
            Every session is shaped around your environment  from staff training and student mental
            health days to curriculum-linked wellbeing workshops.
          </li>

          <li data-aos="fade-up">
            <span className="font-semibold text-[#11604b]">
              Supportive workshops, assemblies & presentations.
            </span>{" "}
            Covering emotional regulation, self-esteem building, transitions, stress, and academic pressure.
          </li>

          <li data-aos="fade-up">
            <span className="font-semibold text-[#11604b]">
              A vision for wellbeing woven into education.
            </span>{" "}
             When wellbeing is part of the learning environment, every child and adult feels
            seen, supported, and safe to grow.
          </li>

        </ul>
      </div>
    </section>
  )
}

/* =========================
   4) Early Years
   ========================= */
function EducationEarlyYears() {
  useAOS()

  return (
    <section className="bg-[#eff0ea] py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-5" data-aos="fade-right">
          <h2 className="font-display text-2xl md:text-3xl text-[#11604b]">
            Supporting Emotional Regulation in Early Years
          </h2>

          <p className="font-body text-[#062016]/90 text-[17px] md:text-lg">
            We offer workshops for nurseries and early years settings, helping young children
            recognise, understand, and manage their emotions from an early age.
          </p>

          <p className="font-body text-[#062016]/90 text-[17px] md:text-lg">
            Using playful activities like storytelling, movement, and creative exercises, children
            build foundational emotional awareness, social connection, and resilience.
          </p>

          <p className="font-body text-[#062016]/90 text-[17px] md:text-lg">
            These skills help children settle calmly, communicate confidently, and participate fully
            in learning environments.
          </p>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-lg"
          data-aos="fade-left"
        >
          <img
            src="/edu.png"
            alt="Early Years Workshop"
            className="w-full h-[380px] object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(6,32,22,0.2)] mix-blend-multiply pointer-events-none" />
        </div>

      </div>
    </section>
  )
}

/* =========================
   5) Why It Matters
   ========================= */
function EducationWhyItMatters() {
  useAOS()

  return (
    <section className="bg-white py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-5">

        <h2
          className="font-display text-2xl md:text-3xl text-[#11604b]"
          data-aos="fade-up"
        >
          Why It Matters
        </h2>

        <p
          className="font-body text-[#062016]/90 text-lg md:text-xl"
          data-aos="fade-up"
        >
          Mental health shapes every part of learning. When educators feel equipped and students feel
          understood, classrooms become calmer, kinder, and more connected.
        </p>

        <p
          className="font-body text-[#062016]/90 text-lg md:text-xl"
          data-aos="fade-up"
        >
          Our goal is to make wellbeing a natural part of education  not an add-on, but a
          foundation that helps everyone thrive.
        </p>

      </div>
    </section>
  )
}

/* =========================
   6) Closing CTA
   ========================= */
function EducationClosing() {
  useAOS()

  return (
    <section className="bg-[#eff0ea] py-20 px-6 text-center">

      <p
        className="font-body max-w-3xl mx-auto text-[#062016]/90 text-lg md:text-xl mb-6"
        data-aos="fade-up"
      >
        Let’s build educational sectors where wellbeing is woven into every lesson and every person
        feels seen, supported, and safe to grow.
      </p>

      <a
        href="/contact"
        className="inline-block mt-6 px-6 py-3 rounded-lg bg-[#11604b] text-white font-body tracking-wide hover:opacity-90 transition"
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
export default function EducationPage() {
  return (
    <main>
      <EducationBanner />
      <EducationIntro />
      <EducationExpect />
      <EducationEarlyYears />
      <EducationWhyItMatters />
      <EducationClosing />
    </main>
  )
}
