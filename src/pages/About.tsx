import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
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
          <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">{label}</p>
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
        {/* 1 — Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
          <ScrollReveal delay={0.2}>
            <div className="relative w-[400px] max-w-[90vw] h-[400px] max-h-[90vw]">
              <img
                src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*mbDVqQpqPu1END3sLn6vrQ.jpeg"
                alt="Shujing Zheng"
                className="w-full h-full object-cover grayscale"
              />
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
                <div className="space-y-2 text-center"></div>
                <div className="space-y-1">
                  <p className="font-mono text-xs tracking-[0.4em] text-foreground uppercase text-right">
                    {t("Based in Shanghai", "现居上海")}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="absolute bottom-12 flex flex-col items-center gap-2 animate-scroll-bounce">
            <div className="w-px h-6 bg-muted-foreground/30" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">scroll</span>
            <div className="w-px h-6 bg-muted-foreground/30" />
          </div>
        </section>

        {/* 2 — Quote Section */}
        <section className="min-h-screen flex items-center px-6 md:px-20 py-32">
          <div className="w-full space-y-6">
            <ScrollReveal direction="left">
              <div className="text-left">
                <p className="text-display-xl tracking-tight text-foreground">INTERNATIONAL DESK</p>
                <p className="text-display-xl tracking-tight text-foreground">SENIOR EDITOR</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-center py-8 md:py-12">
                <p className="font-sans text-sm md:text-base tracking-wide text-muted-foreground leading-[2] max-w-xl mx-auto">
                  {t(
                    "Skilled in visual investigation, her works focus on cutting-edge technology, geoeconomies and geopolitical conflicts.",
                    "善于视觉调查，关注前沿科技与地缘政治、经济的冲突领域。",
                  )}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="text-right">
                <p className="text-display-xl tracking-tight text-foreground">FACT CHECKER SKILLED IN</p>
                <p className="text-display-xl tracking-tight text-foreground">VISUAL INVESTIGATION</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-center py-8 md:py-12">
                <p className="font-sans text-sm md:text-base tracking-wide text-muted-foreground leading-[2] max-w-xl mx-auto">
                  {t(
                    "Heavy user of artificial intelligence, great interest in AIGC detection and enhancement.",
                    "人工智能重度使用者，智能助手爱好者，对AIGC检测与增强抱有浓厚兴趣。",
                  )}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="text-left">
                <p className="text-display-xl tracking-tight text-foreground">AIGC</p>
                <p className="text-display-xl tracking-tight text-foreground">EXPLORER</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 3 — Self Introduction */}
        <section className="px-6 md:px-20 py-32">
          <div className="w-full space-y-10">
            <ScrollReveal>
              <div className="space-y-3">
                <span className="text-display text-foreground/10 leading-none block">I</span>
                <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                  {t("Information", "信息")}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight lowercase">
                {t("about", "关于")}
              </h3>
            </ScrollReveal>

            <div className="space-y-4 font-sans text-sm md:text-base text-muted-foreground leading-[1.8] tracking-wide max-w-2xl">
              {[
                { en: "Shujing Zheng is a senior journalist/editor,fact checker at the World News Section of The Paper (澎湃新闻), specializing in combating online misinformation and disinformation with digital tools and advanced technologies. Well-experienced in social research, data analysis, AIGC exploration and media practice, and take great interest in job opportunities related to digital technology, data driven content production, AIGC, media operation or international communication.", zh: "郑淑婧是一名编辑和开源情报研究员，拥有国际传播和视觉叙事背景。她的工作位于调查新闻、数字媒体和创意策略的交汇处。" },
                { en: "She is a heavy user of artificial intelligence, her key skills encompasses: ", zh: "她对数字体验、品牌塑造、创意策略和视觉识别感兴趣——探索信息如何塑造理解，设计如何传达真相。" },
                { en: "— Strong multimedia skills in data collection and analysis. Proven ability to monitor social media accounts, verify information and write news reports. ", zh: "她对数字体验、品牌塑造、创意策略和视觉识别感兴趣——探索信息如何塑造理解，设计如何传达真相。" },
                { en: "— Strong understanding of media landscape and news production. Delivered media literacy lectures at multiple universities including ZJU and SISU. ", zh: "她对数字体验、品牌塑造、创意策略和视觉识别感兴趣——探索信息如何塑造理解，设计如何传达真相。" },
                { en: "— Proven teamwork skills. Had experience in attending, planning, organizing and hosting global conferences. ", zh: "她对数字体验、品牌塑造、创意策略和视觉识别感兴趣——探索信息如何塑造理解，设计如何传达真相。" },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <p>{t(item.en, item.zh)}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4 — Experience */}
        <section className="px-6 md:px-20 py-32">
          <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
            <div className="hidden md:block col-span-6" />
            <div className="col-span-12 md:col-span-6 space-y-0">
              <ScrollReveal>
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
                      <li key={i} className="font-mono text-sm tracking-[0.1em] text-foreground/80 py-3 border-b border-border">
                        {t(skill.en, skill.zh)}
                      </li>
                    ))}
                  </ul>
                </CollapsibleSection>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <CollapsibleSection letter="A" label={t("Awards", "荣誉")}>
                  <ul className="space-y-5">
                    {[
                      { en: "Shanghai Journalism Award ×10", zh: "上海新闻奖 ×10" },
                      { en: "Silver Pigeon Award ×2", zh: "银鸽奖 ×2" },
                      { en: "Best International Communication Work ×3", zh: "最佳国际传播作品奖 ×3" },
                      { en: "March 8th Red Banner Collective", zh: "三八妇女红旗手优秀集体" },
                    ].map((award, i) => (
                      <li key={i} className="font-mono text-sm tracking-[0.1em] text-foreground/80 py-3 border-b border-border">
                        {t(award.en, award.zh)}
                      </li>
                    ))}
                  </ul>
                </CollapsibleSection>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <CollapsibleSection letter="P" label={t("Events", "项目")}>
                  <ul className="space-y-5">
                    {[
                      "Behind the Design Interview",
                      "Lovers Magazine Interview",
                      "Codrops Portfolio Case Study",
                      "Speaker at Awwwards",
                    ].map((item, i) => (
                      <li key={i} className="font-mono text-sm tracking-[0.1em] text-foreground/80 py-3 border-b border-border">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CollapsibleSection>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
