import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useContactForm } from "@/hooks/use-contact-form";
import { personalInfo } from "@/lib/portfolio-data";

export default function ContactSection() {
  const { formData, handleChange, handleSubmit, isSubmitting, isSuccess } = useContactForm();

  return (
    <section id="contact" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together 
            to create something amazing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-slate-200">Let's Connect</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-blue-400 text-xl w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-slate-200 font-medium">Email</h4>
                  <p className="text-slate-400">{personalInfo.contact.email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-blue-400 text-xl w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-slate-200 font-medium">Phone</h4>
                  <p className="text-slate-400">{personalInfo.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <MapPin className="text-blue-400 text-xl w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-slate-200 font-medium">Location</h4>
                  <p className="text-slate-400">{personalInfo.contact.location}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-6 text-slate-200">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href={personalInfo.socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Github className="text-slate-300 hover:text-white w-5 h-5" />
                </a>
                <a 
                  href={personalInfo.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Linkedin className="text-slate-300 hover:text-white w-5 h-5" />
                </a>
                <a 
                  href={personalInfo.socialLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Twitter className="text-slate-300 hover:text-white w-5 h-5" />
                </a>
                <a 
                  href="#"
                  className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Instagram className="text-slate-300 hover:text-white w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    placeholder="Your full name"
                    className="bg-slate-800/50 border-slate-600 text-slate-200 placeholder-slate-400 focus:border-blue-400"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    placeholder="your.email@example.com"
                    className="bg-slate-800/50 border-slate-600 text-slate-200 placeholder-slate-400 focus:border-blue-400"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-slate-200 mb-2">
                  Subject
                </Label>
                <Input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  required
                  placeholder="Project inquiry, collaboration, etc."
                  className="bg-slate-800/50 border-slate-600 text-slate-200 placeholder-slate-400 focus:border-blue-400"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  required
                  placeholder="Tell me about your project, ideas, or how we can work together..."
                  className="bg-slate-800/50 border-slate-600 text-slate-200 placeholder-slate-400 focus:border-blue-400 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </Button>
              
              {isSuccess && (
                <div className="p-4 bg-emerald-600/20 border border-emerald-400/30 rounded-lg text-emerald-300">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    Message sent successfully! I'll get back to you soon.
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
