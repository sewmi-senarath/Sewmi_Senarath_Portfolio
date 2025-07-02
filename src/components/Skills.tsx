import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
      case 'Expert': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Proficient': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Beginner': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              data-category={category.title}
              className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">{skill.name}</span>
                        <Badge 
                          variant="outline" 
                          className={`${getProficiencyColor(skill.proficiency)} border`}
                        >
                          {skill.proficiency}
                        </Badge>
                      </div>
                      
                      <div className="skill-bar">
                        <div 
                          className={`skill-progress ${
                            visibleBars.has(category.title) ? '' : 'w-0'
                          }`}
                          style={{
                            width: visibleBars.has(category.title) ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 100}ms`
                          }}
                        ></div>
                      </div>
                      
                      <div className="text-right">
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
