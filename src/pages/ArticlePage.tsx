import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { getArticleBySlug } from "@/data/articles";
import { useMemo } from "react";

// ============================================================
// 📝 ARTICLE PAGE TEMPLATE
// To edit article content, go to: src/data/articles.ts
// Each article's `contentEn` and `contentZh` arrays hold body paragraphs.
// `inlineImages` array holds images inserted randomly in the body.
// ============================================================

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const article = slug ? getArticleBySlug(slug) : undefined;

  // Determine where to insert inline images (deterministic based on slug)
  const imageInsertPositions = useMemo(() => {
    if (!article?.inlineImages || article.inlineImages.length === 0) return [];
    const contentLen = Math.max(article.contentEn.length, article.contentZh.length);
    if (contentLen <= 2) return [1];
    
    // Use slug hash to create deterministic "random" positions
    const hash = (article.slug || "").split("").reduce((a, c) => a + c.charCodeAt(0), 0);
    const positions: number[] = [];
    
    for (let i = 0; i < article.inlineImages.length; i++) {
      // Place images roughly evenly through article, offset by hash
      const segment = Math.floor(contentLen / (article.inlineImages.length + 1));
      const pos = Math.min(segment * (i + 1) + (hash % 2), contentLen - 1);
      if (!positions.includes(pos)) positions.push(pos);
    }
    return positions;
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="font-article-heading text-4xl text-foreground">404</p>
          <p className="font-article-body text-muted-foreground">
            {t("Article not found", "文章未找到")}
          </p>
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

  const backPath = article.type === "work" ? "/work" : "/blog";
  const backLabel = article.type === "work" ? t("Work", "作品") : t("Blog", "博客");
  const paragraphs = t(article.contentEn.join("|||"), article.contentZh.join("|||")).split("|||");

  // Build content elements with inline images inserted
  const contentElements: React.ReactNode[] = [];
  let imageIdx = 0;

  paragraphs.forEach((paragraph, i) => {
    contentElements.push(
      <p
        key={`p-${i}`}
        className="font-article-body text-base md:text-lg text-foreground/85 leading-[1.9] tracking-wide"
      >
        {paragraph}
      </p>
    );

    // Check if we should insert an image after this paragraph
    if (
      article.inlineImages &&
      imageIdx < article.inlineImages.length &&
      imageInsertPositions.includes(i)
    ) {
      contentElements.push(
        <figure key={`img-${i}`} className="my-10">
          <div className="overflow-hidden">
            <img
              src={article.inlineImages[imageIdx]}
              alt={`${t(article.titleEn, article.titleZh)} — illustration ${imageIdx + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        </figure>
      );
      imageIdx++;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6 md:px-20">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              to={backPath}
              className="inline-block font-mono text-[10px] tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors uppercase mb-12"
            >
              ← {backLabel}
            </Link>

            {/* Category & Date */}
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                {article.category}
              </span>
              <span className="w-4 h-px bg-muted-foreground/30" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/60 uppercase">
                {t(article.dateEn, article.dateZh)}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-article-heading text-3xl md:text-5xl lg:text-6xl text-foreground leading-[1.15] tracking-tight mb-8">
              {t(article.titleEn, article.titleZh)}
            </h1>

            {/* Description / Subtitle */}
            <p className="font-article-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              {t(article.descEn, article.descZh)}
            </p>

            {/* Credits */}
            {article.creditsEn && (
              <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
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
          <div className="w-full h-px bg-border" />
        </div>

        {/* Article Body with inline images */}
        <section className="px-6 md:px-20 py-16">
          <div className="max-w-3xl mx-auto space-y-6">
            {contentElements}
          </div>
        </section>

        {/* Bottom nav */}
        <section className="px-6 md:px-20 pb-32">
          <div className="max-w-3xl mx-auto flex items-center justify-between pt-12 border-t border-border">
            <Link
              to={backPath}
              className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors uppercase"
            >
              ← {t("All " + (article.type === "work" ? "Projects" : "Posts"), article.type === "work" ? "所有项目" : "所有文章")}
            </Link>
            <Link
              to="/"
              className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors uppercase"
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
