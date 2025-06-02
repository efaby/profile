
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Alex Johnson</h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Developer passionate about creating amazing digital experiences.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="border-white/20 hover:bg-white/10">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-white/20 hover:bg-white/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-white/20 hover:bg-white/10">
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
              <li>UI/UX Design</li>
              <li>Mobile Development</li>
              <li>Consulting</li>
              <li>Code Review</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <span>© {currentYear} Alex Johnson. Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>using React & Tailwind CSS</span>
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
