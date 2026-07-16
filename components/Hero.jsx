"use client";

import Image from "next/image";

export default function Hero({ heroRef }) {
  return (
    <section 
      ref={heroRef}
      className="relative min-h-[85vh] flex flex-col justify-center items-stretch overflow-hidden"
    >
      {/* Background Image Container - Stays edge-to-edge */}
      {/* <div className="absolute inset-0 z-0">
        <Image 
          src="/Images/FileStill_1.png" 
          alt="Background graphics" 
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30 pointer-events-none" 
        />
        <div className="absolute inset-0 bg-linear-to-b from-white/10 via-white to-white" />
      </div> */}

      {/* Grid Alignment Wrapper - Aligns perfectly with your Navbar and Selected Work */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col items-start text-left">
        
        {/* Content Width Limiter (Keeps text from stretching too wide on massive screens) */}
        <div className="max-w-4xl">
          <h1 className="animate-hero text-5xl md:text-7xl font-bold tracking-tight text-brand-dark-text leading-[1.05]">
            I help your customers understand why your product matters.
          </h1>
          <p className="animate-hero mt-6 max-w-2xl text-lg md:text-xl text-brand-sub-text font-normal leading-normal">
            I help SaaS, AI, and tech companies turn complex products into clear visual stories through research, strategy, storytelling, and motion design.
          </p>
          <div className="animate-hero mt-10">
            <a 
              href="mailto:ghulammuhammad.dev@gmail.com" 
              className="px-8 py-4 bg-brand-green text-white font-bold rounded hover:bg-brand-green-hover shadow-lg shadow-brand-green/10 transition-all duration-300 inline-block transform hover:-translate-y-1"
            >
              Let's Talk
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}