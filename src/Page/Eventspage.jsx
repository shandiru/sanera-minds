"use client"
import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

/* ====================
   INIT AOS
   ==================== */
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
   1) Banner (AOS)
   ========================= */
function WorkshopBanner() {
  useAOS()

  return (
    <div
      className="relative h-[280px] md:h-[380px] w-full overflow-hidden"
      data-aos="zoom-in"
    >
      <img
        src="/s1.jpeg"
        alt="Workshops"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(6,32,22,0.82)] via-[rgba(6,32,22,0.78)] to-[rgba(17,96,75,0.72)]" />

     <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <h1
          className="font-display text-white text-4xl md:text-5xl font-bold uppercase tracking-wide"
          data-aos="fade-up"
        >
          <span className="small-caps">Events</span>
        </h1>
      </div>
    </div>
  )
}

/* =========================
   2) INTRO
   ========================= */
function WorkshopIntro() {
  useAOS()

  return (
    <section className="bg-[#eff0ea] py-12 md:py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <p
          className="font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed"
          data-aos="fade-up"
        >
          Mental wellbeing workshops aren’t just for corporate settings! We also create meaningful,
          down-to-earth sessions for events, small businesses and parties, who want to learn
          something new or connect on a deeper level.
        </p>

        <p
          className="font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed mt-5"
          data-aos="fade-up"
        >
          Whether you’re hosting an event, planning a team away day, organising a unique weekend,
          or just want to bring your circle together for something different  our workshops
          are grounded, practical, and genuinely uplifting.
        </p>

      </div>
    </section>
  )
}

/* =========================
   3) Therapist-led Block
   ========================= */
function WorkshopImageBlock() {
  useAOS()

  return (
    <section className="bg-white py-14 md:py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-5" data-aos="fade-right">
          <h2 className="font-display text-2xl md:text-3xl text-[#11604b]">
            Therapist-led, human-first
          </h2>

         <p className="font-body text-[#062016]/90 text-[17px] md:text-lg leading-relaxed">
            All sessions are guided by accredited psychotherapists and thoughtfully
            designed to provide a warm, welcoming, and meaningful experience. They
            foster authentic conversation, practical insights, and space for reflection
            and personal growth.
          </p>

          <p className="font-body text-[#062016]/90 text-[17px] md:text-lg leading-relaxed">
            These experiences are well-suited for a wide range of events, including
            corporate gatherings, team-building initiatives, and special occasions where
            thoughtful engagement and wellbeing are valued alongside enjoyment.
          </p>

        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-lg"
          data-aos="fade-left"
        >
          <img
            src="/event.png"
            alt="Sanera Minds Workshops"
            className="w-full h-[380px] object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(6,32,22,0.20)] mix-blend-multiply pointer-events-none" />
        </div>

      </div>
    </section>
  )
}

/* =========================
   4) Flexible Formats
   ========================= */
function WorkshopFormats() {
  useAOS()

  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2
          className="font-display text-2xl md:text-3xl text-[#11604b] mb-4"
          data-aos="fade-up"
        >
          Flexible Formats
        </h2>

       <p
  className="font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed"
  data-aos="fade-up"
>
  We offer flexible formats, from online workshops to in-person sessions,
  delivered either in your space or ours. Each experience is shaped with care to
  meet your group where they are.
</p>

<p
  className="font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed"
  data-aos="fade-up"
  data-aos-delay="200"
>
  Whether it’s a team offsite, a wellness event, or an intimate gathering, our
  sessions create space to pause, connect, and recharge. Wellbeing is not
  one-size-fits-all  and neither are we.
</p>


      </div>
    </section>
  )
}

/* =========================
   5) What to Expect
   ========================= */
function WorkshopExpect() {
  useAOS()

  const items = [
    "Therapist-led sessions that are interactive and warm. No awkward icebreakers or lectures.",
    "Breathing exercises and grounding techniques to calm your system and help you stay present.",
    "Connection exercises that spark real conversation, laughter, and meaningful bonding.",
    "Topics like stress, self-worth, confidence, boundaries, emotional regulation, and more.",
    "Customisable content so you can pick the topics that match your group’s vibe.",
    "A CBT-based toolkit with exercises you can actually use in everyday life.",
    "Flexible formats from Zoom workshops to in-person sessions  in your space or ours.",
  ]

  return (
    <section className="bg-[#eff0ea] py-16 px-6">
      <div className="max-w-5xl mx-auto">

        <h2
          className="font-display text-2xl md:text-3xl text-[#11604b] mb-6"
          data-aos="fade-up"
        >
          What to Expect
        </h2>

        <ul className="space-y-4">
          {items.map((item, i) => (
            <li key={i} className="group" data-aos="fade-up">
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
   6) Closing Section
   ========================= */
function WorkshopClosing() {
  useAOS()

  return (
    <section className="bg-white py-18 md:py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">

        <p
          className="font-body text-[#062016]/90 text-lg md:text-xl leading-relaxed mb-6"
          data-aos="fade-up"
        >
          Whether it’s a team offsite, a wellness event, or a gathering with friends  our sessions
          are designed to bring people together in a meaningful way. Each experience is tailored to
          your group  offering space to pause, connect, and recharge. Because wellbeing isn’t
          one-size-fits-all, and neither are we.
        </p>

      </div>
    </section>
  )
}

/* =========================
   PAGE EXPORT
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
