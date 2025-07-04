import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/public/cv/Sewmi_Senarath_Resume.pdf';
    link.download = 'Sewmi_Senarath_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-orange-200 shadow-lg shadow-orange-500/10' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name - Madison Style */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black hover:text-orange-500 transition-all duration-500 cursor-pointer">
              Sewmi Senarath
            </h1>
          </div>

          {/* Desktop Navigation - Madison Style */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-gray-700 hover:text-black px-3 py-2 text-base font-medium transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>
            
            {/* Madison-inspired CV Button */}
            <Button 
              variant="outline" 
              size="default"
              onClick={handleDownloadCV}
              className="bg-black text-white hover:bg-orange-500 hover:text-white border-black hover:border-orange-500 transition-all duration-300 font-medium px-5 py-2.5 text-base shadow-md hover:shadow-orange-500/25 rounded-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-black hover:bg-orange-100 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Madison Style */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-4 pt-2 pb-4 space-y-2 bg-white/98 backdrop-blur-md rounded-b-lg border-b border-orange-200 shadow-xl">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-black hover:bg-orange-100 block px-4 py-3 text-lg font-medium w-full text-left transition-all duration-300 rounded-lg"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2 border-t border-orange-200">
                <Button 
                  variant="outline" 
                  size="default"
                  onClick={handleDownloadCV}
                  className="w-full bg-black text-white hover:bg-orange-500 hover:text-white border-black hover:border-orange-500 transition-all duration-300 font-medium text-base rounded-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;