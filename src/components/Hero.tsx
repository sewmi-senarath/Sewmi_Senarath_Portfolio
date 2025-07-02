
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, ExternalLink, Sparkles } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const texts = [
    'Software Engineering Student',
    'Full-Stack Developer',
    'Innovation Enthusiast',
    'Team Leader'
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    if (displayText.length < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [displayText, currentIndex, texts]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // This will be implemented with actual CV file
    console.log('Download CV clicked');
    // You can replace this with actual file download logic
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Animated Background Elements with improved animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-indigo-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Enhanced Profile Image with your photo */}
          <div className="mb-8 animate-scale-in">
            <div className="w-56 h-56 mx-auto rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 p-1.5 shadow-2xl animate-glow-pulse">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="https://i.postimg.cc/WbZZkPws/me.jpg" 
                  alt="Sewmi Methsadi Senarath"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Enhanced Main Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-blue-400 mr-2 animate-pulse" />
              <span className="text-blue-400 font-medium tracking-wide uppercase text-sm">Portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              <span className="block">Sewmi Methsadi</span>
              <span className="block bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                Senarath
              </span>
            </h1>
            
            <div className="h-20 mb-8">
              <p className="text-2xl md:text-3xl text-gray-300 font-light">
                <span className="text-blue-400 font-mono">|</span> {displayText}
                <span className="animate-pulse text-blue-400 font-mono">|</span>
              </p>
            </div>

            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              Passionate about designing and developing 
              <span className="text-blue-400 font-medium"> innovative solutions</span>
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Button 
              onClick={() => scrollToSection('#contact')}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/25 rounded-xl"
            >
              <ExternalLink className="w-5 h-5 mr-3" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleDownloadCV}
              className="border-2 border-blue-400/50 text-blue-400 hover:bg-blue-400 hover:text-white px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10 rounded-xl"
            >
              <Github className="w-5 h-5 mr-3" />
              Download CV
            </Button>
          </div>

          {/* Enhanced Stats with better animations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="text-4xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">6+</div>
              <div className="text-gray-300 font-medium">Projects Completed</div>
            </div>
            <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="text-4xl font-bold text-purple-400 mb-3 group-hover:text-purple-300 transition-colors">15+</div>
              <div className="text-gray-300 font-medium">Technologies Mastered</div>
            </div>
            <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="text-4xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors">8</div>
              <div className="text-gray-300 font-medium">Team Members Led</div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('#about')}
            className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-white/10"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
