import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, ExternalLink, Upload, Image } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Huddle Brasil",
      position: "Desenvolvedora Full Stack",
      period: "Julho 2022 - Presente",
      location: "São Paulo (Remoto)",
      type: "Atual",
      responsibilities: [
        "Resolução de problemas de usabilidade em dispositivos móveis",
        "Manutenção dos sistemas da empresa",
        "Desenvolvimento de melhorias nas integrações API Rest"
      ],
      technologies: ["React", "Vue.js", "TypeScript", "Node.js", "API Rest", "Git", "Bitbucket", "GCP", "Firebase", "Docker", "CI/CD", "MongoDB"],
      portfolioImages: [],
      repositoryLink: ""
    },
    {
      company: "Mundiware Systems",
      position: "Técnica em Web Design e Gráfico",
      period: "Outubro 2016 - Maio 2021",
      location: "Rio de Janeiro",
      type: "Anterior",
      responsibilities: [
        "Criação de landing pages otimizadas para SEO",
        "Melhoria na conversão de visitantes",
        "Liderança em projetos de UX/UI e email marketing",
        "Atuação como Product Owner"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "SEO", "Email Marketing", "UX/UI"],
      portfolioImages: [],
      repositoryLink: ""
    }
  ];

  const certifications = [
    {
      title: "Desenvolvimento de Games Completo",
      institution: "Danki Code",
      period: "Julho 2025 - Presente",
      status: "Em andamento"
    },
    {
      title: "Curso.dev",
      institution: "Filipe Deschamps",
      period: "Março 2025 - Presente",
      status: "Em andamento"
    },
    {
      title: "English Course Certificate (ESL)",
      institution: "Times Idiomas",
      period: "Novembro 2022 - Julho 2024",
      status: "Concluído"
    },
    {
      title: "Certificação Semana Spring React",
      institution: "Dev Superior",
      period: "Setembro 2022",
      status: "Concluído"
    },
    {
      title: "Certificação SEO Expert",
      institution: "Alura",
      period: "Abril 2017 - Julho 2017",
      status: "Concluído"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Experiência
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Minha jornada profissional e conquistas
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Experiência Profissional
          </h3>
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Building size={20} className="text-primary" />
                        <h4 className="text-xl font-bold text-foreground">
                          {exp.company}
                        </h4>
                        <Badge 
                          variant={exp.type === "Atual" ? "default" : "secondary"}
                          className={exp.type === "Atual" ? "bg-primary text-primary-foreground" : ""}
                        >
                          {exp.type}
                        </Badge>
                      </div>
                      <h5 className="text-lg font-semibold gradient-text mb-2">
                        {exp.position}
                      </h5>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h6 className="font-semibold mb-3 text-foreground">
                      Principais responsabilidades:
                    </h6>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1 flex-shrink-0">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h6 className="font-semibold mb-3 text-foreground">
                      Tecnologias utilizadas:
                    </h6>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
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

                  {/* Portfolio Section */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <h6 className="font-semibold text-foreground flex items-center gap-2">
                        <Image size={18} />
                        Portfólio de Trabalhos
                      </h6>
                      {exp.repositoryLink && (
                        <a
                          href={exp.repositoryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-primary hover:text-primary-hover transition-colors text-sm"
                        >
                          <ExternalLink size={16} />
                          Repositório
                        </a>
                      )}
                    </div>
                    
                    {exp.portfolioImages.length > 0 ? (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {exp.portfolioImages.map((image, imgIndex) => (
                          <div key={imgIndex} className="aspect-video bg-muted rounded-lg overflow-hidden border border-border">
                            <img 
                              src={image} 
                              alt={`Trabalho realizado na ${exp.company}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center py-8 border-2 border-dashed border-border rounded-lg bg-muted/30">
                        <div className="text-center">
                          <Upload size={32} className="mx-auto text-muted-foreground mb-2" />
                          <p className="text-sm text-muted-foreground">
                            Imagens do portfólio serão adicionadas em breve
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Certificações
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <h4 className="font-semibold text-foreground flex-1">
                      {cert.title}
                    </h4>
                    <Badge 
                      variant={cert.status === "Em andamento" ? "default" : "secondary"}
                      className={`shrink-0 ${cert.status === "Em andamento" ? "bg-primary text-primary-foreground" : ""}`}
                    >
                      {cert.status}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-2">
                    {cert.institution}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {cert.period}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;