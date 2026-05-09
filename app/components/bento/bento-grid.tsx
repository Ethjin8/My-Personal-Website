"use client";

export default function BentoGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="bento-grid w-full max-w-[1400px] mx-auto px-3 md:px-5 lg:px-6">
      {children}
    </div>
  );
}
