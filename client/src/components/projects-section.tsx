import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink, Github } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import type { Project } from "@shared/schema";

export default function ProjectsSection() {
  const { data: projects, isLoading, error } = useQuery<Project[]>({
    queryKey: ["/api/projects/featured"],
  });

  if (error) {
    return (
      <section id="projects" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-400">Failed to load projects. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development, 
            UI/UX design, and modern web technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50">
                <Skeleton className="w-full h-48" />
                <div className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-4" />
                  <div className="flex gap-2 mb-4">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-12" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            projects?.map((project) => {
              const colorClass = (project.title.includes("Dzongkha Tracing Application") || project.title.includes("CST Gym Application")) ? "blue" : 
                               (project.title.includes("Restaurant Application") || project.title.includes("Student Personal Information Management System") ? "emerald" : "purple");
              
              return (
                <div 
                  key={project.id}
                  className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
                    />
                    <div className={`absolute inset-0 bg-${colorClass}-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                      <div className="flex space-x-4">
                        {/* {project.demoUrl && (
                          <a 
                            href={project.demoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors duration-200"
                          >
                            <ExternalLink className="text-white w-5 h-5" />
                          </a>
                        )} */}
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors duration-200"
                          >
                            <Github className="text-white w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-slate-200">{project.title}</h3>
                    <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className={`px-3 py-1 bg-${colorClass}-600/20 text-${colorClass}-300 rounded-full text-sm`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`text-${colorClass}-400 hover:text-${colorClass}-300 transition-colors duration-200 flex items-center gap-1`}
                          >
                            <Github size={16} /> Code
                          </a>
                        )}
                        {/* {project.demoUrl && (
                          <a 
                            href={project.demoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`text-${colorClass}-400 hover:text-${colorClass}-300 transition-colors duration-200 flex items-center gap-1`}
                          >
                            <ExternalLink size={16} /> Demo
                          </a>
                        )} */}
                      </div>
                      <span className="text-sm text-slate-500">{project.year}</span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Jimsss55" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 rounded-lg transition-all duration-300"
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
