import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

// Import all available images for floating objects
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";
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
import blogInline1 from "@/assets/blog-inline-1.jpg";
import blogInline2 from "@/assets/blog-inline-2.jpg";
import blogInline3 from "@/assets/blog-inline-3.jpg";
import blogInline4 from "@/assets/blog-inline-4.jpg";
import heroImg from "@/assets/hero-image.jpg";
import blogFeatured1 from "@/assets/blog-featured-inline-1.jpg";
import blogFeatured2 from "@/assets/blog-featured-inline-2.jpg";

const allImages = [
  work1, work2, work3, work4, work5,
  blog1, blog2, blog3, blog4, blog5, blog6,
  blogExt1, blogExt2, blogExt3, blogExt4, blogExt5,
  blogExt6, blogExt7, blogExt8, blogExt9, blogExt10,
  blogInline1, blogInline2, blogInline3, blogInline4,
  heroImg, blogFeatured1, blogFeatured2,
  // Duplicates to reach ~40
  work1, work2, work3, work4, work5,
  blog1, blog2, blog3, blog4, blog5, blog6, blogExt1,
];

// Seeded pseudo-random for consistent layout
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

interface FloatingItem {
  id: number;
  src: string;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
}

const FloatingHero = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  const items: FloatingItem[] = useMemo(() => {
    return allImages.slice(0, 40).map((src, i) => {
      const r = (s: number) => seededRandom(i * 100 + s);
      // Distribute across viewport, avoiding center where text is
      let x = r(1) * 90 + 5;
      let y = r(2) * 80 + 10;
      // Push away from center (40-60% range)
      if (x > 35 && x < 65 && y > 30 && y < 70) {
        x = x < 50 ? x - 20 : x + 20;
      }
      return {
        id: i,
        src,
        x: Math.max(2, Math.min(95, x)),
        y: Math.max(5, Math.min(90, y)),
        size: 40 + r(3) * 80, // 40-120px
        delay: r(4) * 4,
        duration: 6 + r(5) * 8,
        rotation: (r(6) - 0.5) * 20,
      };
    });
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Floating images */}
      {items.map((item) => (
        <FloatingImage key={item.id} item={item} scrollYProgress={scrollYProgress} />
      ))}

      {/* Center text */}
      <div className="relative z-10 text-center pointer-events-none select-none">
        <h1 className="text-display tracking-tight text-foreground">w rk</h1>
        <p
          className="text-display tracking-tight text-foreground/40 mt-2"
          style={{ fontSize: "clamp(28px, 4vw, 60px)" }}
        >
          ( a selection ) 2022–2026
        </p>
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase mt-8">
          {t("Pr j cts & expl r tns", "项目与探索")}
        </p>
      </div>
    </motion.section>
  );
};

interface FloatingImageProps {
  item: FloatingItem;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

const FloatingImage = ({ item, scrollYProgress }: FloatingImageProps) => {
  // Parallax: each item drifts outward on scroll
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, (item.y > 50 ? 1 : -1) * (100 + item.size)]
  );
  const parallaxX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, (item.x > 50 ? 1 : -1) * (60 + item.size * 0.5)]
  );

  return (
    <motion.div
      className="absolute group cursor-pointer"
      style={{
        left: `${item.x}%`,
        top: `${item.y}%`,
        width: item.size,
        height: item.size * 1.3,
        x: parallaxX,
        y: parallaxY,
        rotate: item.rotation,
      }}
      animate={{
        y: [0, -8, 0, 6, 0],
        rotate: [item.rotation, item.rotation + 2, item.rotation - 1, item.rotation],
      }}
      transition={{
        duration: item.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: item.delay,
      }}
      whileHover={{
        scale: 1.15,
        rotate: 0,
        zIndex: 50,
        transition: { type: "spring", stiffness: 400, damping: 15 },
      }}
    >
      <div className="w-full h-full overflow-hidden relative">
        <img
          src={item.src}
          alt=""
          className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-90 transition-all duration-500"
          loading="lazy"
          style={{
            filter: "grayscale(100%)",
          }}
        />
        {/* Hover ripple overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 50%, transparent 30%, rgba(255,255,255,0.08) 60%, transparent 70%)",
            animation: "ripple-wave 1.2s ease-out infinite",
          }}
        />
      </div>
    </motion.div>
  );
};

export default FloatingHero;
