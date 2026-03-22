import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { getArticleBySlug } from "@/data/articles";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (article?.externalLink) {
    window.location.href = article.externalLink;
    return null;
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="font-article-heading text-4xl text-foreground">404</p>
          <p className="font-article-body text-muted-foreground">{t("Article not found", "文章未找到")}</p>
          <Link
            to="/"
            className="inline-block font-mono text-xs tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors uppercase mt-4"
          >
            ← {t("Back to Home", "返回首页")}
          </Link>
        </div>
      </div>
    );
  }

  const isBlog = article.type === "blog";
  const backPath = isBlog ? "/blog" : "/work";
  const backLabel = isBlog ? t("Blog", "博客") : t("Work", "作品");

  // Determine where to insert inline images in the body
  const paragraphs = t(article.contentEn.join("|||"), article.contentZh.join("|||")).split("|||");
  const inlineImages = article.inlineImages || [];
  const imagePositions: number[] = [];
  if (inlineImages.length > 0 && paragraphs.length > 4) {
    const step = Math.floor(paragraphs.length / (inlineImages.length + 1));
    for (let i = 0; i < inlineImages.length; i++) {
      imagePositions.push(step * (i + 1));
    }
  }

  return (
    <div className={`min-h-screen ${isBlog ? "bg-[#0a0a0a]" : "bg-background"}`}>
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6 md:px-20">
          <div className="max-w-3xl mx-auto">
            <Link
              to={backPath}
              className={`inline-block font-mono text-[10px] tracking-[0.3em] ${isBlog ? "text-white/50 hover:text-white" : "text-muted-foreground hover:text-foreground"} transition-colors uppercase mb-12`}
            >
              ← {backLabel}
            </Link>

            <div className="flex items-center gap-4 mb-8">
              <span className={`font-mono text-[10px] tracking-[0.3em] ${isBlog ? "text-white/50" : "text-muted-foreground"} uppercase`}>
                {article.category}
              </span>
              <span className={`w-4 h-px ${isBlog ? "bg-white/20" : "bg-muted-foreground/30"}`} />
              <span className={`font-mono text-[10px] tracking-[0.2em] ${isBlog ? "text-white/40" : "text-muted-foreground/60"} uppercase`}>
                {t(article.dateEn, article.dateZh)}
              </span>
            </div>

            <h1 className={`font-article-heading text-3xl md:text-5xl lg:text-6xl ${isBlog ? "text-white" : "text-foreground"} leading-[1.15] tracking-tight mb-8`}>
              {t(article.titleEn, article.titleZh)}
            </h1>

            <p className={`font-article-body text-lg md:text-xl ${isBlog ? "text-white/60" : "text-muted-foreground"} leading-relaxed mb-8`}>
              {t(article.descEn, article.descZh)}
            </p>

            {article.creditsEn && (
              <p className={`font-mono text-[10px] tracking-[0.3em] ${isBlog ? "text-white/30" : "text-muted-foreground/50"} uppercase`}>
                {t(article.creditsEn, article.creditsZh || article.creditsEn)}
              </p>
            )}
          </div>
        </section>

        {/* Featured Image */}
        {article.image && (
          <section className="px-6 md:px-20 pb-16">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={article.image}
                  alt={t(article.titleEn, article.titleZh)}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        )}

        {/* Divider */}
        <div className="max-w-3xl mx-auto px-6 md:px-20">
          <div className={`w-full h-px ${isBlog ? "bg-white/10" : "bg-border"}`} />
        </div>

        {/* Article Body */}
        <section className="px-6 md:px-20 py-16">
          <div className="max-w-3xl mx-auto space-y-6">
            {paragraphs.map((paragraph, i) => {
              const isBold = paragraph.startsWith("**") && paragraph.endsWith("**");
              const cleanText = isBold ? paragraph.slice(2, -2) : paragraph;

              // Check if we should insert an inline image before this paragraph
              const imageIndex = imagePositions.indexOf(i);
              const inlineImage = imageIndex !== -1 ? inlineImages[imageIndex] : null;

              return (
                <div key={i}>
                  {inlineImage && (
                    <div className="my-10">
                      <div className="max-w-4xl mx-auto overflow-hidden">
                        <img
                          src={inlineImage}
                          alt=""
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  )}
                  {isBold ? (
                    <p className={`font-article-heading text-xl md:text-2xl ${isBlog ? "text-white" : "text-foreground"} leading-[1.5] tracking-tight mt-10 mb-4`}>
                      {cleanText}
                    </p>
                  ) : (
                    <p className={`font-article-body text-base md:text-lg ${isBlog ? "text-white/80" : "text-foreground/85"} leading-[1.9] tracking-wide`}>
                      {paragraph}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom nav */}
        <section className="px-6 md:px-20 pb-32">
          <div className={`max-w-3xl mx-auto flex items-center justify-between pt-12 border-t ${isBlog ? "border-white/10" : "border-border"}`}>
            <Link
              to={backPath}
              className={`font-mono text-[10px] tracking-[0.3em] ${isBlog ? "text-white/50 hover:text-white" : "text-muted-foreground hover:text-foreground"} transition-colors uppercase`}
            >
              ←{" "}
              {t(
                "All " + (article.type === "work" ? "Projects" : "Posts"),
                article.type === "work" ? "所有项目" : "所有文章",
              )}
            </Link>
            <Link
              to="/"
              className={`font-mono text-[10px] tracking-[0.3em] ${isBlog ? "text-white/50 hover:text-white" : "text-muted-foreground hover:text-foreground"} transition-colors uppercase`}
            >
              {t("Home", "首页")} →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
