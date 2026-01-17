// app/components/Hero.tsx
import TechStack from "./TechStack";

export default function Hero() {
  return (
    <section className="flex flex-col items-center pt-32 pb-28 text-center">
      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
        Vinicius Moreira
      </h1>

      {/* Role */}
      <p className="mt-4 text-sm md:text-base tracking-[0.2em] text-slate-500">
        SOFTWARE ENGINEER
      </p>

      {/* Buttons */}
      <div className="mt-12 flex items-center gap-6">
  {/* Primary CTA */}
  <a
    href="#projects"
    className="
      px-10 py-3 rounded-xl
      bg-slate-900
      text-white text-sm font-medium tracking-wide
      shadow-[0_6px_20px_rgba(0,0,0,0.25)]
      transition-all duration-300
      hover:-translate-y-0.5
      hover:shadow-[0_14px_36px_rgba(0,0,0,0.35)]
    "
  >
    EXPLORE
  </a>

  {/* Secondary CTA */}
  <a
    href="https://github.com/vmoreira-dev"
    target="_blank"
    rel="noopener noreferrer"
    className="
      px-6 py-3 rounded-xl
      border border-slate-300
      text-slate-600 text-sm tracking-wide
      transition-all duration-300
      hover:border-slate-400
      hover:text-slate-900
    "
  >
    GitHub
  </a>
</div>


      {/* Tech icons */}
      <div className="mt-6 opacity-60">
  <TechStack />
</div>


    </section>
  );
}
