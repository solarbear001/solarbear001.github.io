import { useState } from "react";
import { workArticles, featuredWorkSlugs } from "@/data/articles";
import ScrollReveal from "@/components/ScrollReveal";

const featured = featuredWorkSlugs.map(
  (slug) => workArticles.find((a) => a.slug === slug)!
);

// ============================================================
// 🔗 FEATURED WORK EXTERNAL LINKS
// These 5 links correspond to the 5 featured work items below.
// To change cover images, edit the `image` field of each article
// in src/data/articles.ts (search for the slug name).
// ============================================================
const featuredLinks = [
  "https://www.thepaper.cn/newsDetail_forward_16942025",
  "https://m.thepaper.cn/newsDetail_forward_17829990",
  "https://www.thepaper.cn/newsDetail_forward_30721319",
  "https://www.thepaper.cn/newsDetail_forward_31880733",
  "https://www.thepaper.cn/newsDetail_forward_32523498",
];

const FeaturedWork = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-12 py-32">
      <ScrollReveal>
        <div className="mb-16 text-center">
          <p className="font-mono text-[10px] tracking-[0.4em] text-muted-foreground uppercase mb-4">
            Selected Work
          </p>
          <div className="w-8 h-px bg-muted-foreground/30 mx-auto" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
        {featured.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 0.1}>
            <a
              href={featuredLinks[i]}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer block"
              onMouseEnter={() => setHoveredId(i)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={project.image}
                alt={project.titleEn}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              
              <div
                className={`absolute inset-0 bg-background/70 flex flex-col items-center justify-center transition-opacity duration-500 ${
                  hoveredId === i ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="font-serif text-sm md:text-base tracking-[0.1em] text-foreground uppercase">
                  {project.titleEn}
                </p>
                <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground mt-2 uppercase">
                  {project.category}
                </p>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
