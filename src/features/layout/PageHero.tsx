export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="border-b border-border/60 px-6 pb-16 pt-36 md:pb-24 md:pt-44">
      <div className="mx-auto w-full max-w-6xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="text-metal mt-4 max-w-3xl text-4xl font-extrabold leading-[1.02] md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {intro}
        </p>
      </div>
    </section>
  );
}
