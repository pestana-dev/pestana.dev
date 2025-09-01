import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 relative"
      style={{
        backgroundImage: `url(/lovable-uploads/d7723eb8-d3a9-4a11-8ec8-78bcddf8b4ad.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay with opacity and green tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-600/30 to-teal-700/40"></div>
      <div className="absolute inset-0 bg-background/60"></div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Gabriela Pestana
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
            Desenvolvedora & Designer UX
          </h2>

          {/* Description - removed per user request */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary font-semibold px-8"
              onClick={() => scrollToSection("projects")}
            >
              Ver Projetos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary-light font-semibold px-8"
              onClick={() => scrollToSection("contact")}
            >
              Entre em Contato
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/pestana-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors shadow-card"
            >
              <Github size={24} className="text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/pestana-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors shadow-card"
            >
              <Linkedin size={24} className="text-foreground" />
            </a>
            <a
              href="mailto:gabriela@pestana.dev.br"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors shadow-card"
            >
              <Mail size={24} className="text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
