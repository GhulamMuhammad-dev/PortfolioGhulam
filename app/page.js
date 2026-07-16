"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import Custom Modular Sections
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // 1. Hero Entrance
    const heroElements = heroRef.current?.querySelectorAll(".animate-hero");
    if (heroElements?.length) {
      gsap.fromTo(
        heroElements,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: "power3.out", stagger: 0.15 }
      );
    }

    // 2. Portfolio Items Entrance
    const cards = projectsRef.current?.querySelectorAll(".project-card");
    if (cards?.length) {
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // 3. About Section slide-up trigger
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 75%",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero heroRef={heroRef} />
      <Portfolio projectsRef={projectsRef} />
      <About aboutRef={aboutRef} />
      <Footer footerRef={footerRef} />
    </main>
  );
}