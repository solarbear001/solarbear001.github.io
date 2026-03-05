import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const posts = [
  {
    letter: "O",
    category: "OSINT",
    titleEn: "The Architecture of Open-Source Intelligence",
    titleZh: "开源情报的架构",
    descEn: "How digital forensics and open data reshape investigative journalism in an age of information overload.",
    descZh: "数字取证和开放数据如何在信息过载时代重塑调查新闻。",
    dateEn: "March 2026",
    dateZh: "2026年3月",
    link: "#",
  },
  {
    letter: "V",
    category: "Visual Culture",
    titleEn: "Notes on Cinematic Typography",
    titleZh: "关于电影排版的笔记",
    descEn: "Exploring the intersection of film title design, editorial layout, and contemporary visual identity systems.",
    descZh: "探索电影片名设计、编辑版式与当代视觉识别系统的交汇点。",
    dateEn: "February 2026",
    dateZh: "2026年2月",
    link: "#",
  },
  {
    letter: "L",
    category: "Language & Literature",
    titleEn: "Lost in Translation, Found in Context",
    titleZh: "迷失在翻译中，在语境中被发现",
    descEn: "On the untranslatable and the poetics of cross-cultural communication. A personal essay.",
    descZh: "关于不可翻译性和跨文化交流的诗学。一篇个人随笔。",
    dateEn: "January 2026",
    dateZh: "2026年1月",
    link: "#",
  },
  {
    letter: "D",
    category: "Digital Experience",
    titleEn: "Data as Narrative",
    titleZh: "数据即叙事",
    descEn: "When information design becomes storytelling — reflections on building visual systems for complex datasets.",
    descZh: "当信息设计变成叙事——关于为复杂数据集构建视觉系统的反思。",
    dateEn: "December 2025",
    dateZh: "2025年12月",
    link: "#",
  },
  {
    letter: "M",
    category: "Media & Society",
    titleEn: "Manufacturing Clarity",
    titleZh: "制造清晰",
    descEn: "A critical look at how media platforms engineer understanding — and misunderstanding — at scale.",
    descZh: "批判性审视媒体平台如何大规模地制造理解——和误解。",
    dateEn: "November 2025",
    dateZh: "2025年11月",
    link: "#",
  },
  {
    letter: "S",
    category: "Shanghai",
    titleEn: "Shanghai Frequencies",
    titleZh: "上海频率",
    descEn: "Field notes on the sonic and visual textures of a city in constant transformation.",
    descZh: "关于一座不断变化的城市的声音与视觉质地的田野笔记。",
    dateEn: "October 2025",
    dateZh: "2025年10月",
    link: "#",
  },
];

const Blog = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Use shared Header with inverted style */}
      <Header variant="light" />

      <main>
        {/* Hero */}
        <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-20 pt-32 pb-16">
          <div className="max-w-5xl w-full space-y-6">
            <h1 className="text-display tracking-tight text-black">
              {t("bl g", "观 察")}
            </h1>
            <p className="text-black/30" style={{ fontFamily: "Georgia, '黑体', sans-serif", fontSize: "clamp(28px, 4vw, 60px)", textTransform: "uppercase", letterSpacing: "-0.02em" }}>
              {t("( observations ) 2025–2026", "（观察笔记）2025–2026")}
            </p>
            <p className="font-mono text-xs tracking-[0.3em] text-black/40 uppercase mt-8">
              ( {posts.length} ) {t("Wr t ngs & r fl ct ns", "文字与反思")}
            </p>
          </div>
        </section>

        {/* Post List — staggered layout */}
        <section className="px-6 md:px-20 pb-32">
          <div className="max-w-6xl mx-auto space-y-0">
            {posts.map((post, i) => {
              const isEven = i % 2 === 0;
              return (
                <article
                  key={i}
                  className="grid grid-cols-12 gap-6 md:gap-8 py-20 border-t border-black/10 group"
                >
                  {isEven ? (
                    <>
                      {/* Left-aligned: Letter + meta */}
                      <div className="col-span-12 md:col-span-2">
                        <span className="text-display text-black/[0.06] leading-none block">
                          {post.letter}
                        </span>
                        <p className="font-mono text-[10px] tracking-[0.3em] text-black/40 uppercase mt-2">
                          {post.category}
                        </p>
                        <p className="font-mono text-[10px] tracking-[0.2em] text-black/25 uppercase mt-4">
                          {t(post.dateEn, post.dateZh)}
                        </p>
                      </div>
                      {/* Content right */}
                      <div className="col-span-12 md:col-span-6 md:col-start-4 flex flex-col justify-between">
                        <div className="space-y-4">
                          <a href={post.link} className="block group-hover:opacity-70 transition-opacity duration-300">
                            <h2 className="font-serif text-2xl md:text-4xl text-black tracking-tight leading-tight">
                              {t(post.titleEn, post.titleZh)}
                            </h2>
                          </a>
                          <p className="font-sans text-sm text-black/50 leading-[1.8] tracking-wide max-w-lg">
                            {t(post.descEn, post.descZh)}
                          </p>
                        </div>
                        <a href={post.link} className="inline-block mt-6 font-mono text-[10px] tracking-[0.3em] text-black/40 hover:text-black transition-colors duration-300 uppercase">
                          {t("READ →", "阅读 →")}
                        </a>
                      </div>
                      <div className="hidden md:flex col-span-2 md:col-start-11 items-start justify-end">
                        <span className="font-mono text-xs text-black/20">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Index number left */}
                      <div className="hidden md:flex col-span-2 items-start justify-start">
                        <span className="font-mono text-xs text-black/20">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      {/* Content shifted right */}
                      <div className="col-span-12 md:col-span-6 md:col-start-5 flex flex-col justify-between">
                        <div className="space-y-4">
                          <a href={post.link} className="block group-hover:opacity-70 transition-opacity duration-300">
                            <h2 className="font-serif text-2xl md:text-4xl text-black tracking-tight leading-tight">
                              {t(post.titleEn, post.titleZh)}
                            </h2>
                          </a>
                          <p className="font-sans text-sm text-black/50 leading-[1.8] tracking-wide max-w-lg">
                            {t(post.descEn, post.descZh)}
                          </p>
                        </div>
                        <a href={post.link} className="inline-block mt-6 font-mono text-[10px] tracking-[0.3em] text-black/40 hover:text-black transition-colors duration-300 uppercase">
                          {t("READ →", "阅读 →")}
                        </a>
                      </div>
                      {/* Letter + meta right */}
                      <div className="col-span-12 md:col-span-2 md:col-start-11 md:text-right">
                        <span className="text-display text-black/[0.06] leading-none block">
                          {post.letter}
                        </span>
                        <p className="font-mono text-[10px] tracking-[0.3em] text-black/40 uppercase mt-2">
                          {post.category}
                        </p>
                        <p className="font-mono text-[10px] tracking-[0.2em] text-black/25 uppercase mt-4">
                          {t(post.dateEn, post.dateZh)}
                        </p>
                      </div>
                    </>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
