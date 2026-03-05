import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      {/* Central image with text overlay */}
      <div className="relative w-[480px] max-w-[90vw] aspect-square">
        <img
          src="https://cdn.sanity.io/images/hvd5n54p/production/a40ad54ca387cb903eaec29f93def4e2055bc566-6800x5100.jpg?w=1200&fm=webp"
          alt="Editorial portrait"
          className="w-full h-full object-cover grayscale"
        />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
          {/* Top text */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="font-mono text-[10px] tracking-[0.3em] text-foreground/30 uppercase">SYS.INIT</span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-foreground/30"> 2025</span>
            </div>
            <p className="font-mono text-xs tracking-[0.4em] text-foreground uppercase text-justify leading-relaxed">
              writer&nbsp;&nbsp;editor&nbsp;&nbsp;researcher&nbsp;&nbsp;OSINTer
            </p>
          </div>

          {/* Center keyword */}
          <div className="space-y-2 text-center">
            <p className="font-georgia text-lg md:text-xl tracking-[0.15em] text-foreground uppercase">
              Visual Investigation
            </p>
            <p className="font-georgia text-lg md:text-xl tracking-[0.15em] text-foreground uppercase">
              Content Creation
            </p>
          </div>

          {/* Bottom text */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="font-mono text-[10px] tracking-[0.2em] text-foreground/30"></span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-foreground/30"></span>
            </div>
            <p className="font-mono text-xs tracking-[0.4em] text-foreground uppercase text-right">Based in Shanghai</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 flex flex-col items-center gap-2 animate-scroll-bounce">
        <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">scroll</span>
        <div className="w-px h-6 bg-muted-foreground/30" />
      </div>
    </section>
  );
};

export default HeroSection;
