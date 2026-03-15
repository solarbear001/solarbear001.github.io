import { useRef, useMemo, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { workArticles } from "@/data/articles";

import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import blogExt1 from "@/assets/blog-ext-1.jpg";
import blogExt2 from "@/assets/blog-ext-2.jpg";
import blogExt3 from "@/assets/blog-ext-3.jpg";
import blogExt4 from "@/assets/blog-ext-4.jpg";
import blogExt5 from "@/assets/blog-ext-5.jpg";
import blogExt6 from "@/assets/blog-ext-6.jpg";
import blogExt7 from "@/assets/blog-ext-7.jpg";
import blogExt8 from "@/assets/blog-ext-8.jpg";
import blogExt9 from "@/assets/blog-ext-9.jpg";
import blogExt10 from "@/assets/blog-ext-10.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";

const fillerImages = [
  work1, work2, work3, work4, work5,
  blogExt1, blogExt2, blogExt3, blogExt4, blogExt5,
  blogExt6, blogExt7, blogExt8, blogExt9, blogExt10,
  blog1, blog2, blog3, blog4, blog5, blog6,
];

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

const themes: { col: number; en: string; zh: string }[] = [
  { col: 0, en: "The Beginning", zh: "起始" },
  { col: 30, en: "Russia-Ukraine War", zh: "俄乌战争" },
  { col: 60, en: "Visual Investigation", zh: "视觉调查" },
  { col: 100, en: "Open Source Intelligence", zh: "开源情报" },
  { col: 140, en: "Content & Branding", zh: "内容与品牌" },
  { col: 180, en: "Digital Experience", zh: "数字体验" },
  { col: 210, en: "The Archive Continues", zh: "档案延续" },
];

// Pre-generate filler cards for empty weeks
function generateFillerCards(articleOccupied: Set<string>) {
  const fillers: { col: number; row: number; image: string; link: string }[] = [];
  // Each "week" = 7 cols (49 days). Place 1-2 cards per week in unoccupied cells.
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed * 9301 + 49297) * 49297;
    return x - Math.floor(x);
  };

  for (let weekStart = 0; weekStart < totalCols; weekStart += 7) {
    const weekEnd = Math.min(weekStart + 7, totalCols);
    // Find empty cells in this week
    const emptyCells: { col: number; row: number }[] = [];
    for (let c = weekStart; c < weekEnd; c++) {
      for (let r = 0; r < ROWS; r++) {
        if (!articleOccupied.has(`${c}-${r}`)) {
          emptyCells.push({ col: c, row: r });
        }
      }
    }
    if (emptyCells.length === 0) continue;
    // Pick 1-2 random cells
    const count = seededRandom(weekStart) > 0.5 ? 2 : 1;
    for (let i = 0; i < count && i < emptyCells.length; i++) {
      const idx = Math.floor(seededRandom(weekStart * 7 + i + 1) * emptyCells.length);
      const cell = emptyCells[idx];
      emptyCells.splice(idx, 1);
      const imgIdx = Math.floor(seededRandom(weekStart * 3 + i + 99) * fillerImages.length);
      fillers.push({
        ...cell,
        image: fillerImages[imgIdx],
        link: `https://unsplash.com/s/photos/documentary?page=${weekStart + i + 1}`,
      });
    }
  }
  return fillers;
}

const PhotobookGrid = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentTheme, setCurrentTheme] = useState(themes[0]);
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

  const fillerCards = useMemo(() => {
    const occupied = new Set<string>();
    articlePositions.forEach(({ col, row }) => occupied.add(`${col}-${row}`));
    return generateFillerCards(occupied);
  }, [articlePositions]);

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
      let active = themes[0];
      for (const th of themes) {
        if (visibleCol >= th.col) active = th;
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
        {/* Theme title - fixed position, above grid, not clipped */}
        <div
          className="flex-shrink-0 flex justify-center relative z-10"
          style={{ height: GRID_TOP, alignItems: "flex-end", paddingBottom: 8 }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTheme.en}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-sm tracking-[0.15em] italic"
              style={{ color: "hsl(0, 60%, 50%)" }}
            >
              {t(currentTheme.en, currentTheme.zh)}
            </motion.p>
          </AnimatePresence>
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

            {/* Filler cards for empty weeks */}
            {fillerCards.map((filler, i) => (
              <a
                key={`filler-${i}`}
                href={filler.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute group cursor-pointer block"
                style={{
                  left: filler.col * cellW + GAP / 2,
                  top: filler.row * cellH + GAP / 2,
                  width: cellW - GAP,
                  height: cellH - GAP,
                }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={filler.image}
                    alt=""
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

        {/* Scroll hint */}
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
