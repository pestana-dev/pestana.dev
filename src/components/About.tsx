import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: `${new Date().getFullYear() - 2016}+ Anos de Experiência`,
      description: "Desenvolvendo soluções frontend robustas e escaláveis desde 2016"
    },
    {
      icon: Palette,
      title: "Design & Usabilidade",
      description: "Focada em criar experiências intuitivas e acessíveis"
    },
    {
      icon: Users,
      title: "Liderança em Projetos",
      description: "Experiência como Product Owner em projetos UX/UI"
    },
    {
      icon: Zap,
      title: "Performance & SEO",
      description: "Especialista em otimização e conversão de visitantes"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Sobre Mim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desenvolvedora full stack com perfil generalista, apaixonada por criar experiências digitais 
            que fazem a diferença. Iniciei em 2016 e me desafio constantemente em diversos cenários e 
            tecnologias, sempre com foco na inclusão digital e acessibilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                    <item.icon size={24} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Section with Photo */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">
                Além do Código
              </h3>
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Photo for mobile - shows first on small screens */}
                  <div className="flex justify-center md:hidden mb-6">
                    <div className="w-48 h-48 rounded-xl overflow-hidden border-2 border-border">
                      <img 
                        src="/lovable-uploads/25d911a0-c8bd-48c9-91ed-1ec0b7805199.png" 
                        alt="Gabriela praticando karate"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Quando não estou programando, você me encontra praticando karate, explorando jogos indie 
                      incríveis ou me perdendo nos universos da Nintendo. Essa paixão por jogos e artes marciais 
                      não é apenas hobby - ela molda minha abordagem profissional.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Os jogos me ensinaram sobre narrativa, design de experiência e atenção aos detalhes. 
                      O karate me trouxe disciplina, foco e a busca constante pela perfeição técnica. 
                      Essas influências se refletem em cada projeto que desenvolvo.
                    </p>
                  </div>

                  {/* Photo for desktop - shows last on larger screens */}
                  <div className="hidden md:flex justify-center">
                    <div className="w-48 h-48 rounded-xl overflow-hidden border-2 border-border">
                      <img 
                        src="/lovable-uploads/25d911a0-c8bd-48c9-91ed-1ec0b7805199.png" 
                        alt="Gabriela praticando karate"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">
                Minha Filosofia
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">
                    🥋 Disciplina do Karate
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Aplico os princípios do karate em cada projeto: disciplina, precisão, 
                    respeito e melhoria contínua. Cada linha de código é executada com a 
                    mesma atenção de um kata perfeito.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">
                    🎯 Tecnologia Inclusiva
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Acredito que a tecnologia deve ser acessível a todos. Cada solução 
                    que desenvolvo é pensada para criar experiências inclusivas, intuitivas 
                    e que realmente façam diferença na vida das pessoas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;