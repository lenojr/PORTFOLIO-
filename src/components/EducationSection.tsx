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
      period: '2019 - 2022',
      degree: 'Certificate of secondary education',
      institution: 'Maranda school',
      description: ' Specialized in Technologies and Human-Computer Interaction. Completed projects in advanced',
      icon: <BookOpen className="text-teal" size={24} />
    },
    {
      period: '2022 - 2023',
      degree: ' Software management',
      institution: 'Nairobi institute of technology',
      description: 'Focus on modern software development methodologies and practices. Thesis on "Improving User Experience in Progressive Web Applications".',
      icon: <Award className="text-teal" size={24} />
    },
    {
      period: '2023 - 2025',
      degree: 'Diploma in Information Communication Technology',
      institution: 'Technical university of mombasa',
      description: 'further my self with web development and manegment of information systems',
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

    const currentItemRefs = [...itemRefs.current];
    currentItemRefs.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      currentItemRefs.forEach((item) => {
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
              className={`timeline-item opacity-0 animation-delay-${index}`}
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
