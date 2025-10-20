export default function AboutContentWithImage() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Side */}
        <div className="space-y-6 font-body text-[var(--brand-deep)]/90 copy text-lg">
          <h2 className="font-display text-3xl md:text-4xl text-[var(--brand-teal)] mb-4">
            Our Story
          </h2>
          <p>
            Sanera Minds was born from the belief that mental health learning should be practical,
            engaging, and deeply human. Too often, education feels like ticking boxes — we wanted
            something that truly transforms lives.
          </p>
          <p>
            That’s why our approach blends <span className="font-semibold text-[var(--brand-teal)]">CBT (Cognitive Behavioural Therapy)</span> with interactive workshops,
            ensuring every session is useful, memorable, and meaningful.
          </p>
        </div>

        {/* Image Side */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/about-classic.jpg" // <-- replace with your chosen image
            alt="Sanera Minds Workshop"
            className="w-full h-[400px] object-cover"
          />
          {/* Overlay for classic tone */}
          <div className="absolute inset-0 bg-[rgba(6,32,22,0.25)] mix-blend-multiply" />
        </div>
      </div>
    </section>
  )
}
