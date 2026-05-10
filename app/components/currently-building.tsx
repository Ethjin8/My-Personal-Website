"use client";

import Image from "next/image";

export default function CurrentlyBuilding() {
  return (
    <div className="neu-raised rounded-3xl px-5 pt-3 pb-3 w-full h-[250px] flex flex-col">
      <h3
        className="text-xs font-display font-bold tracking-[0.2em] uppercase mb-2 text-center"
        style={{ color: "var(--ucla-blue)" }}
      >
        Currently Building…
      </h3>
      <div className="neu-inset rounded-2xl overflow-hidden flex-1 relative">
        <Image
          src="/images/homepage/galaxi-photo.png"
          alt="Galaxi"
          fill
          className="object-cover object-top transition-transform duration-400 ease-out hover:scale-110"
          sizes="500px"
        />
      </div>
      <p
        className="text-xs font-semibold mt-2 text-center"
        style={{ color: "var(--text-primary)" }}
      >
        Galaxi:
        <span
          className="font-normal ml-1.5"
          style={{ color: "var(--text-secondary)" }}
        >
        ML-powered platform for automated X-ray diffraction analysis
        </span>
      </p>
    </div>
  );
}
