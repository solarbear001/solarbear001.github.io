import ScrollReveal from "@/components/ScrollReveal";

const QuoteSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-20 py-32">
      <div className="max-w-6xl w-full space-y-16">
        <blockquote className="space-y-4">
          <ScrollReveal delay={0}>
            <p className="text-display-xl tracking-tight text-foreground">Better Information</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-display-xl tracking-tight text-foreground">Better Brain</p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-display-xl tracking-tight text-foreground">Better Life</p>
          </ScrollReveal>
        </blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
