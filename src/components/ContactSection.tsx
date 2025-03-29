
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-container bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-navy-light mb-8">
              I'm always open to discussing new projects, opportunities or partnerships. 
              Feel free to reach out through the form or directly via email or phone.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal/10 p-3 rounded-full mr-4">
                  <Mail className="text-teal" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-navy-dark">Email</h3>
                  <p className="text-navy-light">hello@johndoe.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal/10 p-3 rounded-full mr-4">
                  <Phone className="text-teal" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-navy-dark">Phone</h3>
                  <p className="text-navy-light">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal/10 p-3 rounded-full mr-4">
                  <MapPin className="text-teal" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-navy-dark">Location</h3>
                  <p className="text-navy-light">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="font-medium text-navy-dark mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-all">
                  <Linkedin className="text-teal" size={20} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-all">
                  <Github className="text-teal" size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-all">
                  <Twitter className="text-teal" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-heading font-semibold text-lg text-navy-dark mb-6">Send Me A Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-navy-light text-sm mb-1">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-navy-light text-sm mb-1">Your Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-navy-light text-sm mb-1">Your Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-teal hover:bg-teal-dark text-white transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  {!isSubmitting && <Send className="ml-2" size={16} />}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
