const QuoteSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-20 py-32">
      <div className="max-w-6xl w-full space-y-16">
        <blockquote className="space-y-4">
          <p className="text-display-xl tracking-tight text-foreground">Better Information</p>
          <p className="text-display-xl tracking-tight text-foreground">Better Life</p>
        </blockquote>

        <div className="w-16 h-px bg-muted-foreground/20" />

        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase"></p>
      </div>
    </section>
  );
};

export default QuoteSection;
