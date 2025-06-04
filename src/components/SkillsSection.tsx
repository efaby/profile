
import { useState, useEffect, useRef } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Angular', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 95 },
    { name: 'PHP', level: 80 },
    { name: 'Databases', level: 88 },
    { name: 'AWS/Cloud', level: 75 },
  ];

  const tools = [
    'Angular', 'Nest', 'Express', 'Node.js', 'PHP', 'PostgreSQL', 'Mysql', 
    'MongoDB', 'AWS', 'Docker', 'GitHub', 'Bootstrap CSS'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-background to-secondary/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Progress Bars */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Tools & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={tool}
                  className="glass-morphism border-white/10 p-4 rounded-lg text-center hover:glow transition-all duration-300"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isVisible ? 'fade-in-up 0.6s ease-out forwards' : 'none',
                    opacity: isVisible ? 1 : 0
                  }}
                >
                  <span className="font-medium">{tool}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 glass-morphism border-white/10 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">What I Bring</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Full-stack development from concept to deployment</li>
                <li>• Modern web technologies and best practices</li>
                <li>• Responsive design and accessibility focus</li>
                <li>• Performance optimization and SEO</li>
                <li>• Agile development and teamwork</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
