import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Zap } from 'lucide-react';

const Skills = () => {
  const [visibleBars, setVisibleBars] = useState<Set<string>>(new Set());

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'Java', level: 90, proficiency: 'Proficient' },
        { name: 'JavaScript', level: 88, proficiency: 'Proficient' },
        { name: 'PHP', level: 75, proficiency: 'Intermediate' },
        { name: 'Kotlin', level: 80, proficiency: 'Intermediate' },
        { name: 'Python', level: 40, proficiency: 'Beginner' },
        { name: 'Dart', level: 35, proficiency: 'Beginner' },
        { name: 'Golang', level: 65, proficiency: 'Beginner' },
      ]
    },
    {
      title: 'Web Development',
      icon: '🌐',
      skills: [
        { name: 'MERN Stack', level: 85, proficiency: 'Proficient' },
        { name: 'SpringBoot', level: 80, proficiency: 'Intermediate' },
        { name: 'HTML/CSS', level: 92, proficiency: 'Expert' },
        { name: 'Tailwind CSS', level: 88, proficiency: 'Proficient' },
        { name: 'Bootstrap', level: 85, proficiency: 'Proficient' },
      ]
    },
    {
      title: 'Mobile Development',
      icon: '📱',
      skills: [
        { name: 'Android', level: 40, proficiency: 'Beginner' },
        { name: 'Flutter', level: 35, proficiency: 'Beginner' },
      ]
    },
    {
      title: 'Testing & DevOps',
      icon: '🔧',
      skills: [
        { name: 'Selenium', level: 75, proficiency: 'Intermediate' },
        { name: 'Cypress', level: 70, proficiency: 'Intermediate' },
        { name: 'Postman', level: 85, proficiency: 'Proficient' },
        { name: 'JUnit', level: 80, proficiency: 'Intermediate' },
        { name: 'Docker', level: 75, proficiency: 'Intermediate' },
        { name: 'Kubernetes', level: 65, proficiency: 'Beginner' },
        { name: 'Git/GitHub', level: 90, proficiency: 'Proficient' },
      ]
    },
    {
      title: 'Database Management',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', level: 85, proficiency: 'Proficient' },
        { name: 'PostgreSQL', level: 40, proficiency: 'Beginner' },
        { name: 'MongoDB', level: 82, proficiency: 'Proficient' },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryTitle = entry.target.getAttribute('data-category');
            if (categoryTitle) {
              setTimeout(() => {
                setVisibleBars(prev => new Set([...prev, categoryTitle]));
              }, 300);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillCards = document.querySelectorAll('[data-category]');
    skillCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert': return 'bg-green-500/20 text-green-600 border-green-500/30 hover:bg-green-400/30 hover:text-green-700 hover:border-green-400/50';
      case 'Proficient': return 'bg-orange-500/20 text-orange-600 border-orange-500/30 hover:bg-orange-400/30 hover:text-orange-700 hover:border-orange-400/50';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30 hover:bg-yellow-400/30 hover:text-yellow-700 hover:border-yellow-400/50';
      case 'Beginner': return 'bg-blue-500/20 text-blue-600 border-blue-500/30 hover:bg-blue-400/30 hover:text-blue-700 hover:border-blue-400/50';
      default: return 'bg-gray-500/20 text-gray-600 border-gray-500/30';
    }
  };

  const getCardGradient = (index: number) => {
    const gradients = [
      'from-white via-orange-50 to-white',
      'from-orange-50 via-white to-orange-50',
      'from-white via-orange-100 to-white',
      'from-orange-100 via-white to-orange-50',
      'from-white via-orange-50 to-orange-100'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <>
      <section id="skills" className="py-16 bg-gradient-to-b from-orange-100 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-50/40 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-orange-400"></div>
              <Code2 className="w-8 h-8 text-orange-500 mx-4" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 transition-all duration-500">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 transition-all duration-500"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise and proficiency levels across various technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex}
                data-category={category.title}
                className={`bg-gradient-to-br ${getCardGradient(categoryIndex)} border-orange-200 hover:border-orange-300 transition-all duration-700 transform hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/20 backdrop-blur-sm group overflow-hidden relative`}
                style={{
                  animationDelay: `${categoryIndex * 100}ms`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-100/0 via-orange-50/50 to-orange-100/0 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                <CardContent className="p-10 relative z-10">
                  <div className="flex items-center mb-8">
                    <span className="text-4xl mr-5 transition-all duration-500 group-hover:scale-125">{category.icon}</span>
                    <div>
                      <h3 className="text-2xl font-semibold text-black group-hover:text-gray-800 transition-colors duration-500">{category.title}</h3>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-transparent mt-2 group-hover:w-24 transition-all duration-500"></div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-3 group/skill">
                        <div className="flex items-center justify-between">
                          <span className="text-black font-medium group-hover/skill:text-gray-800 transition-colors duration-500 transform group-hover/skill:scale-105">{skill.name}</span>
                          <Badge 
                            variant="outline" 
                            className={`${getProficiencyColor(skill.proficiency)} border transition-all duration-500 transform group-hover/skill:scale-110`}
                          >
                            {skill.proficiency}
                          </Badge>
                        </div>
                        
                        <div className="skill-bar bg-orange-100 group-hover:bg-orange-200 transition-all duration-500 relative overflow-hidden h-3 rounded-full">
                          <div 
                            className={`h-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 rounded-full transition-all duration-1000 ease-out relative overflow-hidden group-hover:from-orange-600 group-hover:via-orange-500 group-hover:to-orange-700 ${
                              visibleBars.has(category.title) ? '' : 'w-0'
                            }`}
                            style={{
                              width: visibleBars.has(category.title) ? `${skill.level}%` : '0%',
                              transitionDelay: `${skillIndex * 100}ms`
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500"></div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <Zap className="w-3 h-3 text-orange-500 group-hover/skill:text-orange-600 transition-colors duration-300" />
                            <span className="text-xs text-gray-500 group-hover/skill:text-gray-600 transition-colors duration-300">Proficiency</span>
                          </div>
                          <span className="text-sm text-gray-600 group-hover/skill:text-gray-700 transition-colors duration-500 transform group-hover/skill:scale-110 inline-block font-medium">{skill.level}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="inline-flex items-center justify-center p-8 bg-gradient-to-r from-orange-50 to-white rounded-2xl border border-orange-200 backdrop-blur-sm">
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Continuous Learning</h3>
                <p className="text-gray-600 max-w-2xl">
                  I'm constantly expanding my skill set and staying updated with the latest technologies and industry best practices
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
      </section>

      <div className="h-8 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-96 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 bg-orange-400/60 rounded-full animate-pulse"></div>
        </div>
      </div>
    </>
  );
};

export default Skills;