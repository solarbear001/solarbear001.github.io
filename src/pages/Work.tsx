import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { workArticles } from "@/data/articles";

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
              ( {workArticles.length} ) {t("Prj cts & xpl r tns", "项目与探索")}
            </p>
          </div>
        </section>

        {/* Project List — staggered layout */}
        <section className="px-6 md:px-20 pb-32">
          <div className="max-w-6xl mx-auto space-y-0">
            {workArticles.map((project, i) => {
              const isEven = i % 2 === 0;
              return (
                <article
                  key={project.slug}
                  className="grid grid-cols-12 gap-6 md:gap-8 py-20 border-t border-border group"
                >
                  {isEven ? (
                    <>
                      <div className="col-span-12 md:col-span-2">
                        <span className="text-display text-foreground/10 leading-none block">
                          {project.letter}
                        </span>
                        <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-2">
                          {project.category}
                        </p>
                        <Link
                          to={`/work/${project.slug}`}
                          className="inline-block mt-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase border border-border px-3 py-1"
                        >
                          {t("READ →", "阅读 →")}
                        </Link>
                      </div>
                      <div className="col-span-12 md:col-span-4 md:col-start-4">
                        <Link to={`/work/${project.slug}`}>
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.titleEn}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="col-span-12 md:col-span-3 md:col-start-9 flex flex-col justify-between">
                        <div className="space-y-4">
                          <Link to={`/work/${project.slug}`}>
                            <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight">
                              {t(project.titleEn, project.titleZh)}
                            </h2>
                          </Link>
                          <p className="font-sans text-sm text-muted-foreground leading-[1.8] tracking-wide">
                            {t(project.descEn, project.descZh)}
                          </p>
                        </div>
                        <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/60 uppercase mt-6">
                          {t(project.creditsEn || "", project.creditsZh || "")}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-span-12 md:col-span-3 md:col-start-1 flex flex-col justify-between">
                        <div className="space-y-4">
                          <Link to={`/work/${project.slug}`}>
                            <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight">
                              {t(project.titleEn, project.titleZh)}
                            </h2>
                          </Link>
                          <p className="font-sans text-sm text-muted-foreground leading-[1.8] tracking-wide">
                            {t(project.descEn, project.descZh)}
                          </p>
                        </div>
                        <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/60 uppercase mt-6">
                          {t(project.creditsEn || "", project.creditsZh || "")}
                        </p>
                      </div>
                      <div className="col-span-12 md:col-span-4 md:col-start-5">
                        <Link to={`/work/${project.slug}`}>
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.titleEn}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="col-span-12 md:col-span-2 md:col-start-11 md:text-right">
                        <span className="text-display text-foreground/10 leading-none block">
                          {project.letter}
                        </span>
                        <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-2">
                          {project.category}
                        </p>
                        <Link
                          to={`/work/${project.slug}`}
                          className="inline-block mt-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase border border-border px-3 py-1"
                        >
                          {t("READ →", "阅读 →")}
                        </Link>
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

export default Work;
