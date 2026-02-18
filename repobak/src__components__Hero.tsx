// src/components/Hero.tsx
import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-50">
      BACKGROUND IMAGE (fallback)
      <img
        src="\images\office-fallback.jpg"
        alt="Calming therapy office"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* YOUR VIDEO – from /public/videos */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/calming-office-chair.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 🌊 WAVE 1 – bottom layer, soft white */}
      <div className="absolute bottom-0 left-0 w-full leading-0 z-10">
        <svg
          className="relative block w-full h-16 md:h-24"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#F9F7F3"
            fillOpacity="0.2"
            d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,202.7C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* 🌿 WAVE 2 – overlapping, slightly above, earthy green tint */}
      <div className="absolute bottom-4 left-0 w-full leading-0 z-20">
        <svg
          className="relative block w-full h-14 md:h-20"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ccdcaf"
            fillOpacity="0.08"
            d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,202.7C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-30 flex items-center justify-center h-full">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight max-w-5xl mx-auto">
            In the quiet where I am held,
            <br />
            my words are heard, and I heal.
          </h1>

          <div className="mt-10 md:mt-12">
            <button
  className="
    group relative
    bg-primary text-white
    px-8 py-4 md:px-10 md:py-5
    rounded-xl text-lg md:text-xl font-medium
    shadow-lg hover:shadow-2xl
    transition-all duration-300 ease-out
    hover:scale-105
    hover:bg-white hover:text-primary
    border-2 border-transparent hover:border-primary
    animate-breathe
    overflow-hidden
  "
>
  {/* Text with animated underline */}
  <span className="relative inline-block">
    Healing, just one click away
    <span
      className="
        absolute bottom-0 left-1/2 w-0 h-0.5 bg-current
        transition-all duration-300 ease-out
        group-hover:w-full group-hover:left-0
      "
    />
  </span>
</button>
          </div>
        </div>
      </div>
    </section>
  );
}