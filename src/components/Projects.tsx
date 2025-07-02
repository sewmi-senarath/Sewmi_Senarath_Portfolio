
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, Users, Award } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Restaurant Management System",
      description: "Full-stack Cloud-Native Food Ordering & Delivery System using Microservices architecture",
      longDescription: "A comprehensive restaurant management solution with real-time ordering, delivery tracking, and payment processing. Built with scalable microservices architecture deployed on cloud infrastructure.",
      technologies: ["MERN Stack", "Docker", "Kubernetes", "Postman", "MongoDB", "Node.js"],
      features: ["Microservices Architecture", "Cloud-Native Design", "Real-time Updates", "Scalable Delivery System"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
      category: "Full-Stack",
      status: "Completed",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Employee Management System",
      description: "Led 8-member team to build full-stack WebApp for Tannoy Electrical Industries",
      longDescription: "A comprehensive employee management solution with role-based access control, real-time data synchronization, and advanced reporting capabilities. Successfully delivered to industry client.",
      technologies: ["MERN Stack", "Postman", "GitHub", "MySQL", "Express.js"],
      features: ["Team Leadership", "Client Requirements", "API Testing", "Real-time Data Management"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
      category: "Full-Stack",
      status: "Leadership Project",
      gradient: "from-green-500 to-teal-600",
      isLeadership: true
    },
    {
      id: 3,
      title: "Task Manager Pro",
      description: "Advanced mobile task management application with offline support",
      longDescription: "A feature-rich mobile application for task management with offline capabilities, push notifications, and collaborative features. Built with modern Android development practices.",
      technologies: ["Kotlin", "Android SDK", "SQLite", "Material Design"],
      features: ["Offline Support", "Push Notifications", "Material Design", "Task Collaboration"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
      category: "Mobile",
      status: "Completed",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      title: "REST Countries Explorer",
      description: "Frontend Application using REST Countries API with advanced filtering",
      longDescription: "An interactive web application that displays country information with advanced search, filtering, and comparison features. Includes dark mode and responsive design.",
      technologies: ["React", "REST API", "CSS3", "JavaScript"],
      features: ["REST API Integration", "Advanced Filtering", "Dark Mode", "Responsive Design"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
      category: "Frontend",
      status: "Completed",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      id: 5,
      title: "Book API Service",
      description: "RESTful API for Book Entity management with advanced features",
      longDescription: "A robust REST API service for book management with CRUD operations, authentication, and database optimization. Built with Go for high performance.",
      technologies: ["GoLang", "REST API", "PostgreSQL", "Docker"],
      features: ["CRUD Operations", "Authentication", "Database Optimization", "Docker Deployment"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
      category: "Backend",
      status: "Completed",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 6,
      title: "Finance Tracker",
      description: "Personal finance management system with analytics and budgeting",
      longDescription: "A comprehensive personal finance application with expense tracking, budget management, and financial analytics. Features real-time charts and spending insights.",
      technologies: ["Express.js", "MongoDB", "Chart.js", "Node.js"],
      features: ["Expense Tracking", "Budget Management", "Financial Analytics", "Real-time Charts"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
      category: "Full-Stack",
      status: "Completed",
      gradient: "from-emerald-500 to-green-600"
    }
  ];

  const categories = ["All", "Full-Stack", "Mobile", "Frontend", "Backend"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative solutions, from cloud-native systems to mobile applications. 
            Each project showcases technical expertise and creative problem-solving.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group relative overflow-hidden bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 ${
                hoveredProject === project.id ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/80 text-6xl font-bold">
                      {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </div>
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  {project.isLeadership ? (
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-none">
                      <Award className="w-3 h-3 mr-1" />
                      Leadership
                    </Badge>
                  ) : (
                    <Badge className="bg-green-500/90 text-white border-none">
                      {project.status}
                    </Badge>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <Badge variant="outline" className="border-white/30 text-white bg-black/30 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                  {project.isLeadership && (
                    <Users className="inline w-4 h-4 ml-2 text-yellow-500" />
                  )}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-blue-500/10 text-blue-400 border-blue-500/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant="secondary"
                      className="text-xs bg-gray-500/10 text-gray-400 border-gray-500/20"
                    >
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Star className="w-3 h-3 mr-2 text-blue-400 fill-current" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-none transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </Button>
                </div>
              </CardContent>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Looking for Software Engineering Internship Opportunities
              </h3>
              <p className="text-gray-300 mb-4">
                Ready to contribute to innovative projects and grow with your team
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
