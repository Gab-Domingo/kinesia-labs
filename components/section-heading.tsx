export function SectionHeading({
  id,
  title,
  subtitle,
  className = "",
}: {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <header id={id} className={`container py-12 ${className}`}>
      <h2 className="font-sentient text-3xl md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-foreground/70">{subtitle}</p>
      ) : null}
    </header>
  );
}


