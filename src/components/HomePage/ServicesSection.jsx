"use client"

export default function ServicesSection() {
  const services = [
    { title: "Organisations", href: "/services/organisation", img: "/s.jpeg" },
    { title: "Education", href: "/services/education", img: "/s1.jpeg" },
    { title: "Events", href: "/services/events", img: "/s2.jpeg" },
    { title: "Contact Us", href: "/contact", img: "/s4.jpeg" },
  ]

  return (
    <section className="bg-[#eff0ea] text-[#062016] font-[Inter]">

      {/* Top Banner */}
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
        <img
          src="/s1.jpeg"
          alt="Our Services"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/40 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-5xl font-[Playfair_Display] font-semibold uppercase tracking-[0.08em] drop-shadow-lg">
            Services
          </h2>
        </div>
      </div>

      {/* Intro Text */}
      <div className="max-w-3xl mx-auto text-center px-6 py-14">
        <p className="text-lg md:text-xl text-[#062016]/85 leading-relaxed font-light">
          Explore our range of{" "}
          <span className="font-medium text-[#11604b]">
            therapist-led programs
          </span>{" "}
          designed to enhance mental wellbeing from workplaces to classrooms and beyond.
        </p>
      </div>

      {/* Services Grid (2×2 on desktop) */}
      <div
        className="
          max-w-5xl mx-auto px-6 pb-20
          grid 
          grid-cols-1          /* mobile */
          sm:grid-cols-2       /* tablet */
          lg:grid-cols-2       /* desktop 2×2 */
          gap-6               /* reduced gap */
        "
      >
        {services.map((service, i) => (
          <a
            key={i}
            href={service.href}
            className="
              group rounded-2xl overflow-hidden bg-white border border-[#e0e3df]
              shadow-[0_6px_20px_rgba(0,0,0,0.08)]
              hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]
              transition-all duration-500 hover:-translate-y-2

              h-[260px] md:h-[280px] lg:h-[340px] /* bigger on desktop */
            "
          >
            <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
              {/* Image */}
              <img
                src={service.img}
                alt={service.title}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent opacity-70 
              transition duration-700 ease-out group-hover:opacity-0"></div>

              {/* Default Title */}
              <h3 className="
                absolute text-center text-white text-2xl font-semibold 
                tracking-wide drop-shadow-lg font-[Playfair_Display]
                transition-opacity duration-500 group-hover:opacity-0
              ">
                {service.title}
              </h3>

              {/* Hover Text */}
              <div className="
                absolute inset-0 flex items-center justify-center opacity-0 
                transition-opacity duration-700 group-hover:opacity-100
              ">
                <span className="text-white text-lg font-[Inter] tracking-[0.05em] px-6 text-center drop-shadow-lg">
                  Learn more about our {service.title.toLowerCase()} programs →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
