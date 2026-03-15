import { useRef, useMemo, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { workArticles } from "@/data/articles";

function parseDateFromArticle(dateEn: string): Date {
  const d = new Date(dateEn);
  if (!isNaN(d.getTime())) return d;
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
const GRID_TOP = 90;
const HINT_H = 36;
const GAP = 2;

function daysBetween(a: Date, b: Date) {
  return Math.floor((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
}

const totalDays = daysBetween(START_DATE, END_DATE);
const totalCols = Math.ceil(totalDays / ROWS);

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
  const [dims, setDims] = useState({ cellW: 120, cellH: 140 });

  const updateDims = useCallback(() => {
    const vh = window.innerHeight;
    const availableH = vh - GRID_TOP - HINT_H;
    const cellH = Math.floor(availableH / ROWS);
    const cellW = Math.floor(cellH * 0.75);
    setDims({ cellW, cellH });
  }, []);

  useEffect(() => {
    updateDims();
    window.addEventListener("resize", updateDims);
    return () => window.removeEventListener("resize", updateDims);
  }, [updateDims]);

  const { cellW, cellH } = dims;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const totalScrollWidth = totalCols * cellW;
  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(totalScrollWidth - (typeof window !== "undefined" ? window.innerWidth : 1200))]
  );

  const articlePositions = useMemo(() => {
    return workArticles.map((article) => {
      const date = parseDateFromArticle(article.dateEn);
      const dayIndex = Math.max(0, daysBetween(START_DATE, date));
      const col = Math.floor(dayIndex / ROWS);
      const row = dayIndex % ROWS;
      return { article, col, row };
    });
  }, []);

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

  useEffect(() => {
    const unsubscribe = translateX.on("change", (val) => {
      const visibleCol = Math.floor(Math.abs(val) / cellW);
      let active = themes[0].label;
      for (const th of themes) {
        if (visibleCol >= th.col) active = th.label;
      }
      setCurrentTheme(active);
    });
    return unsubscribe;
  }, [translateX, cellW]);

  const gridH = ROWS * cellH;

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${Math.max(400, totalCols * 1.8)}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Theme title */}
        <div className="flex-shrink-0 flex justify-center" style={{ height: GRID_TOP, alignItems: "flex-end", paddingBottom: 8 }}>
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

        {/* Grid area */}
        <div className="flex-1 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0"
            style={{
              x: translateX,
              width: totalCols * cellW,
              height: gridH,
            }}
          >
            {/* Background grid lines */}
            <svg
              className="absolute inset-0 pointer-events-none"
              width={totalCols * cellW}
              height={gridH}
              style={{ opacity: 0.08 }}
            >
              {Array.from({ length: totalCols + 1 }, (_, i) => (
                <line
                  key={`v${i}`}
                  x1={i * cellW}
                  y1={0}
                  x2={i * cellW}
                  y2={gridH}
                  stroke="hsl(0,0%,60%)"
                  strokeWidth={0.5}
                />
              ))}
              {Array.from({ length: ROWS + 1 }, (_, i) => (
                <line
                  key={`h${i}`}
                  x1={0}
                  y1={i * cellH}
                  x2={totalCols * cellW}
                  y2={i * cellH}
                  stroke="hsl(0,0%,60%)"
                  strokeWidth={0.5}
                />
              ))}
            </svg>

            {/* Month labels inside grid gaps */}
            {monthLabels.map((ml, i) => (
              <div
                key={i}
                className="absolute font-serif italic pointer-events-none flex items-center justify-center"
                style={{
                  left: ml.col * cellW,
                  top: Math.floor(ROWS / 2) * cellH,
                  width: cellW,
                  height: cellH,
                  fontSize: ml.isJan ? "11px" : "9px",
                  color: ml.isJan
                    ? "hsl(0,0%,45%)"
                    : "hsl(0,0%,28%)",
                  letterSpacing: "0.1em",
                  writingMode: "vertical-rl",
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
                    left: col * cellW + GAP / 2,
                    top: row * cellH + GAP / 2,
                    width: cellW - GAP,
                    height: cellH - GAP,
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-1 left-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p
                        className="font-sans text-foreground leading-tight truncate"
                        style={{ fontSize: "8px" }}
                      >
                        {t(article.titleEn, article.titleZh)}
                      </p>
                    </div>
                  </div>
                </CardWrapper>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll hint - flush against grid bottom */}
        <div className="flex-shrink-0 flex justify-center items-center" style={{ height: HINT_H }}>
          <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/40 uppercase">
            {t("scroll to explore timeline →", "滚动探索时间线 →")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotobookGrid;
