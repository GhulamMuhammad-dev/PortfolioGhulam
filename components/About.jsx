"use client";

import Image from "next/image";
import { LinkedInIcon, XIcon, InstagramIcon } from "./SocialIcons";

export default function About({ aboutRef }) {
  return (
    <section id="about" className="py-24 bg-brand-card-bg">
      <div ref={aboutRef} className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Portrait Graphic Card with thick double shadow / border accent matching the design */}
        <div className="relative aspect-3/4 w-full max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl border-2 border-brand-dark-text shadow-[8px_8px_0px_0px_rgba(13,13,13,1)]">
          <Image
            src="/Images/myProfileImg.png"
            alt="About portrait"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Dynamic Bio Description */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-dark-text leading-[1.1] mb-6">
            I help technology brands tell better stories
          </h2>
          <p className="text-lg text-brand-sub-text font-normal leading-relaxed mb-8">
            I create strategy-driven 2D and 3D motion design for technology startups, SaaS companies, and modern brands turning complex ideas into visuals people understand, remember, and act on.
          </p>
          <div className="flex items-center gap-6">
            {/* Updated "Let's Talk" Button targeting Gmail directly */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ghulammuhammad.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-brand-green text-white font-bold rounded hover:bg-brand-green-hover transition-colors duration-300 inline-block"
            >
              Let's Talk
            </a>

            {/* Direct Social SVG shortcuts */}
            <div className="flex gap-4 text-brand-sub-text">
              <a href="https://www.linkedin.com/in/ghulammuhammad-ta/" target="_blank"
                rel="noopener noreferrer" className="hover:text-brand-dark-text transition-colors">
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a href="https://x.com/ghula_m_uhammad" target="_blank"
                rel="noopener noreferrer" className="hover:text-brand-dark-text transition-colors">
                <XIcon className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank"
                rel="noopener noreferrer" className="hover:text-brand-dark-text transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}