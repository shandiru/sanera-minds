'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/* =========================
   1) Banner (parallax + intro)
   ========================= */
function AboutBanner() {
  const wrapRef = useRef(null)
  const imgRef = useRef(null)
  const titleRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduce) return

      // Title in
      gsap.from(titleRef.current, {
        y: 28, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.15,
      })

      // Parallax drift
      gsap.to(imgRef.current, {
        yPercent: 10, ease: 'none',
        scrollTrigger: { trigger: wrapRef.current, start: 'top top', end: 'bottom top', scrub: 0.5 }
      })

      // Overlay slight deepen
      gsap.to(overlayRef.current, {
        opacity: 0.9, ease: 'none',
        scrollTrigger: { trigger: wrapRef.current, start: 'top top', end: 'bottom top', scrub: 0.5 }
      })
    }, wrapRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapRef} className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
      <img
        ref={imgRef}
        src="/images/about-banner.jpg" /* your banner image */
        alt="About Sanera Minds"
        className="w-full h-full object-cover will-change-transform"
      />
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-[rgba(6,32,22,0.72)]"
      />
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <h1 ref={titleRef} className="font-display text-white text-4xl md:text-5xl font-bold uppercase tracking-wide">
          <span className="small-caps">About</span> <span className="italic">Sanera Minds</span>
        </h1>
      </div>
    </div>
  )
}

/* =========================
   2) Intro (staggered paras)
   ========================= */
