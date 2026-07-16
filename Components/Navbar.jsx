"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { LinkedInIcon, XIcon, InstagramIcon } from "./SocialIcons";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  const menuRef = useRef(null);
  const menuItemsRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  // Toggle state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Context-safe GSAP animations
    const ctx = gsap.context(() => {
      if (isOpen) {
        // 1. Morph Hamburger Menu to 'X'
        gsap.to(line1Ref.current, { y: 6, rotate: 45, duration: 0.3, ease: "power2.out" });
        gsap.to(line2Ref.current, { opacity: 0, duration: 0.2, ease: "power2.out" });
        gsap.to(line3Ref.current, { y: -6, rotate: -45, duration: 0.3, ease: "power2.out" });

        // 2. Expand Mobile Drawer Smoothly (Heights auto calculated)
        gsap.fromTo(
          menuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.45, ease: "power3.out" }
        );

        // 3. Stagger-fade list elements
        const targets = menuItemsRef.current?.children;
        if (targets) {
          gsap.fromTo(
            targets,
            { y: -10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.35, ease: "power2.out", stagger: 0.08, delay: 0.1 }
          );
        }
      } else {
        // Revert Hamburger back to parallel lines
        gsap.to(line1Ref.current, { y: 0, rotate: 0, duration: 0.3, ease: "power2.out" });
        gsap.to(line2Ref.current, { opacity: 1, duration: 0.2, ease: "power2.out" });
        gsap.to(line3Ref.current, { y: 0, rotate: 0, duration: 0.3, ease: "power2.out" });

        // Collapse Drawer
        gsap.to(menuRef.current, { height: 0, opacity: 0, duration: 0.35, ease: "power3.inOut" });
      }
    });

    return () => ctx.revert();
  }, [isOpen]);

  // Close the drawer if user clicks a route link
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 w-full transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo redirecting back to Home */}
        <Link href="/" className="relative w-14 h-14  block transition-transform duration-300 hover:scale-105">
          <Image 
            src="/Images/myportfolioLogo.png" 
            alt="gm logo" 
            fill
            sizes="40px"
            className="object-contain"
            priority
          />
        </Link>
        
        {/* DESKTOP MENU: Displays starting at Tailwind MD (768px) */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <Link 
              href="/gallery" 
              className={`text-sm font-bold transition-colors duration-300 ${
                pathname === "/gallery" 
                  ? "text-brand-green" 
                  : "text-brand-dark-text hover:text-brand-green"
              }`}
            >
              Gallery
            </Link>

            {/* Vertical Divider */}
            <span className="h-4 w-px bg-gray-200" aria-hidden="true" />

            {/* Social Icons */}
            <div className="flex gap-4 text-brand-sub-text">
              <a 
                href="https://www.linkedin.com/in/ghulammuhammad-ta/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-dark-text transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/ghula_m_uhammad" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-dark-text transition-colors duration-300"
                aria-label="X (formerly Twitter)"
              >
                <XIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-dark-text transition-colors duration-300"
                aria-label="GitHub"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </nav>
          
          {/* Action CTA Button (Desktop) - Upgraded to target Gmail */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ghulammuhammad.dev@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-brand-green text-brand-green text-xs font-bold rounded hover:bg-brand-green hover:text-white transition-all duration-300 tracking-wider uppercase"
          >
            Let's Talk
          </a>
        </div>

        {/* MOBILE TRIGGER: Interactive Hamburger Button */}
        <button 
          onClick={toggleMenu} 
          className="flex flex-col justify-center items-center w-8 h-8 md:hidden focus:outline-none"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span ref={line1Ref} className="w-6 h-0.5 bg-brand-dark-text mb-1.5 block origin-center rounded" />
          <span ref={line2Ref} className="w-6 h-0.5 bg-brand-dark-text mb-1.5 block rounded" />
          <span ref={line3Ref} className="w-6 h-0.5 bg-brand-dark-text block origin-center rounded" />
        </button>
      </div>

      {/* MOBILE DRAWER: Smooth slide & content push design */}
      <div 
        ref={menuRef} 
        className="md:hidden overflow-hidden w-full bg-white border-t border-gray-100 h-0 opacity-0"
      >
        <div ref={menuItemsRef} className="px-6 py-8 flex flex-col gap-6 items-center text-center">
          
          {/* Navigation Link */}
          <Link 
            href="/gallery" 
            className={`text-lg font-bold transition-colors duration-300 ${
              pathname === "/gallery" ? "text-brand-green" : "text-brand-dark-text"
            }`}
          >
            Gallery
          </Link>

          {/* Horizontal Divider */}
          <span className="w-12 h-px bg-gray-200" aria-hidden="true" />

          {/* Social Icons list in Mobile layout */}
          <div className="flex gap-6 text-brand-sub-text">
            <a 
              href="https://www.linkedin.com/in/ghulammuhammad-ta/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-brand-green transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://x.com/ghula_m_uhammad" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-brand-green transition-colors duration-300"
              aria-label="X (formerly Twitter)"
            >
              <XIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-brand-green transition-colors duration-300"
              aria-label="GitHub"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
          </div>

          {/* CTA Mobile Button - Upgraded to target Gmail */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ghulammuhammad.dev@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs mt-2 px-6 py-3 border-2 border-brand-green text-brand-green text-xs font-bold rounded hover:bg-brand-green hover:text-white transition-all duration-300 tracking-widest uppercase text-center"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}