
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-lightBlue dark:from-darkBlue dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-blueAccent font-medium animate-fade-in">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="block">Frontend</span> 
                <span className="block">Developer</span>
              </h1>
              <p className="text-lg text-muted-foreground mt-4 max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                I build modern web applications using React, Next.js, JavaScript, 
                and Tailwind CSS to create beautiful, responsive, and user-friendly interfaces.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="bg-blueAccent hover:bg-blueAccent/90">
                Download Resume
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <a href="#" className="text-muted-foreground hover:text-blueAccent transition-colors">
                <Github size={22} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-blueAccent transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-blueAccent transition-colors">
                <Mail size={22} />
              </a>
            </div>
          </div>
          
          <div className={cn(
            "lg:w-1/2 relative animate-fade-in",
            "before:absolute before:inset-0 before:bg-blueAccent/10 before:rounded-full before:scale-90 before:blur-3xl"
          )} style={{ animationDelay: '0.4s' }}>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=768&q=80" 
              alt="Developer coding" 
              className="rounded-3xl shadow-xl w-full max-w-lg mx-auto object-cover"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
          <span className="text-sm font-medium mb-2 text-muted-foreground">Scroll Down</span>
          <ArrowDown size={20} className="text-blueAccent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
