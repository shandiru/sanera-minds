"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* =========================
   1) Banner
   ========================= */
function WorkshopBanner() {
  const titleRef = useRef(null)
  const bannerRef = useRef(null)
  const imgRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (!prefersReduce) {
        gsap.from(titleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: 0.15,
        })

        gsap.to(imgRef.current, {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
          },
        })

        gsap.to(overlayRef.current, {
          opacity: 0.9,
          ease: 'none',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
          },
        })
      }
    }, bannerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={bannerRef} className="relative h-[280px] md:h-[380px] w-full overflow-hidden">
      <img
        ref={imgRef}
        src="/s1.jpeg"
        alt="Workshops"
        className="w-full h-full object-cover will-change-transform"
      />

      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-r from-[rgba(6,32,22,0.82)] via-[rgba(6,32,22,0.78)] to-[rgba(17,96,75,0.72)]"
      />

      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <h1
          ref={titleRef}
          className="font-display text-white text-4xl md:text-5xl lg:text-6xl tracking-wide"
        >
          Workshops
        </h1>
      </div>
    </div>
  )
}

/* =========================
   2) INTRO (FULL NEW CONTENT ADDED)
   ========================= */
function WorkshopIntro() {
  const introRef = useRef(null)

  useEffect(() => {
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduce) return

    const ctx = gsap.context(() => {
      const paras = gsap.utils.toArray('.intro-para')
      gsap.from(paras, {
        scrollTrigger: {
          trigger: introRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.15,
      })
    }, introRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={introRef} className="bg-[#eff0ea] py-12 md:py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <p className="intro-para font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed">
          Mental wellbeing workshops aren’t just for corporate settings! We also create meaningful,
          down-to-earth sessions for events, small businesses and parties, who want to learn
          something new or connect on a deeper level.
        </p>

        <p className="intro-para font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed mt-5">
          Whether you’re hosting an event, planning a team away day, organising a unique weekend,
          or just want to bring your circle together for something different, we offer workshops
          that are grounded, practical, and genuinely uplifting.
        </p>

      </div>
    </section>
  )
}

/* =========================
   3) Therapist-led (FULL NEW CONTENT ADDED)
   ========================= */
function WorkshopImageBlock() {
  const blockRef = useRef(null)
  const imgInnerRef = useRef(null)

  useEffect(() => {
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduce) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: blockRef.current,
          start: 'top 75%',
          toggleActions: 'play reverse play reverse',
        },
      })

      tl.from('.wib-text', { x: -30, opacity: 0, duration: 0.8, ease: 'power3.out' })
        .from(
          imgInnerRef.current,
          {
            clipPath: 'inset(12% 12% 12% 12%)',
            scale: 1.06,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
          },
          '-=0.5'
        )
    }, blockRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={blockRef} className="bg-white py-14 md:py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="wib-text space-y-5">
          <h2 className="font-display text-2xl md:text-3xl text-[#11604b]">
            Therapist-led, human-first
          </h2>

          <p className="font-body text-[#062016]/90 text-[17px] md:text-lg leading-relaxed">
            Every session is guided by accredited psychotherapists and crafted to feel warm,
            welcoming, and genuinely meaningful — never awkward or clinical.
          </p>

          <p className="font-body text-[#062016]/90 text-[17px] md:text-lg leading-relaxed">
            No forced icebreakers or surface-level chatter — just real conversation, practical tools,
            and space to connect, reflect, and breathe. Perfect for events, gatherings, and parties
            that value depth as much as fun.
          </p>

        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            ref={imgInnerRef}
            src="/images/workshops-classic.jpg"
            alt="Sanera Minds Workshops"
            className="w-full h-[380px] object-cover will-change-transform"
          />
          <div className="absolute inset-0 bg-[rgba(6,32,22,0.20)] mix-blend-multiply pointer-events-none" />
        </div>

      </div>
    </section>
  )
}

/* =========================
   4) FLEXIBLE FORMATS — NEW SECTION ADDED
   ========================= */
