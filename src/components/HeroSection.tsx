import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
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
  
  const handleDownloadCV = () => {
    window.open('FabianVillaCV.pdf', '_blank');
  };


  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-white/15 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="text-center text-white z-10 px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Fabian Villa
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
            I create beautiful, functional, and user-centered digital experiences.
            Passionate about clean code and innovative design solutions.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12 animate-slide-in-left">
          <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20" onClick={handleGithubClick}>
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20" onClick={handleLinkedinClick}>
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20" onClick={handleMailClick}>
            <Mail className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex justify-center space-x-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Button 
            onClick={scrollToAbout}
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg"
          >
            View My Work
          </Button>
          <Button 
          onClick={handleDownloadCV}
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg"
          >
            Download CV
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
