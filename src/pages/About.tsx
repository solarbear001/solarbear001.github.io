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
              <h1 className="text-display tracking-tight text-foreground">INTERNATIONAL DESK SENIOR EDITOR</h1>
              <h1 className="text-display tracking-tight text-foreground">
                FACT CHECKER SKILLED IN VISUAL INVESTIGATION
              </h1>
              <h1 className="text-display tracking-tight text-foreground">AIGC EXPLORER</h1>
            </div>

            <div className="w-40 h-40 md:w-52 md:h-52 mx-auto overflow-hidden rounded-full">
              <img src={avatarImg} alt="Shujing Zheng" className="w-full h-full object-cover grayscale" />
            </div>

            <div className="space-y-6">
              <p className="font-sans text-sm md:text-base tracking-wide text-muted-foreground leading-relaxed max-w-lg mx-auto">
                {t(
                  "Skilled in visual investigation, her interests encompass cutting-edge technology, geoeconomies and geopolitical conflicts.",
                  "善于视觉调查，关注前沿科技与地缘政治、经济的冲突领域。",
                )}
              </p>
              <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
                {t("Based in", "现居")} <span className="text-foreground">{t("Shanghai", "上海")}</span>
              </p>
            </div>
          </div>
        </section>

        {/* 2 — Information Section — left-aligned */}
        <section className="px-6 md:px-20 py-32">
          <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-2">
              <div className="sticky top-32">
                <span className="text-display text-foreground/10 leading-none">I</span>
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
                      "Shujing Zheng is a senior journalist/editor, fact checker at the World News Section of The Paper (澎湃新闻), specializing in combating online misinformation and disinformation with digital tools and advanced technologies. Well-experienced in social research, data analysis, AIGC exploration and media practice, and take great interest in job opportunities related to digital technology, data driven content production, AIGC, media operation or international communication.
",
                      "郑淑婧是一名编辑和开源情报研究员，拥有国际传播和视觉叙事背景。她的工作位于调查新闻、数字媒体和创意策略的交汇处。",
                    )}
                  </p>
                  <p>
                    {t(
                      "She is a heavy user of artificial intelligence, agents lover. Her key skills encompass: ",
                      "她对数字体验、品牌塑造、创意策略和视觉识别感兴趣——探索信息如何塑造理解，设计如何传达真相。",
                    )}
                  </p>
                  <p>
                    {t(
                      "- Strong multimedia skills in data collection and analysis. Proven ability to monitor social media accounts, verify information and write news reports.  ",
                      "她对数字体验、品牌塑造、创意策略和视觉识别感兴趣——探索信息如何塑造理解，设计如何传达真相。",
                    )}
                  </p>
                   <p>
                    {t(
                      "- Strong understanding of media landscape and news production. Delivered media literacy lectures at multiple universities including ZJU and SISU.  ",
                      "她对数字体验、品牌塑造、创意策略和视觉识别感兴趣——探索信息如何塑造理解，设计如何传达真相。",
                    )}
                  </p>
                  <p>
                    {t(
                      "- Proven teamwork skills. Had experience in attending, planning, organizing and hosting global conferences. ",
                      "她对数字体验、品牌塑造、创意策略和视觉识别感兴趣——探索信息如何塑造理解，设计如何传达真相。",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 4 — Services / Skills — left-aligned */}
        <section className="px-6 md:px-20 py-32">
          <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-2">
              <div className="sticky top-32">
                <span className="text-display text-foreground/10 leading-none">S</span>
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
                  { en: "Awwwards SOTD ×10", zh: "上海新闻奖 ×10" },
                  { en: "Silver Pigeon Award ×2", zh: "银鸽奖 ×2" },
                  { en: "Best International Communication Work ×3", zh: "最佳国际传播作品奖 ×3" },
                  { en: "CSSDA ×3", zh: "三八妇女红旗手优秀集体" },
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
                <span className="text-display text-foreground/10 leading-none">A</span>
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
                <span className="text-display text-foreground/10 leading-none">P</span>
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
