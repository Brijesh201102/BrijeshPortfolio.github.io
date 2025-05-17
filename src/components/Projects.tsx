
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce platform built with React, Next.js, and Tailwind CSS. Features include product filtering, cart functionality, and user authentication.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Next.js", "Tailwind CSS", "Commerce.js"],
      live: "#",
      github: "#",
    },
    {
      title: "Task Management App",
      description: "A drag-and-drop task management application built with React and TypeScript. Features include board customization, task filtering, and local storage persistence.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS", "DnD Kit"],
      live: "#",
      github: "#",
    },
    {
      title: "Developer Portfolio",
      description: "A modern, responsive developer portfolio website built with React and Tailwind CSS. Features smooth scrolling, dark mode, and contact form functionality.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title inline-block after:left-1/2 after:-translate-x-1/2">My Projects</h2>
          <p className="mt-8 text-lg text-muted-foreground">
            Here are some of my recent projects that showcase my skills in React, Next.js, JavaScript, and Tailwind CSS.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden border-0">
              <div className="h-52 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs font-medium bg-secondary/80 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={project.github}>
                      <Github size={16} className="mr-2" /> GitHub
                    </a>
                  </Button>
                  <Button asChild size="sm" className="flex-1 bg-blueAccent hover:bg-blueAccent/90">
                    <a href={project.live}>
                      Live Demo <ArrowRight size={16} className="ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="#" className="flex items-center gap-2">
              See All Projects <ArrowRight size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
