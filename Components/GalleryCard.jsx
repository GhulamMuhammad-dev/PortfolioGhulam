"use client";

import Image from "next/image";

export default function GalleryCard({ item }) {
  return (
    <div className="break-inside-avoid mb-2 group relative overflow-hidden rounded-sm bg-brand-card-bg border border-gray-100 transition-all duration-300  hover:-translate-y-1">
      {/* Visual media container with dynamic aspect ratio */}
      <div className={`relative w-full ${item.aspectRatio} overflow-hidden`}>
        <Image
          src={item.src}
          alt={item.title}
          fill
          // We set this to true for all media so Next.js serves the raw, high-res file
          unoptimized={true} 
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* GIF/Still Indicator Badge */}
        {/* <span className="absolute top-3 left-3 bg-brand-dark-text/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
          {item.type}
        </span> */}
      </div>

      {/* Dynamic Hover / Detail Overlay */}
      {/* <div className="p-4 bg-white border-t border-gray-50">
        <h3 className="text-base font-bold text-brand-dark-text leading-tight tracking-tight">
          {item.title}
        </h3>
        {item.tags && (
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] bg-gray-100 text-brand-sub-text px-2 py-0.5 rounded font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
}