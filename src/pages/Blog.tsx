import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogArticles } from "@/data/articles";

const Blog = () => {
  const { t } = useLanguage();
  const featured = blogArticles[0];
  const rest = blogArticles.slice(1);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main>
        {/* Featured Hero */}
        {featured && (
          <section className="pt-20">
            <a
              href={`/blog/${featured.slug}`}
              className="block group"
            >
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                <img
                  src={featured.image}
                  alt={t(featured.titleEn, featured.titleZh)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 saturate-[0.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-white/70 uppercase bg-white/10 backdrop-blur-sm px-3 py-1">
                      {featured.category}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
                      {t(featured.dateEn, featured.dateZh)}
                    </span>
                  </div>
                  <h2 className="font-article-heading text-2xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight max-w-3xl">
                    {t(featured.titleEn, featured.titleZh)}
                  </h2>
                  <p className="font-article-body text-sm md:text-base text-white/60 mt-4 max-w-2xl leading-relaxed">
                    {t(featured.descEn, featured.descZh)}
                  </p>
                </div>
              </div>
            </a>
          </section>
        )}

        {/* Section Label */}
        <section className="px-6 md:px-12 lg:px-16 pt-16 pb-8">
          <h2 className="font-article-heading text-2xl md:text-3xl text-white tracking-tight">
            {t("Latest", "最新文章")}
          </h2>
        </section>

        {/* Grid Layout */}
        <section className="px-6 md:px-12 lg:px-16 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => {
              const isLarge = i % 5 === 0;
              return (
                <a
                  key={post.slug}
                  href={post.externalLink || `/blog/${post.slug}`}
                  target={post.externalLink ? "_blank" : undefined}
                  rel={post.externalLink ? "noopener noreferrer" : undefined}
                  className={`group block ${isLarge ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <article className="space-y-4">
                    {/* Cover Image */}
                    <div className={`overflow-hidden ${isLarge ? "aspect-[4/3]" : "aspect-[3/2]"}`}>
                      <img
                        src={post.image}
                        alt={t(post.titleEn, post.titleZh)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 saturate-[0.3]"
                      />
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] tracking-[0.3em] text-white/50 uppercase">
                        {post.category}
                      </span>
                      <span className="w-3 h-px bg-white/20" />
                      <span className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase">
                        {t(post.dateEn, post.dateZh)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-article-heading text-lg md:text-xl text-white leading-snug tracking-tight group-hover:opacity-70 transition-opacity duration-300">
                      {t(post.titleEn, post.titleZh)}
                    </h3>

                    {/* Description */}
                    <p className="font-article-body text-sm text-white/40 leading-relaxed line-clamp-3">
                      {t(post.descEn, post.descZh)}
                    </p>
                  </article>
                </a>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
