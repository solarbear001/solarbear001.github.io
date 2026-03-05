const Footer = () => {
  return (
    <footer className="px-6 md:px-12 py-16 border-t border-border">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left - LinkedIn */}
        <div>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Center - Contact */}
        <div className="text-center space-y-2">
          <p className="text-display-bottom text-sm tracking-[0.15em] text-foreground uppercase">Reach Out</p>
          <a
            href="mailto:shujing.cheng01@gmail.com"
            className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            shujing.cheng01@gmail.com
          </a>
        </div>

        {/* Right */}
        <div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Hattifattener</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
