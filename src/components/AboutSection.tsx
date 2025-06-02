
import { Code, Palette, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful user interfaces with attention to detail and user experience.'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and performance across all devices.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions
            that combine functionality with beautiful design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground">
              Started as a curious student learning HTML and CSS, I've evolved into a full-stack 
              developer with expertise in modern frameworks and technologies. I believe in the 
              power of technology to solve real-world problems and create meaningful experiences.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you'll find me exploring new design trends, contributing to 
              open-source projects, or mentoring aspiring developers in the community.
            </p>
            <div className="flex space-x-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-lg flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-morphism border-white/10 hover:glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
