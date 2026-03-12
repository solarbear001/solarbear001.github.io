import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogArticles } from "@/data/articles";

const Blog = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-black">
      <Header variant="light" />

      <main>
        {/* Hero */}
        <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-20 pt-32 pb-16">
          <div className="max-w-5xl w-full space-y-6">
            <h1 className="text-display tracking-tight text-black">
              {t("bl g", "观 察")}
            </h1>
            <p className="text-black/30" style={{ fontFamily: "Georgia, '黑体', sans-serif", fontSize: "clamp(28px, 4vw, 60px)", textTransform: "uppercase", letterSpacing: "-0.02em" }}>
              {t("( observations ) 2025–2026", "（观察笔记）2025–2026")}
            </p>
            <p className="font-mono text-xs tracking-[0.3em] text-black/40 uppercase mt-8">
              ( {blogArticles.length} ) {t("Wr t ngs & r fl ct ns", "文字与反思")}
            </p>
          </div>
        </section>

        {/* Post List — staggered layout */}
        <section className="px-6 md:px-20 pb-32">
          <div className="max-w-6xl mx-auto space-y-0">
            {blogArticles.map((post, i) => {
              const isEven = i % 2 === 0;
              return (
                <article
                  key={post.slug}
                  className="grid grid-cols-12 gap-6 md:gap-8 py-20 border-t border-black/10 group"
                >
                  {isEven ? (
                    <>
                      <div className="col-span-12 md:col-span-2">
                        <span className="text-display text-black/[0.06] leading-none block">
                          {post.letter}
                        </span>
                        <p className="font-mono text-[10px] tracking-[0.3em] text-black/40 uppercase mt-2">
                          {post.category}
                        </p>
                        <p className="font-mono text-[10px] tracking-[0.2em] text-black/25 uppercase mt-4">
                          {t(post.dateEn, post.dateZh)}
                        </p>
                      </div>
                      <div className="col-span-12 md:col-span-6 md:col-start-4 flex flex-col justify-between">
                        <div className="space-y-4">
                          <Link to={`/blog/${post.slug}`} className="block group-hover:opacity-70 transition-opacity duration-300">
                            <h2 className="font-serif text-2xl md:text-4xl text-black tracking-tight leading-tight">
                              {t(post.titleEn, post.titleZh)}
                            </h2>
                          </Link>
                          <p className="font-sans text-sm text-black/50 leading-[1.8] tracking-wide max-w-lg">
                            {t(post.descEn, post.descZh)}
                          </p>
                        </div>
                        <Link to={`/blog/${post.slug}`} className="inline-block mt-6 font-mono text-[10px] tracking-[0.3em] text-black/40 hover:text-black transition-colors duration-300 uppercase">
                          {t("READ →", "阅读 →")}
                        </Link>
                      </div>
                      <div className="hidden md:flex col-span-2 md:col-start-11 items-start justify-end">
                        <span className="font-mono text-xs text-black/20">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="hidden md:flex col-span-2 items-start justify-start">
                        <span className="font-mono text-xs text-black/20">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <div className="col-span-12 md:col-span-6 md:col-start-5 flex flex-col justify-between">
                        <div className="space-y-4">
                          <Link to={`/blog/${post.slug}`} className="block group-hover:opacity-70 transition-opacity duration-300">
                            <h2 className="font-serif text-2xl md:text-4xl text-black tracking-tight leading-tight">
                              {t(post.titleEn, post.titleZh)}
                            </h2>
                          </Link>
                          <p className="font-sans text-sm text-black/50 leading-[1.8] tracking-wide max-w-lg">
                            {t(post.descEn, post.descZh)}
                          </p>
                        </div>
                        <Link to={`/blog/${post.slug}`} className="inline-block mt-6 font-mono text-[10px] tracking-[0.3em] text-black/40 hover:text-black transition-colors duration-300 uppercase">
                          {t("READ →", "阅读 →")}
                        </Link>
                      </div>
                      <div className="col-span-12 md:col-span-2 md:col-start-11 md:text-right">
                        <span className="text-display text-black/[0.06] leading-none block">
                          {post.letter}
                        </span>
                        <p className="font-mono text-[10px] tracking-[0.3em] text-black/40 uppercase mt-2">
                          {post.category}
                        </p>
                        <p className="font-mono text-[10px] tracking-[0.2em] text-black/25 uppercase mt-4">
                          {t(post.dateEn, post.dateZh)}
                        </p>
                      </div>
                    </>
                  )}
                </article>
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
