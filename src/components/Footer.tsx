import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo and Name - Centered Above */}
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-background/10 rounded-lg flex items-center justify-center">
                <Code2 size={24} className="text-background" />
              </div>
            </div>
            <div className="text-2xl font-bold">pestana.dev</div>
          </div>

          {/* Tagline */}
          <p className="text-background/80 mb-8 max-w-md mx-auto">
            Criando experiências digitais incríveis com foco em usabilidade e
            acessibilidade
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/pestana-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Github size={20} className="text-background" />
            </a>
            <a
              href="https://www.linkedin.com/in/pestana-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Linkedin size={20} className="text-background" />
            </a>
            <a
              href="mailto:gabriela@pestana.dev.br"
              className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Mail size={20} className="text-background" />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-background/20 pt-8">
            <p className="text-background/70 text-sm flex items-center justify-center gap-2">
              © {currentYear} Gabriela Pestana. Feito com ❤️ e muito chá 🍵
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
