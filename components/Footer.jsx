"use client";

import { LinkedInIcon, XIcon, InstagramIcon } from "./SocialIcons";

export default function Footer({ footerRef }) {
  return (
    <footer ref={footerRef} className="bg-brand-green text-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            Your Product Deserves To Be Understood.
          </h2>
          <p className="mt-6 text-white/80 max-w-md font-normal leading-relaxed">
            You invested months maybe years building an incredible product. Don't let unclear messaging keep it from reaching the people it's built for.
          </p>
        </div>

        <div className="flex flex-col md:items-end justify-center gap-8">
          <div className="text-left md:text-right">
            <p className="text-lg opacity-90 mb-4 font-normal">Let's create a story that turns understanding into growth.</p>
            <a 
              href="mailto:ghulammuhammad.dev@gmail.com"
              className="inline-block px-8 py-4 bg-white text-brand-dark-text font-bold rounded hover:bg-gray-100 transition-all duration-300 shadow-md transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
          
          {/* Email badge & Social SVG Links */}
          <div className="w-full border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <span className="font-mono bg-brand-dark-text text-white px-3 py-1.5 rounded text-xs font-semibold">
              ghulammuhammad.dev@gmail.com
            </span>
            <div className="flex gap-4">
              <a href="https://linkedin.com" className="hover:text-white transition-colors">
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a href="https://x.com" className="hover:text-white transition-colors">
                <XIcon className="w-5 h-5" />
              </a>
              <a href="https://github.com" className="hover:text-white transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}