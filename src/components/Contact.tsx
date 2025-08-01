import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gabriela@pestana.dev.br",
      href: "mailto:gabriela@pestana.dev.br",
    },
    {
      icon: Phone,
      label: "Whatsapp",
      value: "(21) 98131-7590",
      href: "https://wa.me/5521981317590?text=Olá%20Gabriela,%20vi%20seu%20site%20e%20gostaria%20de%20conversar.",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Santos, São Paulo",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/pestana-dev",
      username: "pestana-dev",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pestana-dev",
      username: "pestana-dev",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberta a novas oportunidades e projetos interessantes.
            Entre em contato e vamos criar algo incrível juntos!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">
                  Informações de Contato
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                        <item.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">
                  Redes Sociais
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-primary-light/50 hover:bg-primary-light transition-colors group"
                    >
                      <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <social.icon
                          size={20}
                          className="text-primary group-hover:text-primary-foreground"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {social.label}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {social.username}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-card border-border shadow-elegant">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold gradient-text mb-4">
                  Pronta para o próximo desafio!
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Se você tem um projeto interessante ou está procurando uma
                  desenvolvedora apaixonada por criar experiências incríveis, eu
                  adoraria conversar com você.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary font-semibold px-8"
                  onClick={() =>
                    window.open("mailto:gabriela@pestana.dev.br", "_blank")
                  }
                >
                  <Mail size={20} className="mr-2" />
                  Enviar Email
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary-light font-semibold px-8"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/pestana-dev",
                      "_blank"
                    )
                  }
                >
                  <Linkedin size={20} className="mr-2" />
                  LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
