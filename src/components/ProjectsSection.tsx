
import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectsSection = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with product catalog, shopping cart, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://example.com/project1",
      githubUrl: "https://github.com/johndoe/project1"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts and interactive visualizations.",
      tags: ["JavaScript", "API Integration", "Chart.js"],
      imageUrl: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://example.com/project2",
      githubUrl: "https://github.com/johndoe/project2"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team workspaces.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://example.com/project3",
      githubUrl: "https://github.com/johndoe/project3"
    },
  ];

  const uniqueTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  const filteredProjects = selectedTag 
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;

  return (
    <section id="projects" className="section-container bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">My Projects</h2>
        
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              !selectedTag
                ? "bg-teal text-white shadow-md"
                : "bg-white text-navy hover:bg-gray-100 border border-gray-200"
            )}
          >
            All
          </button>
          
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                selectedTag === tag
                  ? "bg-teal text-white shadow-md"
                  : "bg-white text-navy hover:bg-gray-100 border border-gray-200"
              )}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={`${project.title}-${index}`}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-navy-dark mb-2">{project.title}</h3>
                <p className="text-navy-light text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-teal/10 text-teal text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-navy hover:text-teal transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-navy hover:text-teal transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                  
                  <a 
                    href="#"
                    className="flex items-center text-sm text-teal hover:text-teal-dark transition-colors"
                  >
                    Details
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
