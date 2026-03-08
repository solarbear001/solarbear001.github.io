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
              src="data:image/jpeg;base64,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"
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
                  writer&nbsp;editor&nbsp;researcher&nbsp;OSINTer
                </p>
              </div>

              <div className="space-y-2 text-center"></div>

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
                  "Skilled in visual investigation, her works focus on cutting-edge technology, geoeconomies and geopolitical conflicts.",
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
              <p className="font-sans text-sm md:text-base tracking-wide text-muted-foreground leading-[2] max-w-xl mx-auto">
                {t(
                  "Heavy user of artificial intelligence, agents lover,  great interest in AIGC detection and enhancement.",
                  "人工智能重度使用者，智能助手爱好者，对AIGC检测与增强抱有浓厚兴趣。",
                )}
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
                    "Shujing Zheng is a senior journalist/editor,fact checker at the World News Section of The Paper (澎湃新闻), specializing in combating online misinformation and disinformation with digital tools and advanced technologies. Well-experienced in social research, data analysis, AIGC exploration and media practice, and take great interest in job opportunities related to digital technology, data driven content production, AIGC, media operation or international communication.",
                    "郑淑婧是一名编辑和开源情报研究员，拥有国际传播和视觉叙事背景。她的工作位于调查新闻、数字媒体和创意策略的交汇处。",
                  )}
                </p>
                <p>
                  {t(
                    "She is a Heavy user of artificial intelligence, agents lover, her key skills encompasses: ",
                    "她对数字体验、品牌塑造、创意策略和视觉识别感兴趣——探索信息如何塑造理解，设计如何传达真相。",
                  )}
                </p>
                <p>
                  {t(
                    "— Strong multimedia skills in data collection and analysis. Proven ability to monitor social media accounts, verify information and write news reports. ",
                    "她对数字体验、品牌塑造、创意策略和视觉识别感兴趣——探索信息如何塑造理解，设计如何传达真相。",
                  )}
                </p>
                <p>
                  {t(
                    "— Strong understanding of media landscape and news production. Delivered media literacy lectures at multiple universities including ZJU and SISU. ",
                    "她对数字体验、品牌塑造、创意策略和视觉识别感兴趣——探索信息如何塑造理解，设计如何传达真相。",
                  )}
                </p>
                <p>
                  {t(
                    "— Proven teamwork skills. Had experience in attending, planning, organizing and hosting global conferences. ",
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
                <motion.div style={{ y: skillsY, opacity: skillsOpacity }} className="w-full space-y-10">
                  <div className="space-y-3">
                    <span className="text-display text-foreground/10 leading-none block">S</span>
                    <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                      {t("Skills", "技能")}
                    </p>
                  </div>

                  <ul className="space-y-5">
                    {[
                      { en: "OSINT Investigation", zh: "开源情报调查" },
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
              <div
                ref={awardsRef}
                className="min-h-screen sticky top-0 flex items-start pt-32 pb-16 z-20 bg-background"
              >
                <motion.div style={{ y: awardsY, opacity: awardsOpacity }} className="w-full space-y-10">
                  <div className="space-y-3">
                    <span className="text-display text-foreground/10 leading-none block">A</span>
                    <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                      {t("Awards", "荣誉")}
                    </p>
                  </div>

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
                <motion.div style={{ y: pressY, opacity: pressOpacity }} className="w-full space-y-10">
                  <div className="space-y-3">
                    <span className="text-display text-foreground/10 leading-none block">P</span>
                    <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                      {t("Events", "项目")}
                    </p>
                  </div>

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
