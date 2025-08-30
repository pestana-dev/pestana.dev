import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

const GitHubRepos = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/pestana-dev/repos?sort=updated&per_page=6"
        );
        const data = await response.json();
        setRepos(
          data.filter((repo: GitHubRepo) => !repo.name.includes("pestana-dev"))
        );
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: "bg-yellow-500",
      TypeScript: "bg-blue-500",
      Python: "bg-green-500",
      Java: "bg-red-500",
      "C#": "bg-purple-500",
      CSS: "bg-pink-500",
      HTML: "bg-orange-500",
      React: "bg-cyan-500",
    };
    return colors[language] || "bg-gray-500";
  };

  if (loading) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Repositórios GitHub
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Carregando repositórios...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Repositórios GitHub
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore meus projetos open source e contribuições no GitHub
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {repos.map((repo) => (
            <Card
              key={repo.id}
              className="bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-foreground truncate">
                    {repo.name}
                  </h3>
                  <Github
                    size={20}
                    className="text-muted-foreground flex-shrink-0"
                  />
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                  {repo.description || "Sem descrição disponível"}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  {repo.language && (
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${getLanguageColor(
                          repo.language
                        )}`}
                      ></div>
                      <span>{repo.language}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-1">
                    <Star size={14} />
                    <span>{repo.stargazers_count}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <GitFork size={14} />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>

                {repo.topics && repo.topics.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {repo.topics.slice(0, 3).map((topic, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs border-primary/20 text-primary hover:bg-primary-light"
                        >
                          {topic}
                        </Badge>
                      ))}
                      {repo.topics.length > 3 && (
                        <Badge
                          variant="outline"
                          className="text-xs border-muted text-muted-foreground"
                        >
                          +{repo.topics.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-border">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Ver no GitHub
                      <ExternalLink size={14} />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <a
              href="https://github.com/pestana-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Ver todos os repositórios
              <ExternalLink size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GitHubRepos;
