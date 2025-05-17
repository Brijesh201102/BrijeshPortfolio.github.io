
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML/CSS", level: 90 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Responsive Design", level: 90 },
        { name: "UI/UX", level: 80 },
        { name: "Testing (Jest, RTL)", level: 75 },
        { name: "Performance Optimization", level: 80 },
      ],
    },
  ];

  const technologies = [
    "React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Redux", 
    "HTML5", "CSS3", "SASS", "Webpack", "Git", "Figma", "REST API", "GraphQL", 
    "Jest", "React Testing Library", "Storybook", "Firebase", "Vercel", "Netlify"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title inline-block after:left-1/2 after:-translate-x-1/2">My Skills</h2>
          <p className="mt-8 text-lg text-muted-foreground">
            I have experience with a variety of frontend technologies and frameworks, 
            with a focus on React, Next.js, JavaScript, and Tailwind CSS.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-border shadow-sm overflow-hidden">
              <div className="bg-blueAccent p-4">
                <div className="flex items-center gap-3">
                  <Code size={20} className="text-white" />
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-8">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span key={index} className="skill-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
