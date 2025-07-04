import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, ExternalLink, Sparkles, Download } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const texts = [
    'Software Engineering Undergraduate',
    'Full-Stack Developer',
    'Innovation Enthusiast',
    'DevOps Enthusiast'
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
    const link = document.createElement('a');
    link.href = '/cv/Sewmi_Senarath_Resume.pdf';
    link.download = 'Sewmi_Senarath_Resume.pdf';
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('CV download initiated');
  };

  const statsData = [
    { 
      number: '6+', 
      label: 'Projects Completed', 
      color: 'text-orange-500 group-hover:text-orange-600', 
      gradient: 'from-orange-50 via-white to-orange-50',
      hoverGradient: 'group-hover:from-orange-100 group-hover:via-orange-50 group-hover:to-orange-100'
    },
    { 
      number: '15+', 
      label: 'Technologies Mastered', 
      color: 'text-orange-600 group-hover:text-orange-700', 
      gradient: 'from-white via-orange-50 to-white',
      hoverGradient: 'group-hover:from-orange-50 group-hover:via-orange-100 group-hover:to-orange-50'
    },
    { 
      number: '8', 
      label: 'Team Members Led', 
      color: 'text-orange-500 group-hover:text-orange-600', 
      gradient: 'from-orange-50 via-white to-orange-100',
      hoverGradient: 'group-hover:from-orange-100 group-hover:via-white group-hover:to-orange-100'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 mb-4">
      {/* Madison-inspired Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100"></div>
      
      {/* Subtle Background Elements - Warm theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-orange-50/50 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-orange-200/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-orange-100/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Enhanced Profile Image with Orange Border */}
          <div className="mb-8 animate-scale-in">
            <div className="w-60 h-60 mx-auto rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 p-1.5 shadow-2xl animate-glow-pulse">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="https://i.postimg.cc/WbZZkPws/me.jpg" 
                  alt="Sewmi Methsadi Senarath"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Enhanced Main Content with Black Text */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-orange-500 mr-2 animate-pulse" />
              <span className="text-orange-600 font-medium tracking-wide uppercase text-sm">Portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-8 leading-tight">
              <span className="block">Sewmi Methsadi Senarath</span>
            </h1>
            
            <div className="h-20 mb-8">
              <p className="text-2xl md:text-3xl text-gray-700 font-light">
                <span className="text-orange-500 font-mono">|</span> {displayText}
                <span className="animate-pulse text-orange-500 font-mono">|</span>
              </p>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              Passionate about designing and developing 
              <span className="text-orange-500 font-medium"> innovative solutions</span>
            </p>
          </div>

          {/* Madison-inspired CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Button 
              onClick={() => scrollToSection('#contact')}
              size="lg"
              className="bg-black text-white hover:bg-orange-500 hover:text-white px-10 py-6 text-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 rounded-xl"
            >
              <ExternalLink className="w-5 h-5 mr-3" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleDownloadCV}
              className="border-2 border-black text-black hover:bg-black hover:text-white px-10 py-6 text-lg font-semibold transition-all duration-500 transform hover:scale-105 backdrop-blur-sm bg-white/80 rounded-xl"
            >
              <Download className="w-5 h-5 mr-3" />
              Download CV
            </Button>
          </div>

          {/* Enhanced Stats - No Rotation/Blur */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            {statsData.map((stat, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${stat.gradient} ${stat.hoverGradient} backdrop-blur-sm border-2 border-orange-200 hover:border-orange-300 rounded-xl shadow-lg hover:shadow-orange-500/20 p-8 text-center group transition-all duration-700 transform hover:scale-110 hover:shadow-2xl overflow-hidden relative`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Subtle animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-100/0 via-orange-50/50 to-orange-100/0 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                {/* Animated shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-200/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <div className={`text-4xl font-bold ${stat.color} mb-3 transition-all duration-500 transform group-hover:scale-125`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-medium group-hover:text-gray-800 transition-colors duration-500">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('#about')}
            className="text-gray-600 hover:text-orange-500 transition-all duration-500 hover:scale-110 p-2 rounded-full hover:bg-orange-100"
          >
            <ArrowDown className="w-6 h-15" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;