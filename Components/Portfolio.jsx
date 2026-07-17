"use client";

import Image from "next/image";

export default function Portfolio({ projectsRef }) {
  const projects = [
    { id: 1, title: "The title of the project", img: "/Images/FileStill_1.png" },
    { id: 2, title: "The title of the project", img: "/Images/FileStill_1.png" },
  ];

  return (
    <section id="work" ref={projectsRef} className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((proj) => (
          <div key={proj.id} className="project-card group cursor-pointer flex flex-col items-start">

            {/* Image Container with Dynamic Scale and Hard Brutalist Shadow on Hover */}
            <div className="relative aspect-4/3 md:aspect-video w-full overflow-hidden rounded-sm border-2 border-brand-dark-text bg-gray-100 transition-all duration-300 group-hover:shadow-[8px_8px_0px_0px_rgba(13,13,13,1)] group-hover:-translate-y-1">
              <Image
                src={proj.img}
                alt={proj.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
            </div>

            {/* Minimal Bold Project Title Container with Solid Border */}
            <div className="mt-6">
              <h3 className="inline-block px-4 py-2 border-2 border-brand-dark-text bg-white text-base font-bold tracking-tight text-brand-dark-text transition-all duration-300">
                {proj.title}
              </h3>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}