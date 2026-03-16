import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogArticles } from "@/data/articles";
import { Search } from "lucide-react";
import CustomCursor from "@/components/CustomCursor";

const CATEGORIES = ["All", "AI", "Web", "Geolocation", "Maps"] as const;

// Map display categories to data categories
const categoryMap: Record<string, string[]> = {
  All: [],
  AI: ["AI"],
  Web: ["Web"],
  Geolocation: ["Geolocation"],
  Maps: ["Map", "Flight Tracking"],
};

// Varying aspect ratios for masonry effect
const aspectVariants = [
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[3/2]",
  "aspect-[1/1]",
  "aspect-[2/3]",
  "aspect-[4/5]",
];

const Blog = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const loaderRef = useRef<HTMLDivElement>(null);

  // Filter articles
  const filtered = useMemo(() => {
    let items = blogArticles;
    if (activeCategory !== "All") {
      const cats = categoryMap[activeCategory] || [];
      items = items.filter((a) => cats.includes(a.category));
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (a) =>
          a.titleEn.toLowerCase().includes(q) ||
          a.titleZh.includes(q) ||
          a.descEn.toLowerCase().includes(q) ||
          a.descZh.includes(q)
      );
    }
    return items;
  }, [activeCategory, searchQuery]);

  const visibleArticles = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  // Infinite scroll
  const loadMore = useCallback(() => {
    if (hasMore) setVisibleCount((c) => c + 4);
  }, [hasMore]);

  useEffect(() => {
    const el = loaderRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) loadMore();
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [loadMore]);

  // Reset visible count on filter change
  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-black text-white cursor-none">
      <CustomCursor />
      {/* Global Header */}
      <Header />

      {/* Sticky Search Bar — below header */}
      <div className="sticky top-[72px] z-40 bg-black border-b border-white/10">
        <div className="max-w-2xl mx-auto px-6 py-3">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="text"
              placeholder={t("Search blogs", "搜索文章")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-8 pl-10 pr-4 rounded-full bg-white/[0.08] text-sm font-sans text-white placeholder:text-white/30 outline-none focus:bg-white/[0.12] transition-colors duration-200"
            />
          </div>
        </div>
      </div>

      <main>
        {/* Title & Category Tabs */}
        <section className="max-w-6xl mx-auto px-6 md:px-20 pt-10 pb-6">
          <h1 className="font-sans text-2xl font-semibold text-white tracking-tight mb-6">
            {t("Latest", "最新")}
          </h1>
          <div className="flex items-center gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-white text-black"
                    : "bg-transparent text-white/60 hover:bg-white/10"
                }`}
              >
                {cat === "All" ? t("All", "全部") : cat}
              </button>
            ))}
          </div>
        </section>

        {/* Masonry Grid */}
        <section className="max-w-6xl mx-auto px-6 md:px-20 pb-20">
          {visibleArticles.length === 0 ? (
            <div className="py-20 text-center text-white/30 font-sans text-sm">
              {t("No articles found", "未找到文章")}
            </div>
          ) : (
            <div className="columns-2 lg:columns-3 gap-6 [column-fill:_balance-all]">
              {visibleArticles.map((post, i) => {
                const aspect = aspectVariants[i % aspectVariants.length];
                const href = post.externalLink || `/blog/${post.slug}`;
                const isExternal = !!post.externalLink;

                return (
                  <div key={`${post.slug}-${i}`} className="break-inside-avoid mb-6">
                    {isExternal ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        <CardContent post={post} aspect={aspect} t={t} />
                      </a>
                    ) : (
                      <Link to={href} className="block group">
                        <CardContent post={post} aspect={aspect} t={t} />
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Infinite scroll trigger */}
          {hasMore && (
            <div ref={loaderRef} className="flex justify-center py-10">
              <div className="w-5 h-5 border-2 border-black/10 border-t-black/40 rounded-full animate-spin" />
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Card component
const CardContent = ({
  post,
  aspect,
  t,
}: {
  post: (typeof blogArticles)[0];
  aspect: string;
  t: (en: string, zh: string) => string;
}) => {
  const whiteFallback =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect fill='white' width='1' height='1'/%3E%3C/svg%3E";

  return (
    <article>
      {/* Image */}
      <div className={`relative overflow-hidden rounded-lg ${aspect}`}>
        <img
          src={post.image || whiteFallback}
          alt={t(post.titleEn, post.titleZh)}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      </div>

      {/* Text */}
      <div className="mt-3 space-y-1">
        <h3 className="font-sans text-sm font-medium text-black leading-snug line-clamp-2 group-hover:text-black/70 transition-colors duration-200">
          {t(post.titleEn, post.titleZh)}
        </h3>
        <p className="font-sans text-xs text-black/40 line-clamp-2">
          {t(post.descEn, post.descZh)}
        </p>
        <p className="font-sans text-[11px] text-black/25">
          {t(post.dateEn, post.dateZh)}
        </p>
      </div>
    </article>
  );
};

export default Blog;
