export default function AboutWorkWith(){
  return (
    <section className="bg-[var(--brand-bg)] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl text-[var(--brand-teal)] mb-5">
          We work with:
        </h2>
        <ul className="font-body copy list-disc list-inside space-y-3 text-[var(--brand-deep)]/90 text-[17px] md:text-lg">
          <li>Businesses and organisations looking to train and support their teams</li>
          <li>Schools and universities embedding emotional resilience and self-awareness</li>
          <li>Small businesses for team-building and wellbeing</li>
          <li>Hens & friendship groups wanting a fun yet meaningful way to connect and learn</li>
        </ul>
      </div>
    </section>
  )
}