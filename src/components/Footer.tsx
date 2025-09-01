import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo and Name - Centered Above */}
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Code2 size={24} className="text-primary" />
              </div>
            </div>
            <div className="text-2xl font-bold text-foreground">
              pestana.dev
            </div>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Criando experiências digitais incríveis com foco em usabilidade e
            acessibilidade
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/pestana-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 md:p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Github size={18} className="text-primary md:w-5 md:h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/pestana-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 md:p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Linkedin size={18} className="text-primary md:w-5 md:h-5" />
            </a>
            <a
              href="mailto:gabriela@pestana.dev.br"
              className="p-2 md:p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Mail size={18} className="text-primary md:w-5 md:h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              © {currentYear} Gabriela Pestana. Feito com ❤️ e muito chá 🍵
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
