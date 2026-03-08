import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@shujingzheng.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Refs for parallax sections
  const skillsRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const pressRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: skillsProgress } = useScroll({
    target: skillsRef,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: awardsProgress } = useScroll({
    target: awardsRef,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: pressProgress } = useScroll({
    target: pressRef,
    offset: ["start start", "end start"],
  });

  const skillsY = useTransform(skillsProgress, [0, 1], [0, -200]);
  const skillsOpacity = useTransform(skillsProgress, [0, 0.6, 1], [1, 1, 0]);
  const awardsY = useTransform(awardsProgress, [0, 1], [0, -200]);
  const awardsOpacity = useTransform(awardsProgress, [0, 0.6, 1], [1, 1, 0]);
  const pressY = useTransform(pressProgress, [0, 1], [0, -200]);
  const pressOpacity = useTransform(pressProgress, [0, 0.6, 1], [1, 1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* 1 — Hero Section: centered GIF avatar like homepage */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
          <div className="relative w-[480px] max-w-[90vw] aspect-square">
            <img
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWFmamNmZHhxYXRmdzI5M3l1aDFuajVjdnFqdnY4Z3Y5MjNnc3RyOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eCHMPctpUGtlvzsvyW/giphy.gif"
              alt="Shujing Zheng"
              className="w-full h-full object-cover grayscale"
            />

            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-foreground/30 uppercase">ZSJ.INT</span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-foreground/30">ABOUT</span>
                </div>
                <p className="font-mono text-xs tracking-[0.4em] text-foreground uppercase text-justify leading-relaxed">
                  editor&nbsp;&nbsp;researcher&nbsp;&nbsp;OSINTer
                </p>
              </div>

              <div className="space-y-2 text-center">
                <p className="font-georgia text-lg md:text-xl tracking-[0.15em] text-foreground uppercase">
                  {t("Shujing Zheng", "郑淑婧")}
                </p>
                <p className="font-georgia text-lg md:text-xl tracking-[0.15em] text-foreground uppercase">
                  {t("International Desk", "国际新闻部")}
                </p>
              </div>

              <div className="space-y-1">
                <p className="font-mono text-xs tracking-[0.4em] text-foreground uppercase text-right">
                  {t("Based in Shanghai", "现居上海")}
                </p>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 flex flex-col items-center gap-2 animate-scroll-bounce">
            <div className="w-px h-6 bg-muted-foreground/30" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">scroll</span>
            <div className="w-px h-6 bg-muted-foreground/30" />
          </div>
        </section>

        {/* 2 — Quote Section: large text, alternating alignment */}
        <section className="min-h-screen flex items-center px-6 md:px-20 py-32">
          <div className="w-full space-y-6">
            {/* Part 1 — left aligned */}
            <div className="text-left">
              <p className="text-display-xl tracking-tight text-foreground">INTERNATIONAL DESK</p>
              <p className="text-display-xl tracking-tight text-foreground">SENIOR EDITOR</p>
            </div>

            {/* Small text — centered */}
            <div className="text-center py-8 md:py-12">
              <p className="font-sans text-sm md:text-base tracking-wide text-muted-foreground leading-[2] max-w-xl mx-auto">
                {t(
                  "Skilled in visual investigation, her interests encompass cutting-edge technology, geoeconomies and geopolitical conflicts.",
                  "善于视觉调查，关注前沿科技与地缘政治、经济的冲突领域。",
                )}
              </p>
            </div>

            {/* Part 2 — right aligned */}
            <div className="text-right">
              <p className="text-display-xl tracking-tight text-foreground">FACT CHECKER SKILLED IN</p>
              <p className="text-display-xl tracking-tight text-foreground">VISUAL INVESTIGATION</p>
            </div>

            {/* Small text — centered */}
            <div className="text-center py-8 md:py-12">
              <p className="font-sans text-sm md:text-base tracking-wide text-muted-foreground leading-[2]">
                {t("Based in Shanghai", "现居上海")}
              </p>
            </div>

            {/* Part 3 — left aligned */}
            <div className="text-left">
              <p className="text-display-xl tracking-tight text-foreground">AIGC</p>
              <p className="text-display-xl tracking-tight text-foreground">EXPLORER</p>
            </div>
          </div>
        </section>

        {/* 3 — Self Introduction: left half text, right half empty */}
        <section className="px-6 md:px-20 py-32">
          <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6 space-y-10">
              <div className="space-y-3">
                <span className="text-display text-foreground/10 leading-none block">I</span>
                <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                  {t("Information", "信息")}
                </p>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight lowercase">
                {t("about", "关于")}
              </h3>

              <div className="space-y-4 font-sans text-sm md:text-base text-muted-foreground leading-[1.8] tracking-wide">
                <p>
                  {t(
                    "Shujing Zheng is an editor and open-source intelligence researcher with a background in international communication and visual storytelling. Her work sits at the intersection of investigative journalism, digital media, and creative strategy.",
                    "郑淑婧是一名编辑和开源情报研究员，拥有国际传播和视觉叙事背景。她的工作位于调查新闻、数字媒体和创意策略的交汇处。",
                  )}
                </p>
                <p>
                  {t(
                    "She is interested in digital experience, branding, creative strategy, and visual identity — exploring how information shapes understanding and how design communicates truth.",
                    "她对数字体验、品牌塑造、创意策略和视觉识别感兴趣——探索信息如何塑造理解，设计如何传达真相。",
                  )}
                </p>
              </div>
            </div>
            {/* Right half intentionally empty */}
            <div className="hidden md:block col-span-6" />
          </div>
        </section>

        {/* 4 — Experience: right half with parallax collapsing sections */}
        <section className="px-6 md:px-20 py-32">
          <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
            {/* Left half intentionally empty */}
            <div className="hidden md:block col-span-6" />

            <div className="col-span-12 md:col-span-6 space-y-0">
              {/* Skills Section */}
              <div ref={skillsRef} className="min-h-screen sticky top-0 flex items-start pt-32 pb-16 z-30">
                <motion.div
                  style={{ y: skillsY, opacity: skillsOpacity }}
                  className="w-full space-y-10"
                >
                  <div className="space-y-3">
                    <span className="text-display text-foreground/10 leading-none block">S</span>
                    <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                      {t("Services", "技能")}
                    </p>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight lowercase">
                    {t("skills", "技能")}
                  </h3>

                  <ul className="space-y-5">
                    {[
                      { en: "Visual Investigation", zh: "视觉调查" },
                      { en: "Open Source Intelligence (OSINT)", zh: "开源情报" },
                      { en: "International Communication", zh: "国际传播" },
                      { en: "Video Editing & Production", zh: "视频剪辑与制作" },
                      { en: "Hosting / Event / Interview / Writing", zh: "主持 / 会务 / 采访 / 写作" },
                      { en: "English Working Language", zh: "英语工作语言" },
                      { en: "Social Media & Website Operations", zh: "社媒与网站运营" },
                      { en: "Media Literacy", zh: "媒介素养教育" },
                      { en: "AIGC", zh: "AIGC" },
                      { en: "CFA Level Ⅰ", zh: "CFA Level Ⅰ" },
                    ].map((skill, i) => (
                      <li
                        key={i}
                        className="font-mono text-sm tracking-[0.1em] text-foreground/80 py-3 border-b border-border"
                      >
                        {t(skill.en, skill.zh)}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Awards Section */}
              <div ref={awardsRef} className="min-h-screen sticky top-0 flex items-start pt-32 pb-16 z-20 bg-background">
                <motion.div
                  style={{ y: awardsY, opacity: awardsOpacity }}
                  className="w-full space-y-10"
                >
                  <div className="space-y-3">
                    <span className="text-display text-foreground/10 leading-none block">A</span>
                    <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                      {t("Awards", "荣誉")}
                    </p>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight lowercase">
                    {t("accomplishments", "成就")}
                  </h3>

                  <ul className="space-y-5">
                    {[
                      { en: "Shanghai Journalism Award ×10", zh: "上海新闻奖 ×10" },
                      { en: "Silver Pigeon Award ×2", zh: "银鸽奖 ×2" },
                      { en: "Best International Communication Work ×3", zh: "最佳国际传播作品奖 ×3" },
                      { en: "March 8th Red Banner Collective", zh: "三八妇女红旗手优秀集体" },
                    ].map((award, i) => (
                      <li
                        key={i}
                        className="font-mono text-sm tracking-[0.1em] text-foreground/80 py-3 border-b border-border"
                      >
                        {t(award.en, award.zh)}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Press / Events Section */}
              <div ref={pressRef} className="min-h-screen sticky top-0 flex items-start pt-32 pb-16 z-10 bg-background">
                <motion.div
                  style={{ y: pressY, opacity: pressOpacity }}
                  className="w-full space-y-10"
                >
                  <div className="space-y-3">
                    <span className="text-display text-foreground/10 leading-none block">P</span>
                    <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                      {t("Press", "媒体")}
                    </p>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight lowercase">
                    {t("interviews / events", "采访 / 活动")}
                  </h3>

                  <ul className="space-y-5">
                    {[
                      "Behind the Design Interview",
                      "Lovers Magazine Interview",
                      "Codrops Portfolio Case Study",
                      "Speaker at Awwwards",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="font-mono text-sm tracking-[0.1em] text-foreground/80 py-3 border-b border-border"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Artistic closing */}
        <section className="min-h-[60vh] flex items-center justify-center px-6">
          <div className="text-center space-y-4">
            <p className="text-display tracking-tight text-foreground/20 italic">Information Quality Matters</p>
            <p className="text-display tracking-tight text-foreground/20 italic">Fact Matters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
