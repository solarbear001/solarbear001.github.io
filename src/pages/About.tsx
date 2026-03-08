import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CollapsibleSection = ({
  letter,
  label,
  children,
}: {
  letter: string;
  label: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 group cursor-pointer"
      >
        <div className="flex items-center gap-6">
          <span className="text-display text-foreground/10 leading-none">{letter}</span>
          <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
            {label}
          </p>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="font-mono text-2xl text-foreground/40 group-hover:text-foreground transition-colors"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-10">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const About = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@shujingzheng.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* 1 — Hero Section: centered avatar, max 400px */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
          <div className="relative w-[400px] max-w-[90vw] h-[400px] max-h-[90vw]">
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
                  writer&nbsp;&nbsp;editor&nbsp;&nbsp;researcher&nbsp;&nbsp;OSINTer
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

        {/* 3 — Self Introduction: left-aligned, matching large text alignment */}
        <section className="px-6 md:px-20 py-32">
          <div className="w-full space-y-10">
            <div className="space-y-3">
              <span className="text-display text-foreground/10 leading-none block">I</span>
              <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                {t("Information", "信息")}
              </p>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight lowercase">
              {t("about", "关于")}
            </h3>

            <div className="space-y-4 font-sans text-sm md:text-base text-muted-foreground leading-[1.8] tracking-wide max-w-2xl">
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
        </section>

        {/* 4 — Experience: right half with collapsible folder sections */}
        <section className="px-6 md:px-20 py-32">
          <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
            {/* Left half intentionally empty */}
            <div className="hidden md:block col-span-6" />

            <div className="col-span-12 md:col-span-6 space-y-0">
              {/* Skills Section */}
              <CollapsibleSection letter="S" label={t("Skills", "技能")}>
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
              </CollapsibleSection>

              {/* Awards Section */}
              <CollapsibleSection letter="A" label={t("Awards", "荣誉")}>
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
              </CollapsibleSection>

              {/* Press / Events Section */}
              <CollapsibleSection letter="P" label={t("Events", "项目")}>
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
              </CollapsibleSection>
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
