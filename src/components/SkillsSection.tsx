import React, { useState } from 'react';
import { Code, PenTool, Database, Server, Award, Navigation } from 'lucide-react';
import { cn } from '@/lib/utils';

type SkillCategory = 'frontend' | 'backend' | 'design' | 'other';

interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
  icon?: React.ReactNode;
}

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: <Code size={20} /> },
    { id: 'backend', label: 'Backend', icon: <Server size={20} /> },
    { id: 'design', label: 'Design', icon: <PenTool size={20} /> },
    { id: 'other', label: 'Other', icon: <Award size={20} /> },
  ];

  const skills: Skill[] = [
    // Frontend
    { name: 'HTML/CSS', level: 90, category: 'frontend', icon: <Code size={24} className="text-teal" /> },
    { name: 'JavaScript', level: 75, category: 'frontend', icon: <Code size={24} className="text-teal" /> },
    { name: 'React', level: 70, category: 'frontend', icon: <Code size={24} className="text-teal" /> },
    { name: 'TypeScript', level: 75, category: 'frontend', icon: <Code size={24} className="text-teal" /> },
    { name: 'Vue.js', level: 60, category: 'frontend', icon: <Code size={24} className="text-teal" /> },
    { name: 'Tailwind CSS', level: 75, category: 'frontend', icon: <Code size={24} className="text-teal" /> },
    { name: 'Responsive Design', level: 60, category: 'frontend', icon: <Navigation size={24} className="text-teal" /> },
    { name: 'Redux', level: 55, category: 'frontend', icon: <Code size={24} className="text-teal" /> },
    
    // Backend
    { name: 'Node.js', level: 80, category: 'backend', icon: <Server size={24} className="text-teal" /> },
    { name: 'Express', level: 65, category: 'backend', icon: <Server size={24} className="text-teal" /> },
    { name: 'MongoDB', level: 60, category: 'backend', icon: <Database size={24} className="text-teal" /> },
    { name: 'PostgreSQL', level: 55, category: 'backend', icon: <Database size={24} className="text-teal" /> },
    { name: 'RESTful APIs', level: 55, category: 'backend', icon: <Server size={24} className="text-teal" /> },
    { name: 'GraphQL', level: 50, category: 'backend', icon: <Server size={24} className="text-teal" /> },
    { name: 'JWT', level: 50, category: 'backend', icon: <Server size={24} className="text-teal" /> },
    { name: 'Firebase', level: 40, category: 'backend', icon: <Database size={24} className="text-teal" /> },
    
    // Design
    { name: 'Figma', level: 50, category: 'design', icon: <PenTool size={24} className="text-teal" /> },
    { name: 'Adobe XD', level: 40, category: 'design', icon: <PenTool size={24} className="text-teal" /> },
    { name: 'UI/UX Design', level: 60, category: 'design', icon: <PenTool size={24} className="text-teal" /> },
    { name: 'Wireframing', level: 50, category: 'design', icon: <PenTool size={24} className="text-teal" /> },
    { name: 'Prototyping', level: 50, category: 'design', icon: <PenTool size={24} className="text-teal" /> },
    { name: 'Design Systems', level: 55, category: 'design', icon: <PenTool size={24} className="text-teal" /> },
    
    // Other
    { name: 'Git/GitHub', level: 85, category: 'other', icon: <Award size={24} className="text-teal" /> },
    { name: 'Agile/Scrum', level: 60, category: 'other', icon: <Award size={24} className="text-teal" /> },
    { name: 'Problem Solving', level: 90, category: 'other', icon: <Award size={24} className="text-teal" /> },
    { name: 'Testing', level: 75, category: 'other', icon: <Award size={24} className="text-teal" /> },
    { name: 'CI/CD', level: 70, category: 'other', icon: <Award size={24} className="text-teal" /> },
    { name: 'SEO', level: 65, category: 'other', icon: <Award size={24} className="text-teal" /> },
  ];

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section-container bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">My Skills</h2>
        
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as SkillCategory)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-teal text-white shadow-md"
                  : "bg-white text-navy hover:bg-gray-100 border border-gray-200"
              )}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={`${skill.name}-${index}`}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center mb-3">
                <div className="mr-3">{skill.icon}</div>
                <h3 className="font-medium text-navy-dark">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`bg-teal h-2.5 rounded-full skill-level-${index}`}
                ></div>
              </div>
              <div className="mt-2 text-right text-sm text-navy-light">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
