
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  <img src="20250404_1036551.jpg"alt="Profile" 
  className="w-full h-full object-cover"
/>

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy/5 to-teal/10 pt-20"
    >
      <div className="container mx-auto px-4 py-12 text-center md:text-left">
        <div className="md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          <h1 className="animate-fade-in font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark mb-4">
            <span className="text-teal">Hi, I'm </span>
            <span className="relative after:content-[''] after:absolute after:w-full after:h-1 after:bg-teal after:bottom-0 after:left-0 md:after:w-3/4 md:after:left-0">
            Lennox Walter
            </span>
          </h1>
          <h2 className="animate-fade-in [animation-delay:300ms] font-heading text-xl md:text-2xl text-navy mb-6">
            Full Stack Developer & Designer
          </h2>
          <p className="animate-fade-in [animation-delay:600ms] text-navy-light text-base md:text-lg max-w-xl mx-auto md:mx-0 mb-8">
            I create beautiful digital experiences with a focus on user-centered design and clean, 
            efficient code. Passionate about creative problem-solving and continuous learning.
          </p>
          <div className="animate-fade-in [animation-delay:900ms] flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="bg-teal hover:bg-teal-dark text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Contact Me
            </a>
            <a 
              href="#skills" 
              className="bg-white hover:bg-gray-100 text-navy border border-gray-200 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                const skillsSection = document.getElementById('skills');
                if (skillsSection) {
                  window.scrollTo({
                    top: skillsSection.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              View My Skills
            </a>
          </div>
        </div>
      </div>
      <button 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle"
        onClick={scrollToNextSection}
        aria-label="Scroll down"
      >
        <ArrowDown className="text-teal" size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
