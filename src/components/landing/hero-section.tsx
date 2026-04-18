import { HERO_MEDIA } from "@/content/landing";

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-[var(--color-border)]"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.28fr)] lg:items-center lg:gap-12 lg:py-24">
        <div className="space-y-8 lg:max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted-foreground)]">
            Mobile-first websites for local service businesses
          </p>

          <div className="space-y-5">
            <h1
              id="hero-heading"
              className="max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.04]"
            >
              We rebuild outdated service-business websites into modern, mobile-first sites that
              make it easier for customers to reach you.
            </h1>
            <p className="max-w-2xl text-pretty text-base leading-7 text-[var(--color-muted-foreground)] sm:text-lg">
              Built for tree service, landscaping, plumbing, and other local businesses
              designed to look clean, load fast, and turn visitors into calls.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[var(--color-primary)] px-6 text-sm font-semibold text-[var(--color-primary-foreground)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            >
              Get a free mockup of your site
            </a>
            <a
              href="#examples"
              className="inline-flex h-12 items-center justify-center rounded-md border border-[var(--color-border)] bg-transparent px-6 text-sm font-medium text-[var(--color-foreground)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              See examples
            </a>
          </div>
        </div>

        <figure className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 shadow-[0_24px_90px_-45px_rgba(255,255,255,0.25)] sm:p-5">
          <div className="relative w-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] aspect-video lg:aspect-auto lg:h-[min(34rem,58vh)] lg:min-h-[18rem]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={HERO_MEDIA.posterSrc}
              aria-label="Short looping screen recording of sample service business website demos"
            >
              <source src={HERO_MEDIA.videoSrc} type="video/mp4" />
            </video>
          </div>
          <figcaption className="mt-4 space-y-1">
            <p className="text-sm text-[var(--color-foreground)]">
              Here&apos;s what your next site could look like.
            </p>
            <p className="text-xs text-[var(--color-muted-foreground)]">
              Sample desktop walkthrough (about 10-20 seconds, loops automatically)
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
