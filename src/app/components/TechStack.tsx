function TechIcon({ src }: { src: string }) {
  return (
    <span
      className="
        inline-block
        h-8 w-8
        bg-neutral-600
        hover:bg-[#C6A75E]
        transition-colors duration-200
      "
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

export default function TechStack() {
  return (
    <div className="mt-12 flex items-center justify-center gap-9">
      <TechIcon src="/images/tech/next.svg" />
      <TechIcon src="/images/tech/react.svg" />
      <TechIcon src="/images/tech/typescript.svg" />
      <TechIcon src="/images/tech/tailwind.svg" />
      <TechIcon src="/images/tech/prisma.svg" />
      <TechIcon src="/images/tech/postgresql.svg" />
    </div>
  );
}



