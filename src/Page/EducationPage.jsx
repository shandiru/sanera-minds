"use client"
import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

/* =========================
   1) Banner
   ========================= */
function EducationBanner() {
  const wrapRef = useRef(null)
  const imgRef = useRef(null)
  const titleRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const ctx = gsap.context(() => {
      if (reduce) return

      gsap.from(titleRef.current, {
        y: 28,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.15,
      })

      gsap.to(imgRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      })

      gsap.to(overlayRef.current, {
        opacity: 0.9,
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      })
    }, wrapRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapRef} className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
      <img
        ref={imgRef}
        src="/s1.jpeg"
        alt="Education at Sanera Minds"
        className="w-full h-full object-cover will-change-transform"
      />
      <div ref={overlayRef} className="absolute inset-0 bg-[rgba(6,32,22,0.72)]" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <h1
          ref={titleRef}
          className="font-display text-white text-4xl md:text-5xl font-bold uppercase tracking-wide"
        >
          <span className="small-caps">Education</span>
        </h1>
      </div>
    </div>
  )
}

/* =========================
   2) Intro — UPDATED WITH NEW CONTENT
   ========================= */
function EducationIntro() {
  const rootRef = useRef(null)
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return
    const ctx = gsap.context(() => {
      gsap.from(".edu-para", {
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        y: 18,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.15,
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="bg-[#eff0ea] py-14 md:py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-5">

        <h2 className="font-display text-2xl md:text-3xl text-[#11604b]">
          Mental Wellbeing Workshops for Nurseries, Schools & Universities
        </h2>

        <p className="edu-para font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed">
          Because learning starts with feeling safe, supported, and seen.
        </p>

        <p className="edu-para font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed">
          We create thoughtful, down-to-earth workshops designed specifically for nurseries, schools,
          colleges, and universities. Whether you’re supporting your staff, students, or both — our
          sessions give people the tools and confidence to approach mental health with awareness,
          empathy, and practical skills they can use every day.
        </p>

        <p className="edu-para font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed">
          Led by accredited psychotherapists, our workshops bring evidence-based practice to life
          through warmth, connection, and practical learning you can genuinely use.
        </p>

        <p className="edu-para font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed">
          Flexible, assessment-based approach. We tailor every session to your specific needs —
          from staff wellbeing training, neurodiversity workshops, and student mental health days
          to curriculum-linked workshops.
        </p>

      </div>
    </section>
  )
}

/* =========================
   3) What to Expect — UPDATED WITH NEW CONTENT
   ========================= */
function EducationExpect() {
  const rootRef = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".edu-item", {
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        <h2 className="font-display text-2xl md:text-3xl text-[#11604b] mb-6 text-center">
          What to Expect
        </h2>

        <ul className="font-body text-[#062016]/90 text-[17px] md:text-lg space-y-5">

          <li className="edu-item">
            <span className="font-semibold text-[#11604b]">
              Thoughtful, down-to-earth workshops.
            </span>{" "}
            Designed for nurseries, schools, colleges, and universities — grounded, warm, and tailored
            to real needs.
          </li>

          <li className="edu-item">
            <span className="font-semibold text-[#11604b]">
              Led by accredited psychotherapists.
            </span>{" "}
            We translate evidence-based practice into real-world, practical tools that staff and
            students can use immediately.
          </li>

          <li className="edu-item">
            <span className="font-semibold text-[#11604b]">
              Flexible, assessment-based approach.
            </span>{" "}
            Every session is shaped around your environment — from staff training and student mental
            health days to curriculum-linked wellbeing workshops.
          </li>

          <li className="edu-item">
            <span className="font-semibold text-[#11604b]">
              Supportive workshops, assemblies & presentations.
            </span>{" "}
            From emotional regulation and self-esteem building to managing stress, transitions, and
            academic pressure.
          </li>

          <li className="edu-item">
            <span className="font-semibold text-[#11604b]">
              A vision for wellbeing woven into education.
            </span>{" "}
            Because when wellbeing is part of the learning environment, every child, young person, and
            adult feels seen, supported, and safe to grow.
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
  const rootRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 78%",
        },
      })
      tl.from(".early-text", { x: -28, opacity: 0, duration: 0.7, ease: "power3.out" })
        .from(
          imgRef.current,
          {
            clipPath: "inset(12% 12% 12% 12%)",
            scale: 1.06,
            opacity: 0,
            duration: 0.95,
            ease: "power2.out",
          },
          "-=0.45"
        )
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="bg-[#eff0ea] py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div className="early-text space-y-5">
          <h2 className="font-display text-2xl md:text-3xl text-[#11604b]">
            Supporting Emotional Regulation in Early Years
          </h2>

          <p className="font-body text-[#062016]/90 text-[17px] md:text-lg">
            We also offer workshops for nurseries and early years settings, helping young children
            recognise, understand, and manage their emotions from an early age.
          </p>

          <p className="font-body text-[#062016]/90 text-[17px] md:text-lg">
            Using playful activities — storytelling, movement, and creative exercises — children
            build foundational emotional awareness, social connection, and resilience.
          </p>

          <p className="font-body text-[#062016]/90 text-[17px] md:text-lg">
            These skills help children settle calmly, communicate confidently, and participate fully
            in learning environments.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            ref={imgRef}
            src="/edu.jpeg"
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
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-p", {
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="bg-white py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-5">

        <h2 className="font-display text-2xl md:text-3xl text-[#11604b]">Why It Matters</h2>

        <p className="why-p font-body text-[#062016]/90 text-lg md:text-xl">
          Mental health shapes every part of learning. When educators feel equipped and students feel
          understood, classrooms become calmer, kinder, and more connected.
        </p>

        <p className="why-p font-body text-[#062016]/90 text-lg md:text-xl">
          Our goal is to make wellbeing a natural part of education — not an add-on, but a
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
  const rootRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".edu-close-copy", {
        scrollTrigger: { trigger: rootRef.current, start: "top 85%" },
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      })
      gsap.from(".edu-close-cta", {
        scrollTrigger: { trigger: rootRef.current, start: "top 85%" },
        y: 14,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.2,
      })

      const btn = ctaRef.current
      const enter = () =>
        gsap.to(btn, { y: -2, boxShadow: "0 10px 24px rgba(17,96,75,0.25)", duration: 0.25 })
      const leave = () =>
        gsap.to(btn, { y: 0, boxShadow: "0 0 0 rgba(0,0,0,0)", duration: 0.25 })
      btn.addEventListener("mouseenter", enter)
      btn.addEventListener("mouseleave", leave)

      return () => {
        btn.removeEventListener("mouseenter", enter)
        btn.removeEventListener("mouseleave", leave)
      }
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="bg-[#eff0ea] py-20 px-6 text-center">
      <p className="edu-close-copy font-body max-w-3xl mx-auto text-[#062016]/90 text-lg md:text-xl mb-6">
        Let’s build educational sectors where wellbeing is woven into every lesson and every person
        feels seen, supported, and safe to grow.
      </p>

      <a
        ref={ctaRef}
        href="/contact"
        className="edu-close-cta inline-block mt-6 px-6 py-3 rounded-lg bg-[#11604b] text-white font-body tracking-wide hover:opacity-90 transition will-change-transform"
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
