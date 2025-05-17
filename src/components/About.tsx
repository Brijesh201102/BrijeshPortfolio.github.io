
import React from 'react';
import { Card } from '@/components/ui/card';
import { User, Briefcase, Book } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title inline-block after:left-1/2 after:-translate-x-1/2">About Me</h2>
          <p className="mt-8 text-lg text-muted-foreground">
            I'm a passionate frontend developer specializing in building exceptional digital experiences.
            Here's a bit more about my background and what I do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <Card className="p-6 border border-border hover:border-blueAccent transition-colors">
            <div className="h-12 w-12 rounded-full bg-blueAccent/10 flex items-center justify-center mb-6">
              <User size={24} className="text-blueAccent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Personal Info</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Name:</span> John Doe
              </p>
              <p>
                <span className="font-medium text-foreground">Email:</span> john@example.com
              </p>
              <p>
                <span className="font-medium text-foreground">Location:</span> New York, USA
              </p>
              <p>
                <span className="font-medium text-foreground">Languages:</span> English, Spanish
              </p>
            </div>
          </Card>

          <Card className="p-6 border border-border hover:border-blueAccent transition-colors">
            <div className="h-12 w-12 rounded-full bg-blueAccent/10 flex items-center justify-center mb-6">
              <Briefcase size={24} className="text-blueAccent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Experience</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-blueAccent font-medium">2021 - Present</p>
                <p className="font-medium">Senior Frontend Developer</p>
                <p className="text-sm text-muted-foreground">Tech Solutions Inc.</p>
              </div>
              <div>
                <p className="text-sm text-blueAccent font-medium">2018 - 2021</p>
                <p className="font-medium">Frontend Developer</p>
                <p className="text-sm text-muted-foreground">Web Innovations Ltd</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border border-border hover:border-blueAccent transition-colors md:col-span-2 lg:col-span-1">
            <div className="h-12 w-12 rounded-full bg-blueAccent/10 flex items-center justify-center mb-6">
              <Book size={24} className="text-blueAccent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-blueAccent font-medium">2014 - 2018</p>
                <p className="font-medium">B.S. Computer Science</p>
                <p className="text-sm text-muted-foreground">University of Technology</p>
              </div>
              <div>
                <p className="text-sm text-blueAccent font-medium">2020</p>
                <p className="font-medium">Frontend Development Certification</p>
                <p className="text-sm text-muted-foreground">Online Academy</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
