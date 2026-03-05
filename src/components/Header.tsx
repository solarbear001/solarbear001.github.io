import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-background/80 backdrop-blur-sm">
      <Link to="/" className="font-mono text-xs tracking-[0.3em] text-foreground uppercase">
        SHUJING ZHENG
      </Link>
      <nav className="flex items-center gap-6 md:gap-8">
        {[
          { en: "About", zh: "关于" },
          { en: "Work", zh: "作品" },
          { en: "Blog", zh: "观察" },
        ].map((item) => (
          <Link
            key={item.en}
            to={`/${item.en.toLowerCase()}`}
            className="font-mono text-xs tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
          >
            {t(item.en, item.zh)}
          </Link>
        ))}
        <button
          onClick={toggleLang}
          className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase border border-border px-3 py-1"
        >
          {lang === "en" ? "中文" : "EN"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
