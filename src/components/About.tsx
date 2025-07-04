import { GraduationCap, User, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const softSkills = [
    { name: 'Leadership', icon: '👑', description: 'Guided and motivated a team to success' },
    { name: 'Adaptability', icon: '🪴', description: 'Open to learning new technologies, methods, and tools' },
    { name: 'Time and Work Management', icon: '📊', description: 'Planned and executed tasks efficiently' },
    { name: 'Risk Taking', icon: '🎯', description: 'Embraced challenges to drive innovation' },
    { name: 'Communication', icon: '💬', description: 'Clear and confident in expressing ideas' },
    { name: 'Teamwork', icon: '🤝', description: 'Worked well with others to reach goals' },
  ];

  const education = [
    {
      institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
      degree: 'BSc (Hons) in Information Technology',
      specialization: 'Software Engineering',
      period: 'Oct 2022 - Present',
      status: 'Current'
    },
    {
      institution: 'Viharamahadevi Balika Vidyalaya-Kiribathgoda',
      degree: 'Advanced Level',
      specialization: 'Bio Science',
      period: '2022',
      status: 'Completed'
    },
  ];

  return (
    <>
      <section id="about" className="py-16 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-orange-400"></div>
              <User className="w-8 h-8 text-orange-500 mx-4" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 transition-all duration-500">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 transition-all duration-500"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Get to know more about my background, skills, and educational journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10 transform transition-all duration-700">
              <Card className="bg-gradient-to-br from-white via-orange-50 to-white border-orange-200 hover:border-orange-300 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 backdrop-blur-sm group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-100/0 via-orange-50/50 to-orange-100/0 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                <CardContent className="p-10 relative z-10">
                  <div className="flex items-center mb-8">
                    <User className="w-7 h-7 text-orange-500 mr-4 group-hover:text-orange-600 transition-colors duration-500 group-hover:scale-110 transform" />
                    <h3 className="text-2xl font-semibold text-black group-hover:text-gray-800 transition-colors duration-500">Personal Bio</h3>
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed text-lg transition-all duration-500 group-hover:text-gray-800">
                    As a driven Software Engineering undergraduate, I thrive on turning complex problems into simple, scalable solutions. 
                    With hands-on experience in full-stack development and a strong foundation in modern tech stacks, I bring both creativity 
                    and precision to every project. Known for my adaptability, leadership, and clear communication, I excel in collaborative 
                    environments and consistently deliver high-quality results under pressure.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 via-white to-orange-50 border-orange-200 hover:border-orange-300 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 backdrop-blur-sm group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-l from-orange-100/0 via-orange-50/50 to-orange-100/0 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                <CardContent className="p-10 relative z-10">
                  <h3 className="text-2xl font-semibold text-black mb-8 flex items-center group-hover:text-gray-800 transition-colors duration-500">
                    <div className="w-7 h-7 text-orange-500 mr-4 group-hover:text-yellow-500 transition-colors duration-500 group-hover:scale-125 transform">⭐</div>
                    Soft Skills
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {softSkills.map((skill, index) => (
                      <div 
                        key={index}
                        className="flex items-center p-5 bg-white/80 hover:bg-orange-100/50 rounded-lg transition-all duration-500 transform hover:scale-110 hover:shadow-lg hover:shadow-orange-500/10 group/skill border border-orange-200 hover:border-orange-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span className="text-2xl mr-4 group-hover/skill:scale-125 transition-transform duration-300">{skill.icon}</span>
                        <div>
                          <div className="font-semibold text-black group-hover/skill:text-gray-800 transition-colors duration-300">{skill.name}</div>
                          <div className="text-sm text-gray-600 group-hover/skill:text-gray-700 transition-colors duration-300">{skill.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="transform transition-all duration-700">
              <Card className="bg-gradient-to-tl from-white via-orange-50 to-white border-orange-200 hover:border-orange-300 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 backdrop-blur-sm group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/0 via-orange-50/50 to-orange-100/0 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                <CardContent className="p-10 relative z-10">
                  <div className="flex items-center mb-10">
                    <GraduationCap className="w-7 h-7 text-orange-500 mr-4 group-hover:text-orange-600 transition-colors duration-500 group-hover:scale-110 transform" />
                    <h3 className="text-2xl font-semibold text-black group-hover:text-gray-800 transition-colors duration-500">Education Timeline</h3>
                  </div>
                  
                  <div className="space-y-8">
                    {education.map((edu, index) => (
                      <div key={index} className="relative group/timeline">
                        {index !== education.length - 1 && (
                          <div className="absolute left-4 top-12 w-px h-20 bg-gradient-to-b from-orange-400 to-transparent group-hover:from-orange-500 transition-all duration-500"></div>
                        )}
                        
                        <div className="flex items-start space-x-6">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-700 transform group-hover/timeline:scale-125 ${
                            edu.status === 'Current' 
                              ? 'bg-orange-500 animate-pulse group-hover:bg-orange-600' 
                              : 'bg-green-500 group-hover:bg-green-600'
                          }`}>
                            <div className="w-3 h-3 bg-white rounded-full group-hover/timeline:bg-gray-100 transition-colors duration-300"></div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="bg-gradient-to-r from-white to-orange-50 hover:from-orange-50 hover:to-white p-8 rounded-lg transition-all duration-700 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10 border border-orange-200 hover:border-orange-300 group/edu">
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="font-semibold text-black text-lg group-hover/edu:text-gray-800 transition-colors duration-300">{edu.institution}</h4>
                                <span className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-500 transform group-hover/edu:scale-110 ${
                                  edu.status === 'Current' 
                                    ? 'bg-orange-500/20 text-orange-600 group-hover/edu:bg-orange-500/30 group-hover/edu:text-orange-700' 
                                    : 'bg-green-500/20 text-green-600 group-hover/edu:bg-green-500/30 group-hover/edu:text-green-700'
                                }`}>
                                  {edu.status}
                                </span>
                              </div>
                              <p className="text-orange-600 font-medium group-hover/edu:text-orange-700 transition-colors duration-300 mb-2">{edu.degree}</p>
                              {edu.specialization && (
                                <p className="text-gray-600 text-sm group-hover/edu:text-gray-700 transition-colors duration-300 mb-3">Specializing in {edu.specialization}</p>
                              )}
                              <div className="flex items-center text-gray-600 text-sm group-hover/edu:text-gray-700 transition-colors duration-300">
                                <Calendar className="w-4 h-4 mr-2 group-hover/edu:text-orange-500 transition-colors duration-300" />
                                {edu.period}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
      </section>

      <div className="h-8 bg-gradient-to-b from-orange-50 to-orange-100 relative overflow-hidden">
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

export default About;