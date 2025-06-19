import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react";
import { personalInfo } from "@/lib/portfolio-data";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    window.open("/api/resume/download", "_blank");
  };

  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">{personalInfo.name}</h3>
            <p className="text-slate-400 leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital experiences 
              through innovative solutions and clean, maintainable code.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-slate-200 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection("about")} 
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200 text-left"
              >
                About Me
              </button>
              <button 
                onClick={() => scrollToSection("skills")} 
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200 text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection("projects")} 
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200 text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("blog")} 
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200 text-left"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200 text-left"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-slate-200 mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a 
                href={personalInfo.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-xl"
              >
                <Github size={24} />
              </a>
              <a 
                href={personalInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-xl"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={personalInfo.socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-xl"
              >
                <Twitter size={24} />
              </a>
              <a 
                href={personalInfo.socialLinks.email}
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-xl"
              >
                <Mail size={24} />
              </a>
            </div>
            <button 
              onClick={handleResumeDownload}
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
            >
              <Download className="mr-2" size={16} />
              Download Resume
            </button>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 {personalInfo.name}. All rights reserved. 
            <span className="hidden sm:inline"> Built with React, Express.js and Tailwind CSS.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
