
import React, { useEffect, useRef } from 'react';
import { Calendar, Award, BookOpen } from 'lucide-react';

interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  description: string;
  icon: React.ReactNode;
}

const EducationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const educationItems: EducationItem[] = [
    {
      period: '2015 - 2019',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Stanford University',
      description: 'Graduated with honors. Specialized in Web Technologies and Human-Computer Interaction. Completed projects in advanced web development and UI/UX design.',
      icon: <BookOpen className="text-teal" size={24} />
    },
    {
      period: '2019 - 2021',
      degree: 'Master of Science in Software Engineering',
      institution: 'Massachusetts Institute of Technology',
      description: 'Focus on modern software development methodologies and practices. Thesis on "Improving User Experience in Progressive Web Applications".',
      icon: <Award className="text-teal" size={24} />
    },
    {
      period: '2021 - 2022',
      degree: 'Professional Certificate in UI/UX Design',
      institution: 'Rhode Island School of Design',
      description: 'Intensive program focusing on user research, interaction design, prototyping, and usability testing. Created a comprehensive design system for a healthcare application.',
      icon: <Calendar className="text-teal" size={24} />
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="education" className="section-container bg-white">
      <div className="max-w-4xl mx-auto" ref={sectionRef}>
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-8 pt-8">
          {educationItems.map((item, index) => (
            <div 
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="timeline-item opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="timeline-dot"></div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-teal/10 p-3 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <span className="block text-sm text-teal font-medium">{item.period}</span>
                    <h3 className="font-heading font-semibold text-lg text-navy-dark">{item.degree}</h3>
                    <span className="text-navy-light text-sm">{item.institution}</span>
                  </div>
                </div>
                <p className="text-navy-light ml-16">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
