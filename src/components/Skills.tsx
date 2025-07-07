import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Code2, Search, Filter, TrendingUp, Folder, Star, Award, Target } from 'lucide-react';

const Skills = () => {
  const [visibleBars, setVisibleBars] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'Java', level: 90, proficiency: 'Expert', trending: true, description: 'Enterprise applications, Spring ecosystem, microservices architecture' },
        { name: 'JavaScript', level: 88, proficiency: 'Expert', trending: true, description: 'ES6+, TypeScript, Node.js, React, Vue.js' },
        { name: 'PHP', level: 75, proficiency: 'Proficient', trending: false, description: 'Laravel, Symfony, REST APIs, web development' },
        { name: 'Kotlin', level: 80, proficiency: 'Proficient', trending: true, description: 'Android development, coroutines, modern syntax' },
        { name: 'Python', level: 40, proficiency: 'Intermediate', trending: true, description: 'Data analysis, automation, Django basics' },
        { name: 'Dart', level: 35, proficiency: 'Beginner', trending: true, description: 'Flutter development, cross-platform mobile apps' },
        { name: 'Golang', level: 65, proficiency: 'Intermediate', trending: true, description: 'Microservices, concurrent programming, REST APIs' },
      ]
    },
    {
      title: 'Web Development',
      icon: '🌐',
      skills: [
        { name: 'MERN Stack', level: 85, proficiency: 'Expert', trending: true, description: 'MongoDB, Express, React, Node.js full-stack development' },
        { name: 'SpringBoot', level: 80, proficiency: 'Proficient', trending: true, description: 'REST APIs, microservices, Spring Security, JPA' },
        { name: 'HTML/CSS', level: 92, proficiency: 'Expert', trending: false, description: 'Semantic HTML, CSS Grid/Flexbox, responsive design' },
        { name: 'Tailwind CSS', level: 88, proficiency: 'Expert', trending: true, description: 'Utility-first CSS, component design, dark mode' },
        { name: 'Bootstrap', level: 85, proficiency: 'Proficient', trending: false, description: 'Responsive frameworks, component library' },
      ]
    },
    {
      title: 'Mobile Development',
      icon: '📱',
      skills: [
        { name: 'Android', level: 40, proficiency: 'Intermediate', trending: true, description: 'Native Android, Kotlin, Material Design' },
        { name: 'Flutter', level: 35, proficiency: 'Beginner', trending: true, description: 'Cross-platform development, Dart, widget system' },
      ]
    },
    {
      title: 'Testing & DevOps',
      icon: '🔧',
      skills: [
        { name: 'Selenium', level: 75, proficiency: 'Proficient', trending: false, description: 'Web automation, test frameworks, CI/CD integration' },
        { name: 'Cypress', level: 70, proficiency: 'Proficient', trending: true, description: 'E2E testing, modern test automation, debugging' },
        { name: 'Postman', level: 85, proficiency: 'Expert', trending: false, description: 'API testing, collection management, automation' },
        { name: 'JUnit', level: 80, proficiency: 'Proficient', trending: false, description: 'Unit testing, test-driven development, mocking' },
        { name: 'Docker', level: 75, proficiency: 'Proficient', trending: true, description: 'Containerization, multi-stage builds, orchestration' },
        { name: 'Kubernetes', level: 65, proficiency: 'Intermediate', trending: true, description: 'Container orchestration, deployments, services' },
        { name: 'Git/GitHub', level: 90, proficiency: 'Expert', trending: false, description: 'Version control, branching strategies, collaboration' },
      ]
    },
    {
      title: 'Database Management',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', level: 85, proficiency: 'Expert', trending: false, description: 'Relational databases, query optimization, indexing' },
        { name: 'PostgreSQL', level: 40, proficiency: 'Beginner', trending: true, description: 'Advanced SQL, JSON support, performance tuning' },
        { name: 'MongoDB', level: 82, proficiency: 'Proficient', trending: true, description: 'NoSQL, aggregation pipelines, schema design' },
      ]
    }
  ];

  const categories = ['All', ...skillCategories.map(cat => cat.title)];

  // Intersection observer for animations
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
      { threshold: 0.2 }
    );

    const skillCards = document.querySelectorAll('[data-category]');
    skillCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const getProficiencyConfig = (proficiency) => {
    const configs = {
      'Expert': { 
        color: 'bg-emerald-500/20 text-emerald-700 border-emerald-500/30 hover:bg-emerald-400/30', 
        icon: <Award className="w-3 h-3" />,
        gradient: 'from-emerald-400 to-emerald-600'
      },
      'Proficient': { 
        color: 'bg-orange-500/20 text-orange-700 border-orange-500/30 hover:bg-orange-400/30', 
        icon: <Target className="w-3 h-3" />,
        gradient: 'from-orange-400 to-orange-600'
      },
      'Intermediate': { 
        color: 'bg-yellow-500/20 text-yellow-700 border-yellow-500/30 hover:bg-yellow-400/30', 
        icon: <TrendingUp className="w-3 h-3" />,
        gradient: 'from-yellow-400 to-yellow-600'
      },
      'Beginner': { 
        color: 'bg-blue-500/20 text-blue-700 border-blue-500/30 hover:bg-blue-400/30', 
        icon: <Star className="w-3 h-3" />,
        gradient: 'from-blue-400 to-blue-600'
      }
    };
    return configs[proficiency] || configs['Beginner'];
  };

  const filteredCategories = skillCategories.filter(category => 
    selectedCategory === 'All' || category.title === selectedCategory
  ).map(category => ({
    ...category,
    skills: category.skills.filter(skill =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.skills.length > 0);

  const totalSkills = skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0);
  const averageLevel = Math.round(
    skillCategories.reduce((sum, cat) => 
      sum + cat.skills.reduce((skillSum, skill) => skillSum + skill.level, 0), 0
    ) / totalSkills
  );

  return (
    <section 
      id="skills" 
      className="py-12 sm:py-20 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden"
    >
      {/* Background elements - Mobile responsive */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-32 sm:w-64 h-32 sm:h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 sm:w-80 h-48 sm:h-80 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-orange-50/40 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Mobile responsive */}
        <div className="text-center mb-8 sm:mb-16">
          <div className="inline-flex items-center justify-center mb-4 sm:mb-8">
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-orange-400"></div>
            <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mx-4" />
            <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-orange-400"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 transition-all duration-500">
            Technical Skills
          </h2>
          
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-4 sm:mb-8 transition-all duration-500"></div>

          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-8 px-4">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies
          </p>

          {/* Search and Filter - Mobile responsive */}
          <div className="space-y-4 max-w-2xl mx-auto px-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 sm:pl-10 bg-white border-orange-200 rounded-xl text-sm sm:text-base"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide-mobile">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap transition-all duration-300 text-xs sm:text-sm px-3 py-2 flex-shrink-0 ${
                    selectedCategory === category
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg'
                      : 'bg-white border-orange-200 hover:bg-orange-50'
                  }`}
                >
                  <Filter className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid - Mobile-first layout */}
        <div className="space-y-6 sm:space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
          {filteredCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              data-category={category.title}
              className="group relative overflow-hidden bg-white border-orange-200 hover:border-orange-300 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/20 transform hover:scale-105 shadow-lg"
              style={{
                animationDelay: `${categoryIndex * 150}ms`
              }}
            >
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100/0 via-orange-50/50 to-orange-100/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10">
                {/* Category Header - Mobile responsive */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-8 gap-2">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-lg group-hover:scale-110 transition-all duration-500 flex-shrink-0">
                      <span className="text-lg sm:text-2xl filter drop-shadow-sm">{category.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl font-bold text-gray-900 transition-colors duration-500">
                        {category.title}
                      </h3>
                      <div className="h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-1 w-6 sm:w-8 group-hover:w-12 sm:group-hover:w-16 transition-all duration-500" />
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-orange-50 border-orange-200 text-orange-600 text-xs sm:text-sm w-fit">
                    {category.skills.length} skills
                  </Badge>
                </div>

                {/* Skills List - Mobile responsive */}
                <div className="space-y-4 sm:space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const proficiencyConfig = getProficiencyConfig(skill.proficiency);
                    
                    return (
                      <div 
                        key={skillIndex} 
                        className="group/skill cursor-pointer"
                        onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {/* Skill Header - Mobile layout */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            <span className="font-semibold text-sm sm:text-base text-gray-900 group-hover/skill:text-orange-600 transition-colors duration-300 truncate">
                              {skill.name}
                            </span>
                            {skill.trending && (
                              <div className="flex items-center gap-1 px-2 py-0.5 bg-green-500 rounded-full flex-shrink-0">
                                <TrendingUp className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" />
                                <span className="text-xs text-white font-medium">Hot</span>
                              </div>
                            )}
                          </div>
                          <Badge 
                            variant="outline" 
                            className={`${proficiencyConfig.color} border transition-all duration-500 transform group-hover/skill:scale-105 flex items-center gap-1 flex-shrink-0 text-xs`}
                          >
                            {proficiencyConfig.icon}
                            <span className="hidden sm:inline">{skill.proficiency}</span>
                            <span className="sm:hidden">{skill.proficiency.slice(0, 3)}</span>
                          </Badge>
                        </div>

                        {/* Percentage and Progress Bar */}
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs text-gray-500">Level</span>
                          <span className="text-sm font-bold text-orange-600 group-hover/skill:text-orange-700 transition-colors duration-300">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="relative mb-3">
                          <div className="h-2 sm:h-2.5 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                            <div 
                              className={`h-full bg-gradient-to-r ${proficiencyConfig.gradient} rounded-full transition-all duration-1000 ease-out relative overflow-hidden group-hover/skill:shadow-lg`}
                              style={{
                                width: visibleBars.has(category.title) ? `${skill.level}%` : '0%',
                                transitionDelay: `${skillIndex * 100}ms`
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover/skill:translate-x-[100%] transition-transform duration-1000" />
                            </div>
                          </div>
                        </div>

                        {/* Description - Mobile responsive */}
                        {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                          <div className="mt-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500 animate-fade-in">
                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA - Mobile responsive */}
        <div className="mt-12 sm:mt-20 text-center px-4">
          <div className="inline-flex items-center justify-center p-4 sm:p-8 bg-white rounded-2xl border border-orange-200 shadow-xl hover:scale-105 transition-all duration-500 group max-w-2xl w-full">
            <div className="text-center">
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors duration-500">
                Continuous Learning & Innovation
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Staying at the forefront of technology through continuous learning, experimentation, 
                and contributing to open-source projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;