import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHero from "@/components/FloatingHero";
import PhotobookGrid from "@/components/PhotobookGrid";

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <FloatingHero />
        <PhotobookGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Work;
