import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import avatarImg from "@/assets/avatar.jpg";

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
        <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 pt-32 pb-24">
          <div className="max-w-3xl w-full space-y-16 text-center">
            <div className="space-y-4">
              <h1 className="text-display tracking-tight text-foreground">
                Editor
              </h1>
              <h1 className="text-display tracking-tight text-foreground">
                <span className="text-muted-foreground">&</span> OSINTer
              </h1>
              <h1 className="text-display tracking-tight text-foreground">
                Researcher
              </h1>
            </div>

            <div className="w-40 h-40 md:w-52 md:h-52 mx-auto overflow-hidden rounded-full">
              <img
                src={avatarImg}
                alt="Shujing Zheng"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            <div className="space-y-6">
              <p className="font-sans text-sm md:text-base tracking-wide text-muted-foreground leading-relaxed max-w-lg mx-auto">
                {t(
                  "Driven by a spirit of curiosity, her interests encompass language arts, literature, visual design, film and music.",
                  "出于好奇心的驱使，她的兴趣涵盖语言艺术、文学、视觉设计、电影和音乐。"
                )}
              </p>
              <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
                {t("Based in", "现居")}{" "}
                <span className="text-foreground">{t("Shanghai", "上海")}</span>
              </p>
            </div>
          </div>
        </section>

        {/* 2 — Information Section — left-aligned */}
        <section className="px-6 md:px-20 py-32">
          <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-2">
              <div className="sticky top-32">
                <span className="text-display text-foreground/10 leading-none">
                  I
                </span>
                <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-2">
                  {t("Information", "信息")}
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-4 space-y-12">
              <div className="space-y-6">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight lowercase">
                  {t("about", "关于")}
                </h3>
                <div className="space-y-4 font-sans text-sm md:text-base text-muted-foreground leading-[1.8] tracking-wide">
                  <p>
                    {t(
                      "Shujing Zheng is an editor and open-source intelligence researcher with a background in international communication and visual storytelling. Her work sits at the intersection of investigative journalism, digital media, and creative strategy.",
                      "郑淑静是一名编辑和开源情报研究员，拥有国际传播和视觉叙事背景。她的工作位于调查新闻、数字媒体和创意策略的交汇处。"
                    )}
                  </p>
                  <p>
                    {t(
                      "She is interested in digital experience, branding, creative strategy, and visual identity — exploring how information shapes understanding and how design communicates truth.",
                      "她对数字体验、品牌塑造、创意策略和视觉识别感兴趣——探索信息如何塑造理解，设计如何传达真相。"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 — Contact Section — right-aligned */}
        <section className="px-6 md:px-20 py-24 border-t border-border">
          <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5 md:col-start-5 space-y-6">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight lowercase">
                {t("get in touch", "联系方式")}
              </h3>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase w-20">
                  Email
                </span>
                <button
                  onClick={copyEmail}
                  className="font-mono text-xs tracking-[0.15em] text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  hello@shujingzheng.com
                  <span className="ml-2 text-muted-foreground text-[10px]">
                    {copied ? t("✓ copied", "✓ 已复制") : t("↗ copy", "↗ 复制")}
                  </span>
                </button>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase w-20">
                  LinkedIn
                </span>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs tracking-[0.15em] text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  linkedin.com/in/shujingzheng ↗
                </a>
              </div>
            </div>
            <div className="col-span-12 md:col-span-2 md:col-start-11 md:text-right">
              <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                {t("Contact", "联络")}
              </p>
            </div>
          </div>
        </section>

        {/* 4 — Services / Skills — left-aligned */}
        <section className="px-6 md:px-20 py-32">
          <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-2">
              <div className="sticky top-32">
                <span className="text-display text-foreground/10 leading-none">
                  S
                </span>
                <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-2">
                  {t("Services", "技能")}
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-4">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight lowercase mb-12">
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
            </div>
          </div>
        </section>

        {/* 5 — Awards — right-aligned */}
        <section className="px-6 md:px-20 py-32 border-t border-border">
          <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5 md:col-start-5">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight lowercase mb-12">
                {t("accomplishments", "成就")}
              </h3>
              <ul className="space-y-5">
                {[
                  { en: "Awwwards SOTD ×10", zh: "Awwwards 每日最佳网站 ×10" },
                  { en: "Silver Pigeon Award ×2", zh: "银鸽奖 ×2" },
                  { en: "Best International Communication Work ×3", zh: "最佳国际传播作品奖 ×3" },
                  { en: "CSSDA ×3", zh: "CSSDA ×3" },
                ].map((award, i) => (
                  <li
                    key={i}
                    className="font-mono text-sm tracking-[0.1em] text-foreground/80 py-3 border-b border-border"
                  >
                    {award.en}
                    {t("", ` — ${award.zh}`)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 md:col-span-2 md:col-start-11 md:text-right">
              <div className="sticky top-32">
                <span className="text-display text-foreground/10 leading-none">
                  A
                </span>
                <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-2">
                  {t("Awards", "荣誉")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6 — Press — left-aligned */}
        <section className="px-6 md:px-20 py-32">
          <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-2">
              <div className="sticky top-32">
                <span className="text-display text-foreground/10 leading-none">
                  P
                </span>
                <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-2">
                  {t("Press", "媒体")}
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-4">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight lowercase mb-12">
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
            </div>
          </div>
        </section>

        {/* 7 — Artistic Footer */}
        <section className="min-h-[60vh] flex items-center justify-center px-6">
          <div className="text-center space-y-4">
            <p className="text-display tracking-tight text-foreground/20 italic">
              Like a Daydream
            </p>
            <p className="text-display tracking-tight text-foreground/20 italic">
              Or a Fever
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
