import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";

const projects = [
  {
    letter: "F",
    category: "Visual Investigation",
    titleEn: "Freshman",
    titleZh: "新人",
    descEn: "An investigative documentary exploring grassroots journalism in the digital age. Visual storytelling meets data-driven research.",
    descZh: "一部探索数字时代草根新闻业的调查纪录片。视觉叙事与数据驱动研究的结合。",
    creditsEn: "Directed & Edited — Solo",
    creditsZh: "导演 & 剪辑 — 独立完成",
    image: work1,
    link: "#",
  },
  {
    letter: "S",
    category: "OSINT",
    titleEn: "Savor",
    titleZh: "品味",
    descEn: "Open-source intelligence research project tracking supply chain transparency across Southeast Asian markets.",
    descZh: "追踪东南亚市场供应链透明度的开源情报研究项目。",
    creditsEn: "Research Lead — w/ Global Voices",
    creditsZh: "研究负责人 — 与 Global Voices 合作",
    image: work2,
    link: "#",
  },
  {
    letter: "Z",
    category: "International Communication",
    titleEn: "Zoox",
    titleZh: "驭象",
    descEn: "Cross-cultural brand communication strategy for an autonomous vehicle startup entering the Chinese market.",
    descZh: "为进入中国市场的自动驾驶初创企业制定跨文化品牌传播策略。",
    creditsEn: "Strategist — w/ Monks",
    creditsZh: "策略师 — 与 Monks 合作",
    image: work3,
    link: "#",
  },
  {
    letter: "B",
    category: "Content & Branding",
    titleEn: "Balmain Beauty",
    titleZh: "巴尔曼美妆",
    descEn: "Editorial content series for luxury beauty brand launch. Photography direction, copywriting, and digital campaign.",
    descZh: "奢侈美妆品牌上市的编辑内容系列。摄影指导、文案撰写和数字营销。",
    creditsEn: "Editor & Content Director",
    creditsZh: "编辑 & 内容总监",
    image: work4,
    link: "#",
  },
  {
    letter: "T",
    category: "Documentary",
    titleEn: "The Blimp",
    titleZh: "飞艇",
    descEn: "Short documentary on the forgotten history of Shanghai's airship era. Premiered at Shanghai International Film Festival.",
    descZh: "关于上海飞艇时代被遗忘历史的短纪录片。在上海国际电影节首映。",
    creditsEn: "Director & Writer",
    creditsZh: "导演 & 编剧",
    image: work5,
    link: "#",
  },
  {
    letter: "A",
    category: "Digital Experience",
    titleEn: "Apple Music Replay",
    titleZh: "Apple Music 回忆",
    descEn: "Interactive data visualization of personal listening habits. Generative design meets music analytics.",
    descZh: "个人聆听习惯的交互式数据可视化。生成设计与音乐分析的结合。",
    creditsEn: "Design & Development — Solo",
    creditsZh: "设计 & 开发 — 独立完成",
    image: work1,
    link: "#",
  },
  {
    letter: "B",
    category: "Visual Research",
    titleEn: "Beyond the Limits",
    titleZh: "超越极限",
    descEn: "A visual research project on the boundaries of AI-generated imagery in journalistic contexts.",
    descZh: "关于人工智能生成图像在新闻语境中边界的视觉研究项目。",
    creditsEn: "Researcher — w/ Reuters Institute",
    creditsZh: "研究员 — 与路透社研究所合作",
    image: work2,
    link: "#",
  },
  {
    letter: "E",
    category: "Virtual Exhibition",
    titleEn: "Elektra Virtual Museum",
    titleZh: "伊莱克特拉虚拟博物馆",
    descEn: "Curation and editorial design for a virtual museum exploring electronic music history and visual culture.",
    descZh: "为探索电子音乐历史和视觉文化的虚拟博物馆进行策展和编辑设计。",
    creditsEn: "Curator & Editor",
    creditsZh: "策展人 & 编辑",
    image: work3,
    link: "#",
  },
];

const Work = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 md:px-20 pt-32 pb-16">
          <div className="max-w-4xl w-full text-center space-y-6">
            <h1 className="text-display tracking-tight text-foreground">
              w rk
            </h1>
            <p className="text-display tracking-tight text-foreground/40" style={{ fontSize: "clamp(28px, 4vw, 60px)" }}>
              ( a selection ) 2026
            </p>
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase mt-8">
              ( {projects.length} ) {t("Prj cts & xpl r tns", "项目与探索")}
            </p>
          </div>
        </section>

        {/* Project List */}
        <section className="px-6 md:px-20 pb-32">
          <div className="max-w-5xl mx-auto space-y-0">
            {projects.map((project, i) => (
              <article
                key={i}
                className="grid grid-cols-12 gap-6 md:gap-8 py-20 border-t border-border group"
              >
                {/* Left: Letter + Category */}
                <div className="col-span-12 md:col-span-2">
                  <span className="text-display text-foreground/10 leading-none block">
                    {project.letter}
                  </span>
                  <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-2">
                    {project.category}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase border border-border px-3 py-1"
                    >
                      LIVE SITE ↗
                    </a>
                  )}
                </div>

                {/* Center: Image */}
                <div className="col-span-12 md:col-span-4 md:col-start-4">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.titleEn}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>

                {/* Right: Title + Description + Credits */}
                <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight">
                      {t(project.titleEn, project.titleZh)}
                    </h2>
                    <p className="font-sans text-sm text-muted-foreground leading-[1.8] tracking-wide">
                      {t(project.descEn, project.descZh)}
                    </p>
                  </div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/60 uppercase mt-6">
                    {t(project.creditsEn, project.creditsZh)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
