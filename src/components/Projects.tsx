import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, Users, Award } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [expandedTechnologies, setExpandedTechnologies] = useState<Set<number>>(new Set());

  const projects = [
    {
      id: 1,
      title: "Restaurant Management System",
      description: "Full-stack Cloud-Native Food Ordering & Delivery System using Microservices architecture",
      longDescription: "A comprehensive restaurant management solution with real-time ordering, delivery tracking, and payment processing. Built with scalable microservices architecture deployed on cloud infrastructure.",
      technologies: ["MERN Stack", "Docker", "Kubernetes", "Postman", "MongoDB", "Node.js"],
      features: ["Microservices Architecture", "Cloud-Native Design", "Real-time Updates", "Scalable Delivery System"],
      image: "/projects/restaurant.png", 
      github: "https://github.com/sewmi-senarath/Cloud-Native-FoodOrderSystem/tree/main/Restaurant_Management_Service",
      demo: "https://www.linkedin.com/posts/sewmi-senarath_microservices-fullstackdevelopment-foodtech-activity-7324169717353451521-L2BX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4BI5YB5zfLRGl9bAJKeVS3t08zKaZSdIs",
      category: "Full-Stack",
      status: "Completed",
      gradient: "from-orange-500 to-orange-600",
      cardGradient: "from-white via-orange-50 to-white"
    },
    {
      id: 2,
      title: "Employee Management System",
      description: "Led 8-member team to build full-stack WebApp for Tannoy Electrical Industries",
      longDescription: "A comprehensive employee management solution with role-based access control, real-time data synchronization, and advanced reporting capabilities. Successfully delivered to industry client.",
      technologies: ["MERN Stack", "Postman", "GitHub", "MySQL", "Express.js"],
      features: ["Team Leadership", "Client Requirements", "API Testing", "Real-time Data Management"],
      image: "/projects/employee.png",
      github: "https://github.com/sewmi-senarath/ITP_Project_Tannoy/tree/employee-manager",
      demo: "https://www.linkedin.com/posts/sewmi-senarath_mernstack-webdevelopment-employeemanagement-activity-7302375745438236673-6nov?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4BI5YB5zfLRGl9bAJKeVS3t08zKaZSdIs",
      category: "Full-Stack",
      status: "Leadership Project",
      gradient: "from-green-500 to-teal-600",
      cardGradient: "from-orange-50 via-white to-orange-50",
      isLeadership: true
    },
    {
      id: 3,
      title: "Task Manager Pro",
      description: "Advanced mobile task management application with offline support",
      longDescription: "A feature-rich mobile application for task management with offline capabilities, push notifications, and collaborative features. Built with modern Android development practices.",
      technologies: ["Kotlin", "Android SDK", "SQLite", "Material Design"],
      features: ["Offline Support", "Push Notifications", "Material Design", "Task Collaboration"],
      image: "/projects/task.png",
      github: "https://github.com/sewmi-senarath/Task-Manager-Pro",
      demo: "#",
      category: "Mobile",
      status: "Completed",
      gradient: "from-orange-500 to-red-600",
      cardGradient: "from-white via-orange-100 to-white"
    },
    {
      id: 4,
      title: "REST Countries Explorer",
      description: "Frontend Application using REST Countries API with advanced filtering",
      longDescription: "An interactive web application that displays country information with advanced search, filtering, and comparison features. Includes dark mode and responsive design.",
      technologies: ["React", "REST API", "CSS3", "JavaScript"],
      features: ["REST API Integration", "Advanced Filtering", "Dark Mode", "Responsive Design"],
      image: "/projects/country.png",
      github: "https://github.com/sewmi-senarath/countries-API",
      demo: "https://www.linkedin.com/posts/sewmi-senarath_react-javascript-frontenddevelopment-activity-7326922136772587520-wFvv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4BI5YB5zfLRGl9bAJKeVS3t08zKaZSdIs",
      category: "Frontend",
      status: "Completed",
      gradient: "from-indigo-500 to-blue-600",
      cardGradient: "from-orange-100 via-white to-orange-50"
    },
    {
      id: 5,
      title: "Book API Service",
      description: "RESTful API for Book Entity management with advanced features",
      longDescription: "A robust REST API service for book management with CRUD operations, authentication, and database optimization. Built with Go for high performance.",
      technologies: ["GoLang", "REST API", "PostgreSQL", "Docker"],
      features: ["CRUD Operations", "Authentication", "Database Optimization", "Docker Deployment"],
      image: "/projects/books.png",
      github: "https://github.com/sewmi-senarath/REST-API-for-Book-entity",
      demo: "#",
      category: "Backend",
      status: "Completed",
      gradient: "from-cyan-500 to-blue-600",
      cardGradient: "from-white via-orange-50 to-orange-100"
    },
    {
      id: 6,
      title: "Finance Tracker",
      description: "Personal finance management system with analytics and budgeting",
      longDescription: "A comprehensive personal finance application with expense tracking, budget management, and financial analytics. Features real-time charts and spending insights.",
      technologies: ["Express.js", "MongoDB", "Chart.js", "Node.js"],
      features: ["Expense Tracking", "Budget Management", "Financial Analytics", "Real-time Charts"],
      image: "/projects/finance.png",
      github: "https://github.com/sewmi-senarath/FinanceTrackerApp",
      demo: "#",
      category: "Full-Stack",
      status: "Completed",
      gradient: "from-emerald-500 to-green-600",
      cardGradient: "from-orange-50 via-white to-orange-50"
    }
  ];

  const categories = ["All", "Full-Stack", "Mobile", "Frontend", "Backend"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Function to handle external link clicks
  const handleLinkClick = (url: string) => {
    if (url !== "#") {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Function to toggle technology expansion
  const toggleTechnologies = (projectId: number) => {
    setExpandedTechnologies(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-orange-50 to-white transition-all duration-700 ease-in-out">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black transition-all duration-500">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 transition-all duration-500"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative solutions, from cloud-native systems to mobile applications. 
            Each project showcases technical expertise and creative problem-solving.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-500 transform hover:scale-110 ${
                  selectedCategory === category
                    ? "bg-black text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:bg-orange-500"
                    : "border-gray-400 text-gray-700 hover:border-orange-400 hover:text-orange-600 hover:bg-orange-50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group relative overflow-hidden bg-gradient-to-br ${project.cardGradient} border-orange-200 hover:border-orange-300 transition-all duration-700 hover:shadow-2xl hover:shadow-orange-500/20 transform hover:scale-110 backdrop-blur-sm ${
                hoveredProject === project.id ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/0 via-orange-50/50 to-orange-100/0 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative overflow-hidden">
                {/* Image display with fallback */}
                <div className="h-48 relative">
                  {project.image && project.image !== "/placeholder.svg" ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback to gradient if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  
                  {/* Fallback gradient (shown if no image or image fails) */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-all duration-700 ${
                      project.image && project.image !== "/placeholder.svg" ? 'hidden' : 'flex'
                    } items-center justify-center`}
                    style={{display: project.image && project.image !== "/placeholder.svg" ? 'none' : 'flex'}}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <div className="text-white/80 text-6xl font-bold group-hover:scale-110 transition-all duration-500 relative z-10">
                      {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-3 right-3 transform group-hover:scale-110 transition-all duration-500">
                  {project.isLeadership ? (
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-none hover:from-yellow-400 hover:to-orange-400 transition-all duration-300">
                      <Award className="w-3 h-3 mr-1" />
                      Leadership
                    </Badge>
                  ) : (
                    <Badge className="bg-green-500/90 text-white border-none hover:bg-green-400 transition-all duration-300">
                      {project.status}
                    </Badge>
                  )}
                </div>

                <div className="absolute top-3 left-3 transform group-hover:scale-110 transition-all duration-500">
                  <Badge variant="outline" className="border-white/30 text-white bg-black/30 backdrop-blur-sm hover:bg-black/50 hover:border-white/50 transition-all duration-300">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors duration-500 transform group-hover:scale-105">
                  {project.title}
                  {project.isLeadership && (
                    <Users className="inline w-4 h-4 ml-2 text-orange-500 group-hover:text-orange-600 group-hover:scale-125 transition-all duration-300" />
                  )}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {(expandedTechnologies.has(project.id) ? project.technologies : project.technologies.slice(0, 3)).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-orange-500/20 text-orange-600 border-orange-500/30 hover:scale-110 hover:bg-orange-400/30 hover:text-orange-700 hover:border-orange-400/50 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <button
                      onClick={() => toggleTechnologies(project.id)}
                      className="text-xs bg-gray-500/20 text-gray-600 border border-gray-500/30 hover:scale-110 transition-all duration-300 px-2 py-1 rounded-full hover:bg-orange-500/20 hover:text-orange-600 hover:border-orange-500/30"
                    >
                      {expandedTechnologies.has(project.id) 
                        ? 'Show Less' 
                        : `+${project.technologies.length - 3}`
                      }
                    </button>
                  )}
                </div>

                {/* Key Features Section - Show ALL features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2 group-hover:text-gray-800 transition-colors duration-300">Key Features:</h4>
                  <ul className="text-xs text-gray-600 space-y-1 group-hover:text-gray-700 transition-colors duration-300">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center group/feature">
                        <Star className="w-3 h-3 mr-2 text-orange-500 fill-current group-hover/feature:text-orange-600 group-hover/feature:scale-125 transition-all duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Working click handlers */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleLinkClick(project.github)}
                    disabled={project.github === "#"}
                    className="flex-1 border-gray-400 text-gray-700 hover:border-orange-400 hover:text-orange-600 hover:bg-orange-50 transition-all duration-500 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => handleLinkClick(project.demo)}
                    disabled={project.demo === "#"}
                    className="flex-1 bg-black text-white hover:bg-orange-500 border-none transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </Button>
                </div>
              </CardContent>

              <div className="absolute inset-0 bg-gradient-to-t from-orange-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-200 backdrop-blur-sm transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/20 group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100/0 via-orange-50/50 to-orange-100/0 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors duration-500">
                Looking for Software Engineering Internship Opportunities
              </h3>
              <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-500">
                Ready to contribute to innovative projects and grow with your team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;