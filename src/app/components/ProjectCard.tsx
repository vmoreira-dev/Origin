import Link from "next/link";

type ProjectCardProps = {
  title: string;
  tagline: string;
  image?: string;
  href: string;
};

export default function ProjectCard({
  title,
  tagline,
  image,
  href,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block w-full max-w-5xl mx-auto
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-slate-300
        focus-visible:ring-offset-4
        focus-visible:ring-offset-white
      "
    >
      <article
        className="
          group relative w-full
          h-[220px]
          rounded-3xl
          bg-white
          border border-slate-300
          shadow-[0_2px_10px_rgba(0,0,0,0.08)]
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:shadow-[0_22px_60px_rgba(0,0,0,0.18)]
          cursor-pointer
        "
      >
        {/* Soft idle veil — reduced responsibility */}
        <div
          className="
            absolute inset-0 rounded-3xl
            bg-white/50
            transition-opacity duration-500 ease-out
            group-hover:opacity-0
            pointer-events-none
          "
        />

        {/* Product preview */}
        {image && (
          <div
            className="
              absolute right-8 top-1/2 -translate-y-1/2
              w-[300px] h-[170px]
              rounded-xl overflow-hidden
              bg-white
              shadow-[0_4px_20px_rgba(0,0,0,0.12)]
              opacity-60 grayscale
              transition-all duration-500 ease-out
              group-hover:opacity-100
              group-hover:grayscale-0
              group-hover:shadow-[0_28px_70px_rgba(0,0,0,0.22)]
              pointer-events-none
            "
          >
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-10">
          {/* Title NEVER muted */}
          <h3 className="text-2xl font-semibold text-slate-900">
            {title}
          </h3>

          {/* Tagline wakes up on hover */}
          <p className="
            mt-2
            text-slate-500
            transition-colors duration-300
            group-hover:text-slate-700
          ">
            {tagline}
          </p>
        </div>
      </article>
    </Link>
  );
}
