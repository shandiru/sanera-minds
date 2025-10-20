"use client"

export default function ServicesSection() {
  const services = [
    { title: "Organisations", href: "/services/organisation", img: "/images/organisations.jpg" },
    { title: "Education", href: "/services/education", img: "/images/education.jpg" },
    { title: "Workshops", href: "/services/workshops", img: "/images/workshops.jpg" },
    { title: "Resources", href: "/services/resources", img: "/images/resources.jpg" },
    { title: "Contact Us", href: "/contact", img: "/images/contact.jpg" },
  ]

  return (
    <section className="bg-[#eff0ea] text-[#062016] font-body">
      {/* Top Banner */}
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
        <img
          src="/images/banner.jpg"
          alt="Our Services"
          className="object-cover w-full h-full brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062016]/80 via-[#11604b]/80 to-[#0e3f30]/80 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-5xl font-display font-semibold uppercase tracking-[0.08em] drop-shadow-lg">
            Services
          </h2>
        </div>
      </div>

      {/* Intro Text */}
      <div className="max-w-3xl mx-auto text-center px-6 py-14">
        <p className="text-lg md:text-xl text-[#062016]/85 leading-relaxed font-light">
          Explore our range of <span className="font-medium text-[#11604b]">therapist-led programs</span> designed to
          enhance mental wellbeing — from workplaces to classrooms, and beyond.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <a
            key={i}
            href={service.href}
            className="relative group rounded-2xl overflow-hidden bg-white border border-[#e0e3df] shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative h-[240px] md:h-[260px] overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062016]/80 via-[#062016]/30 to-transparent opacity-70 group-hover:opacity-90 transition duration-500"></div>
              <h3 className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-2xl font-semibold tracking-wide text-center drop-shadow-lg font-display">
                {service.title}
              </h3>
            </div>

            {/* Overlay Text on Hover */}
            <div className="absolute inset-0 bg-[#11604b]/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-white text-lg font-body tracking-[0.05em] px-6 text-center">
                Learn more about our {service.title.toLowerCase()} programs →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
