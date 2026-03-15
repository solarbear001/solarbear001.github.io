import { useRef, useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { workArticles } from "@/data/articles";

// Map work articles to approximate dates based on their dateEn field
function parseDateFromArticle(dateEn: string): Date {
  const d = new Date(dateEn);
  if (!isNaN(d.getTime())) return d;
  // Try "Month Year" format
  const parts = dateEn.split(" ");
  if (parts.length >= 2) {
    const attempt = new Date(`${parts[0]} 15, ${parts[parts.length - 1]}`);
    if (!isNaN(attempt.getTime())) return attempt;
  }
  return new Date("2025-01-15");
}

const START_DATE = new Date("2022-01-01");
const END_DATE = new Date("2026-03-15");
const ROWS = 7;
const CELL_W = 44;
const CELL_H = 60;

function daysBetween(a: Date, b: Date) {
  return Math.floor((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
}

const totalDays = daysBetween(START_DATE, END_DATE);
const totalCols = Math.ceil(totalDays / ROWS);

// Theme labels that change based on scroll position
const themes = [
  { col: 0, label: "The Beginning" },
  { col: 30, label: "Russia-Ukraine War" },
  { col: 60, label: "Visual Investigation" },
  { col: 100, label: "Open Source Intelligence" },
  { col: 140, label: "Content & Branding" },
  { col: 180, label: "Digital Experience" },
  { col: 210, label: "The Archive Continues" },
];

const PhotobookGrid = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentTheme, setCurrentTheme] = useState(themes[0].label);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Horizontal translate driven by vertical scroll
  const totalScrollWidth = totalCols * CELL_W;
  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(totalScrollWidth - (typeof window !== "undefined" ? window.innerWidth : 1200))]
  );

  // Map articles to grid positions
  const articlePositions = useMemo(() => {
    return workArticles.map((article) => {
      const date = parseDateFromArticle(article.dateEn);
      const dayIndex = Math.max(0, daysBetween(START_DATE, date));
      const col = Math.floor(dayIndex / ROWS);
      const row = dayIndex % ROWS;
      return { article, col, row };
    });
  }, []);

  // Generate month labels
  const monthLabels = useMemo(() => {
    const labels: { col: number; label: string; isJan: boolean }[] = [];
    const current = new Date(START_DATE);
    while (current <= END_DATE) {
      const dayIndex = daysBetween(START_DATE, current);
      const col = Math.floor(dayIndex / ROWS);
      const isJan = current.getMonth() === 0;
      const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ];
      labels.push({
        col,
        label: isJan ? `${current.getFullYear()}` : monthNames[current.getMonth()],
        isJan,
      });
      current.setMonth(current.getMonth() + 1);
    }
    return labels;
  }, []);

  // Update theme based on scroll
  useEffect(() => {
    const unsubscribe = translateX.on("change", (val) => {
      const visibleCol = Math.floor(Math.abs(val) / CELL_W);
      let active = themes[0].label;
      for (const th of themes) {
        if (visibleCol >= th.col) active = th.label;
      }
      setCurrentTheme(active);
    });
    return unsubscribe;
  }, [translateX]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${Math.max(400, totalCols * 1.8)}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Theme title */}
        <div className="absolute top-24 left-0 right-0 z-10 flex justify-center">
          <motion.p
            key={currentTheme}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-sm tracking-[0.15em] italic"
            style={{ color: "hsl(0, 60%, 50%)" }}
          >
            {currentTheme}
          </motion.p>
        </div>

        {/* Grid container */}
        <motion.div
          className="absolute top-32 left-8 md:left-20"
          style={{
            x: translateX,
            width: totalCols * CELL_W,
            height: ROWS * CELL_H,
          }}
        >
          {/* Background grid lines */}
          <svg
            className="absolute inset-0 pointer-events-none"
            width={totalCols * CELL_W}
            height={ROWS * CELL_H}
            style={{ opacity: 0.08 }}
          >
            {/* Vertical lines */}
            {Array.from({ length: totalCols + 1 }, (_, i) => (
              <line
                key={`v${i}`}
                x1={i * CELL_W}
                y1={0}
                x2={i * CELL_W}
                y2={ROWS * CELL_H}
                stroke="hsl(0,0%,60%)"
                strokeWidth={0.5}
              />
            ))}
            {/* Horizontal lines */}
            {Array.from({ length: ROWS + 1 }, (_, i) => (
              <line
                key={`h${i}`}
                x1={0}
                y1={i * CELL_H}
                x2={totalCols * CELL_W}
                y2={i * CELL_H}
                stroke="hsl(0,0%,60%)"
                strokeWidth={0.5}
              />
            ))}
          </svg>

          {/* Month labels (vertical text) */}
          {monthLabels.map((ml, i) => (
            <div
              key={i}
              className="absolute font-serif italic"
              style={{
                left: ml.col * CELL_W,
                top: ROWS * CELL_H + 12,
                writingMode: "vertical-rl",
                fontSize: ml.isJan ? "11px" : "9px",
                color: ml.isJan
                  ? "hsl(0,0%,55%)"
                  : "hsl(0,0%,35%)",
                letterSpacing: "0.1em",
              }}
            >
              {ml.label}
            </div>
          ))}

          {/* Article cards */}
          {articlePositions.map(({ article, col, row }) => {
            const CardWrapper = article.externalLink
              ? ({ children, className, style }: any) => (
                  <a
                    href={article.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                    style={style}
                  >
                    {children}
                  </a>
                )
              : ({ children, className, style }: any) => (
                  <Link
                    to={`/work/${article.slug}`}
                    className={className}
                    style={style}
                  >
                    {children}
                  </Link>
                );

            return (
              <CardWrapper
                key={article.slug}
                className="absolute group cursor-pointer block"
                style={{
                  left: col * CELL_W,
                  top: row * CELL_H,
                  width: CELL_W - 2,
                  height: CELL_H - 2,
                }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  {article.image && (
                    <img
                      src={article.image}
                      alt={t(article.titleEn, article.titleZh)}
                      className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                      loading="lazy"
                    />
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-1 left-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p
                      className="font-sans text-foreground leading-tight truncate"
                      style={{ fontSize: "6px" }}
                    >
                      {t(article.titleEn, article.titleZh)}
                    </p>
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </motion.div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/40 uppercase">
            {t("scroll to explore timeline →", "滚动探索时间线 →")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotobookGrid;