function AboutIntro() {
  const rootRef = useRef(null)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray('.about-intro-para')
      gsap.from(els, {
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
        y: 18, opacity: 0, duration: 0.65, ease: 'power2.out', stagger: 0.12,
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={rootRef} className="bg-[#eff0ea] py-12 md:py-16 px-6 text-center">
      <p className="about-intro-para font-body copy max-w-3xl mx-auto text-[#062016]/90 text-lg md:text-xl">
        At Sanera Minds, we believe learning about mental health shouldn’t feel like ticking a box
        or worse, like reading a textbook with no real-life application.
      </p>
    </section>
  )
}

/* =========================
   3) Content (classic reveal)
   ========================= */
function AboutContent() {
  const rootRef = useRef(null)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const ctx = gsap.context(() => {
      gsap.from('.about-p', {
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
        y: 22, opacity: 0, duration: 0.6, ease: 'power2.out', stagger: 0.12,
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={rootRef} className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-6 font-body text-[#062016]/90 copy text-[17px] md:text-lg">
        <p className="about-p">
          We’re a team of qualified therapists who found ourselves clicking through the same
          e-learning... and honestly? It felt more like a ‘tick-box’ exercise than something
          genuinely useful. So we decided to do something about it.
        </p>
        <p className="about-p">
          <span className="font-semibold text-[#11604b]">Sanera Minds</span> (which means the new era of mental wellbeing) was born from a simple idea:
          mental health education should be practical, engaging, and actually helpful — not something you forget five minutes after the webinar ends.
        </p>
        <p className="about-p">
          Our seminars and workshops are grounded in <span className="font-semibold text-[#11604b]">CBT (Cognitive Behavioural Therapy)</span>,
          one of the most effective, hands-on approaches to improving mental wellbeing. Everything we teach is designed to be put into practice right away —
          whether you’re navigating stress at work, managing anxiety, or supporting others.
        </p>
      </div>
    </section>
  )
}

/* ===================================
   3b) Optional: Content with Image (wipe)
   =================================== */
function AboutContentWithImage() {
  const rootRef = useRef(null)
  const imgRef = useRef(null)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 78%',
          toggleActions: 'play reverse play reverse',
        }
      })
      tl.from('.aci-text', { x: -28, opacity: 0, duration: 0.75, ease: 'power3.out' })
        .from(imgRef.current, {
          clipPath: 'inset(12% 12% 12% 12%)',
          scale: 1.06,
          opacity: 0,
          duration: 0.95,
          ease: 'power2.out'
        }, '-=0.45')
    }, rootRef)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={rootRef} className="bg-white py-14 md:py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="aci-text space-y-5">
          <h2 className="font-display text-2xl md:text-3xl text-[#11604b]">Our Story</h2>
          <p className="font-body text-[#062016]/90 text-[17px] md:text-lg leading-relaxed">
            Sanera Minds was born from the belief that mental health learning should be practical, engaging,
            and deeply human — never a tick-box exercise.
          </p>
          <p className="font-body text-[#062016]/90 text-[17px] md:text-lg leading-relaxed">
            We blend CBT with interactive workshops so every session is useful, memorable, and meaningful.
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            ref={imgRef}
            src="/images/about-classic.jpg" /* swap to your preferred image */
            alt="Sanera Minds Workshop"
            className="w-full h-[380px] object-cover will-change-transform"
          />
          <div className="absolute inset-0 bg-[rgba(6,32,22,0.2)] mix-blend-multiply pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

/* =========================
   4) We work with (stagger)
   ========================= */
function AboutWorkWith() {
  const rootRef = useRef(null)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.aww-item')
      gsap.from(items, {
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
        y: 18, opacity: 0, duration: 0.55, ease: 'power2.out', stagger: 0.1,
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={rootRef} className="bg-[#eff0ea] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl text-[#11604b] mb-6">We work with:</h2>
        <ul className="font-body copy list-disc list-inside space-y-3 text-[#062016]/90 text-[17px] md:text-lg">
          <li className="aww-item">Businesses and organisations looking to train and support their teams</li>
          <li className="aww-item">Schools and universities embedding emotional resilience and self-awareness</li>
          <li className="aww-item">Small businesses for team-building and wellbeing</li>
          <li className="aww-item">Hens & friendship groups wanting a fun yet meaningful way to connect and learn</li>
        </ul>
      </div>
    </section>
  )
}

/* =========================
   5) Closing (lift + CTA)
   ========================= */
function AboutClosing() {
  const rootRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduce) return
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        }
      })
      tl.from('.about-close-copy', { y: 20, opacity: 0, duration: 0.7, ease: 'power2.out' })
        .from('.about-close-cta', { y: 14, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')

      // CTA hover micro-interaction
      if (ctaRef.current) {
        const btn = ctaRef.current
        const enter = () => gsap.to(btn, { y: -2, boxShadow: '0 10px 24px rgba(17,96,75,0.25)', duration: 0.25 })
        const leave = () => gsap.to(btn, { y: 0, boxShadow: '0 0 0 rgba(0,0,0,0)', duration: 0.25 })
        btn.addEventListener('mouseenter', enter)
        btn.addEventListener('mouseleave', leave)
        return () => {
          btn.removeEventListener('mouseenter', enter)
          btn.removeEventListener('mouseleave', leave)
        }
      }
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="bg-white py-20 px-6 text-center">
      <p className="about-close-copy font-body copy max-w-3xl mx-auto text-[#062016]/90 text-lg md:text-xl mb-6">
        Whether it’s online, in-person, or hybrid, our sessions are interactive, practical, and —
        let’s be honest — <span className="italic text-[#11604b] font-medium">always</span> fun.
      </p>
      <h3 className="font-display text-2xl md:text-3xl text-[#062016]">
        It’s time for a new era. <span className="italic text-[#11604b]">Welcome to Sanera Minds.</span>
      </h3>

      <a
        ref={ctaRef}
        href="/contact"
        className="about-close-cta inline-block mt-8 px-6 py-3 rounded-lg bg-[#11604b] text-white font-body tracking-wide hover:opacity-90 transition will-change-transform"
      >
        Get in touch
      </a>
    </section>
  )
}

/* ======== PAGE ======== */
export default function AboutPage() {
  return (
    <main>
      <AboutBanner />
      <AboutIntro />
      <AboutContent />
      <AboutContentWithImage /> {/* optional; remove if you want text-only */}
      <AboutWorkWith />
      <AboutClosing />
    </main>
  )
}