function WorkshopFormats() {
  const ref = useRef(null)

  useEffect(() => {
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduce) return

    const ctx = gsap.context(() => {
      gsap.from('.formats-para', {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-white py-14 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="font-display text-2xl md:text-3xl text-[#11604b] mb-4">
          Flexible Formats
        </h2>

        <p className="formats-para font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed">
          Flexible formats from online workshops to in-person sessions, in your space or ours.
        </p>

      </div>
    </section>
  )
}

/* =========================
   5) What to Expect
   ========================= */
function WorkshopExpect() {
  const listRef = useRef(null)

  const items = [
    "Therapist-led sessions that are interactive and warm. No awkward icebreakers or lectures.",
    "Breathing exercises and grounding techniques to calm your system and help you stay present.",
    "Connection exercises that spark real conversation, laughter, and meaningful bonding.",
    "Topics like stress, self-worth, confidence, boundaries, emotional regulation, and more.",
    "Customisable content so you can pick the topics that match your group’s vibe.",
    "A CBT-based toolkit with exercises you can actually use in everyday life.",
    "Flexible formats from Zoom workshops to in-person sessions — in your space or ours.",
  ]

  useEffect(() => {
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduce) return

    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray('.expect-item')

      els.forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse',
          },
          y: 16,
          x: i % 2 === 0 ? -20 : 20,
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
        })
      })
    }, listRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={listRef} className="bg-[#eff0ea] py-16 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="font-display text-2xl md:text-3xl text-[#11604b] mb-6">
          What to Expect
        </h2>

        <ul className="space-y-4">
          {items.map((item, i) => (
            <li key={i} className="expect-item group">
              <div className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-2.5 w-2.5 rounded-full bg-[#11604b]" />
                <p className="font-body text-[#062016]/90 text-[17px] md:text-lg leading-relaxed">
                  {item}
                </p>
              </div>
              <div className="ml-[18px] mt-3 h-px bg-[#11604b]/15 group-last:hidden" />
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

/* =========================
   6) Closing — (FULL TEXT ADDED)
   ========================= */
function WorkshopClosing() {
  const closeRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (!prefersReduce) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: closeRef.current,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse',
          },
        })

        tl.from('.closing-copy', {
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
        })

        tl.from('.closing-cta', {
          y: 14,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
        })

        if (ctaRef.current) {
          const btn = ctaRef.current
          const enter = () =>
            gsap.to(btn, {
              y: -2,
              boxShadow: '0 10px 24px rgba(17,96,75,0.25)',
              duration: 0.25,
            })
          const leave = () =>
            gsap.to(btn, {
              y: 0,
              boxShadow: '0 0 0 rgba(0,0,0,0)',
              duration: 0.25,
            })
          btn.addEventListener('mouseenter', enter)
          btn.addEventListener('mouseleave', leave)
        }
      }
    }, closeRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={closeRef} className="bg-white py-18 md:py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">

        <p className="closing-copy font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed mb-6">
          Whether it’s a team offsite, a wellness event, or a gathering with friends — our sessions
          are designed to bring people together in a meaningful way. Each experience is tailored to
          your group — offering space to pause, connect, and recharge. Because wellbeing isn’t
          one-size-fits-all, and neither are we.
        </p>

        <a
          ref={ctaRef}
          href="/contact"
          className="closing-cta inline-block mt-4 px-6 py-3 rounded-lg bg-[#11604b] text-white font-body tracking-wide hover:opacity-90 transition will-change-transform"
        >
          Enquire about a workshop
        </a>

      </div>
    </section>
  )
}

/* =========================
   Page Export
   ========================= */
export default function WorkshopsPage() {
  return (
    <main>
      <WorkshopBanner />
      <WorkshopIntro />
      <WorkshopImageBlock />
      <WorkshopFormats />
      <WorkshopExpect />
      <WorkshopClosing />
    </main>
  )
}
