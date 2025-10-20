 export default function AboutBanner(){
  return (
    <div className="relative h-[300px] md:h-[420px] w-full">
      <img
        src="/images/about-banner.jpg" /* your sample/banner image */
        alt="About Sanera Minds"
        className="w-full h-full object-cover"
      />
      {/* Classic dark overlay with a hint of teal on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(6,32,22,0.82)] via-[rgba(6,32,22,0.78)] to-[rgba(17,96,75,0.72)]" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl tracking-wide">
          <span className="small-caps">About</span> <span className="italic">Sanera Minds</span>
        </h1>
      </div>
    </div>
  )
}