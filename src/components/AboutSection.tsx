import React from 'react';
import { User, Heart, Lightbulb, Globe } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                <img 
                  src="/20250404_103651.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-navy-light mb-4">
                Hello! I'm a passionate Full Stack Developer with a strong background in both front-end and back-end technologies. 
                With over 3 years of experience in the field, I've had the opportunity to work on a variety of projects that have sharpened my skills and broadened my perspective.
              </p>
              <p className="text-navy-light mb-4">
                I believe in creating digital solutions that not only meet functional requirements but also provide 
                exceptional user experiences. My approach to development is centered around clean code, best practices, 
                and continuous learning.
              </p>
              <p className="text-navy-light">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or enjoying outdoor activities to recharge my creative thinking.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-teal/10 p-3 rounded-full mr-4">
                  <Heart className="text-teal" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-navy-dark">Passionate</h3>
              </div>
              <p className="text-navy-light text-sm">
                I approach every project with enthusiasm and dedication, always striving for excellence.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-teal/10 p-3 rounded-full mr-4">
                  <Lightbulb className="text-teal" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-navy-dark">Creative</h3>
              </div>
              <p className="text-navy-light text-sm">
                I love finding innovative solutions to complex problems and thinking outside the box.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-teal/10 p-3 rounded-full mr-4">
                  <Globe className="text-teal" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-navy-dark">Collaborative</h3>
              </div>
              <p className="text-navy-light text-sm">
                I thrive in team environments and enjoy sharing knowledge and ideas with others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

