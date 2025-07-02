
import { GraduationCap, User, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const softSkills = [
    { name: 'Leadership', icon: '👑', description: 'Led 8-member development team' },
    { name: 'Work Management', icon: '📊', description: 'Project coordination & delivery' },
    { name: 'Risk Taking', icon: '🎯', description: 'Innovation-driven approach' },
    { name: 'Communication', icon: '💬', description: 'Clear & effective interaction' },
    { name: 'Teamwork', icon: '🤝', description: 'Collaborative problem solving' },
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
    {
      institution: 'Viharamahadevi Balika Vidyalaya-Kiribathgoda',
      degree: 'Ordinary Level',
      specialization: '',
      period: '2018',
      status: 'Completed'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <User className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-semibold text-white">Personal Bio</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I am a Software Engineering undergraduate passionate about designing and developing innovative solutions. 
                  I am seeking an entry-level position to leverage technical skills to deliver efficient, scalable results. 
                  I am a collaborative team player with proven ability to multitask, delivering high quality results under pressure.
                </p>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <div className="w-6 h-6 text-purple-400 mr-3">⭐</div>
                  Soft Skills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors duration-300"
                    >
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <div>
                        <div className="font-semibold text-white">{skill.name}</div>
                        <div className="text-sm text-gray-400">{skill.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Timeline */}
          <div>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <GraduationCap className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-2xl font-semibold text-white">Education Timeline</h3>
                </div>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative">
                      {/* Timeline line */}
                      {index !== education.length - 1 && (
                        <div className="absolute left-4 top-12 w-px h-16 bg-gradient-to-b from-blue-400 to-transparent"></div>
                      )}
                      
                      <div className="flex items-start space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          edu.status === 'Current' 
                            ? 'bg-blue-500 animate-pulse' 
                            : 'bg-green-500'
                        }`}>
                          {edu.status === 'Current' ? (
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          ) : (
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <div className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700 transition-colors duration-300">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-white text-lg">{edu.institution}</h4>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                edu.status === 'Current' 
                                  ? 'bg-blue-500/20 text-blue-300' 
                                  : 'bg-green-500/20 text-green-300'
                              }`}>
                                {edu.status}
                              </span>
                            </div>
                            <p className="text-blue-400 font-medium">{edu.degree}</p>
                            {edu.specialization && (
                              <p className="text-gray-400 text-sm">Specializing in {edu.specialization}</p>
                            )}
                            <div className="flex items-center mt-3 text-gray-400 text-sm">
                              <Calendar className="w-4 h-4 mr-2" />
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
    </section>
  );
};

export default About;
