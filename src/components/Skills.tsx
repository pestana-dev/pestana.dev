import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js", "Next.js"
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "API Rest", "Firebase"
      ]
    },
    {
      title: "Design & UX",
      icon: "🎨",
      skills: [
        "Figma", "Adobe XD", "Photoshop", "Illustrator", "InDesign", "CorelDraw"
      ]
    },
    {
      title: "DevOps & Ferramentas",
      icon: "🔧",
      skills: [
        "Git", "Docker", "CI/CD", "GCP", "Jest", "Postman", "SEO"
      ]
    },
    {
      title: "Soft Skills",
      icon: "🌟",
      skills: [
        "Liderança", "Product Owner", "UX Research", "Inglês", "Acessibilidade"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Habilidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que uso para criar experiências incríveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="gradient-text">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary-light text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: `${new Date().getFullYear() - 2016}+`, label: "Anos de Experiência" },
            { number: "15+", label: "Projetos Entregues" },
            { number: "2", label: "Empresas" },
            { number: "100%", label: "Dedicação" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;