"use client"
import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

/* =========================
   1) Banner
   ========================= */
function OrgBanner() {
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
        alt="Organisation Workshops"
        className="w-full h-full object-cover will-change-transform"
      />
      <div ref={overlayRef} className="absolute inset-0 bg-[rgba(6,32,22,0.72)]" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <h1
          ref={titleRef}
          className="font-display text-white text-4xl md:text-5xl font-bold uppercase tracking-wide"
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
  const rootRef = useRef(null)
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return
    const ctx = gsap.context(() => {
      gsap.from(".org-para", {
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
          Mental Wellbeing Workshops for Organisations
        </h2>
        <p className="org-para font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed">
          Because when people thrive, so does the workplace.
        </p>
        <p className="org-para font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed">
          Our therapist-led workshops help organisations create healthier, more connected teams —
          reducing stress, preventing burnout, and building a culture where wellbeing isn’t just a
          buzzword, it’s part of how you work.
        </p>
        <p className="org-para font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed">
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
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".org-item", {
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

          <li className="org-item">
            <span className="font-semibold text-[#11604b]">Therapist-led sessions that feel real and relevant.</span>{" "}
            Grounded, practical, and designed to fit naturally into the working day.
          </li>

          <li className="org-item">
            <span className="font-semibold text-[#11604b]">Tailored wellbeing assessments.</span>{" "}
            We start by understanding your organisation’s needs, then design workshops that meet them.
          </li>

          <li className="org-item">
            <span className="font-semibold text-[#11604b]">Training for managers and leaders.</span>{" "}
            Learn how to recognise signs of stress and create psychologically safe spaces.
          </li>

          <li className="org-item">
            <span className="font-semibold text-[#11604b]">Coping and resilience strategies for staff.</span>{" "}
            CBT techniques and stress management tools that people can apply instantly.
          </li>

          {/* ⭐ ADDED CONTENT: Flexible Formats */}
          <li className="org-item">
            <span className="font-semibold text-[#11604b]">Flexible formats. </span>
            From 60–90 minute virtual sessions to in-person team half/full days or leadership training — 
            we’ll adapt to your space, your schedule, and your priorities.
          </li>

          {/* ⭐ ADDED CONTENT: E-learning */}
          <li className="org-item">
            <span className="font-semibold text-[#11604b]">
              E-learning: addressing life’s hardest moments.{" "}
            </span>
            On-demand, therapist-designed modules for employees navigating grief, loss,
            miscarriage, pet loss, illness, IVF, infertility, and more — quiet, compassionate support
            that helps them manage wellbeing and workload without judgement or pressure.
          </li>

        </ul>
      </div>
    </section>
  )
}

/* =========================
   4) Why It Matters
   ========================= */
function OrgWhyItMatters() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".org-why", {
        scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
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
    <section ref={rootRef} className="bg-[#eff0ea] py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-5">
        <h2 className="font-display text-2xl md:text-3xl text-[#11604b]">Why It Matters</h2>

        <p className="org-why font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed">
          Mental health isn’t separate from performance — it drives it.
        </p>

        <ul className="org-why font-body text-[#062016]/90 text-lg md:text-xl text-left list-disc list-inside space-y-2">
          <li>Over 70 million workdays lost yearly due to stress, depression, and anxiety.</li>
          <li>Financial cost to employers estimated at £56 billion annually.</li>
          <li>Companies investing in wellbeing see a 5:1 return in productivity & retention.</li>
        </ul>

        <p className="org-why font-body text-[#062016]/90 text-lg md:text-xl">
          Supporting mental health isn’t just kindness — it’s smart business.
        </p>
      </div>
    </section>
  )
}

/* =========================
   5) Closing CTA
   ========================= */
function OrgClosing() {
  const rootRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".org-close-copy", {
        scrollTrigger: { trigger: rootRef.current, start: "top 85%" },
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      })
      gsap.from(".org-close-cta", {
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
    <section ref={rootRef} className="bg-white py-20 px-6 text-center">
      <p className="org-close-copy font-body max-w-3xl mx-auto text-[#062016]/90 text-lg md:text-xl mb-6">
        Whether you’re a small business or a large organisation, our goal is to help you build a
        workplace where people feel supported, capable, and calm — even during the busiest times.
      </p>

      <h3 className="font-display text-2xl md:text-3xl text-[#062016]">
        Because healthy teams do better work.{" "}
        <span className="italic text-[#11604b]">Let's build yours.</span>
      </h3>

      <a
        ref={ctaRef}
        href="/contact"
        className="org-close-cta inline-block mt-8 px-6 py-3 rounded-lg bg-[#11604b] text-white font-body tracking-wide hover:opacity-90 transition"
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
