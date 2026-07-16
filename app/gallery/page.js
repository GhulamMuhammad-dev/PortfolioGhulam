"use client";

import Navbar from "@/components/Navbar";
import GalleryCard from "@/components/GalleryCard";
import { galleryItems } from "@/data/galleryData";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-brand-bg">
      <Navbar />

      {/* Header section */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-brand-dark-text leading-none">
          Daily Renders & Loops
        </h1>
        <p className="mt-4 text-brand-sub-text max-w-xl text-lg font-normal leading-normal">
          A visual log of my daily experiments, 3D renders, UI transitions, and loops.
        </p>
      </section>

      {/* Pinterest Masonry Grid Container */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:balance] w-full">
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}