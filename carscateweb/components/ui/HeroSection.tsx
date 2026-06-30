import Hero from "./Hero";
import StatsBar from "./StatsBar";

export default function HeroSection() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/BgVid.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="translate-y-10">
          <Hero />
          <StatsBar />
        </div>
      </div>
    </div>
  );
}
