import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/ui/Icons";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DataFeedItem",
    itemListElement: {
      "@type": "article",
      name: project.title,
      description: project.summary,
      image: project.image,
      locationCreated: { "@type": "Place", name: project.location },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="pt-28 md:pt-36">
        <div className="u-container">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 text-[14px] text-mute">
              <Link href="/" className="flex items-center gap-1.5 font-medium text-soft transition-colors hover:text-green">
                <Icon name="arrow" className="h-3.5 w-3.5 rotate-180" />
                Startsidan
              </Link>
              <span aria-hidden>/</span>
              <span>{project.category}</span>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-end">
            <Reveal>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
                {project.title}
              </h1>
            </Reveal>
            <Reveal delay={80}>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px] text-soft lg:justify-end">
                <span className="flex items-center gap-1.5">
                  <Icon name="pin" className="h-4 w-4 text-ochre-deep" />
                  {project.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="spark" className="h-4 w-4 text-ochre-deep" />
                  {project.category}
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="relative mt-8 overflow-hidden rounded-3xl shadow-[0_24px_60px_-24px_rgba(35,36,31,0.4)]">
              <Image
                src={project.image}
                alt={project.title}
                width={6217}
                height={4145}
                sizes="100vw"
                priority
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-10">
              <Reveal>
                <div>
                  <span className="u-eyebrow">Om projektet</span>
                  <p className="mt-4 text-lg leading-relaxed text-soft">
                    {project.description}
                  </p>
                </div>
              </Reveal>

              {project.beforeAfter && (
                <div className="max-w-3xl">
                  <Reveal>
                    <span className="u-eyebrow">Före / efter</span>
                  </Reveal>
                  <div className="mt-4">
                    <BeforeAfter data={project.beforeAfter} />
                  </div>
                </div>
              )}

              {project.gallery.length > 0 && (
                <Reveal>
                  <div>
                    <span className="u-eyebrow">Bilder</span>
                    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                      {project.gallery.map((src) => (
                        <div
                          key={src}
                          className="aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-white"
                        >
                          <Image
                            src={src}
                            alt={`Bild från ${project.title}`}
                            width={4288}
                            height={2848}
                            sizes="(min-width:1024px) 25vw, 50vw"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}
            </div>

            <Reveal delay={120}>
              <aside className="rounded-2xl border border-line bg-surface p-6 lg:sticky lg:top-28">
                <h2 className="text-lg font-bold tracking-tight text-ink">
                  Det här ingick
                </h2>
                <ul className="mt-4 space-y-3">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-[15px] text-soft">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green/10 text-green">
                        <Icon name="check" className="h-3.5 w-3.5" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-xl bg-white p-4 text-[14px] leading-relaxed text-soft">
                  Gillar du det här? Vi gör gärna ett liknande projekt hos dig.
                </p>
                <Link
                  href="/#kontakt"
                  className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-green text-[15px] font-semibold text-white transition-colors hover:bg-green-deep"
                >
                  Be om en offert
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </aside>
            </Reveal>
          </div>
        </div>
      </article>

      <section className="mt-20 border-t border-line bg-surface py-16">
        <div className="u-container">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Fler projekt
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link
                  href={`/projekt/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-[0_20px_50px_-28px_rgba(35,36,31,0.45)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={4032}
                      height={2268}
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[12px] font-semibold text-green backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold tracking-tight text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[14.5px] leading-relaxed text-soft">
                      {p.summary}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}