
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToLinkedin = () => {
    window.open('https://www.linkedin.com/in/fabian-villa-73175b28/', '_blank');
  };
  const goToGithub = () => {
    window.open('https://github.com/efaby', '_blank');
  };
  const goToMail = () => {
    window.location.href = 'mailto:efaby10@gmail.com';
  };
  const handleButtonClick = (action: () => void) => {
    action();
  };
  const handleLinkedinClick = () => handleButtonClick(goToLinkedin);
  const handleGithubClick = () => handleButtonClick(goToGithub);
  const handleMailClick = () => handleButtonClick(goToMail);

  return (
    <footer className="bg-secondary/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Fabian Villa</h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Developer passionate about creating amazing digital experiences.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="border-white/20 hover:bg-white/10" onClick={handleGithubClick}>
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-white/20 hover:bg-white/10"  onClick={handleLinkedinClick}>
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-white/20 hover:bg-white/10" onClick={handleMailClick}>
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Web Development</li>
              <li>API Design</li>
              <li>Consulting</li>
              <li>Code Review</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <span>© {currentYear} Fabian Villa.</span>
            </div>
            <Button 
              variant="ghost" 
              onClick={scrollToTop}
              className="mt-4 md:mt-0 hover:text-primary"
            >
              Back to Top ↑
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
