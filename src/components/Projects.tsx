import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code, Calendar } from "lucide-react";

const Projects = () => {
  const currentProjects = [
    {
      name: "GeoMap",
      description: "Plataforma para unificar e agilizar geoprocessamentos, facilitando a análise e visualização de dados geográficos com interface intuitiva e ferramentas avançadas.",
      status: "Em desenvolvimento",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "GIS"],
      type: "Plataforma Web",
      period: "2025 - Presente"
    },
    {
      name: "Rapture",
      description: "Desenvolvimento de jogo estilo visual novel com sistema de batalha de card game ambientado no universo cyberpunk, utilizando Unity para criar uma experiência imersiva.",
      status: "Em desenvolvimento", 
      technologies: ["Unity", "C#", "Game Design", "UI/UX", "Visual Novel"],
      type: "Game Development",
      period: "2025 - Presente"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Projetos em Andamento
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça os projetos inovadores em que estou trabalhando atualmente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {currentProjects.map((project, index) => (
            <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold gradient-text">
                    {project.name}
                  </h3>
                  <Badge className="bg-primary text-primary-foreground">
                    {project.status}
                  </Badge>
                </div>

                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  <span>{project.period}</span>
                  <span className="mx-2">•</span>
                  <span>{project.type}</span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">
                    Tecnologias utilizadas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="border-primary/20 text-primary hover:bg-primary-light"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Projeto em desenvolvimento ativo - mais detalhes em breve
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;