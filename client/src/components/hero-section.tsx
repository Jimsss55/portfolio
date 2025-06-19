import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { personalInfo } from "@/lib/portfolio-data";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = ["Full Stack Developer", "React Specialist", "UI/UX Enthusiast", "Problem Solver"];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-purple-900/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Professional headshot */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl">
            <img 
              src={personalInfo.profileImage} 
              alt={`${personalInfo.name} - Professional headshot`} 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-slate-50">{personalInfo.firstName}</span>
            <span className="text-blue-400 ml-4">{personalInfo.lastName}</span>
          </h1>
          
          <div className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-8 font-light">
            <span className="inline-block">I'm a</span>
            <span className="text-blue-400 font-medium ml-2 min-w-[200px] inline-block text-left">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-lg sm:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.heroDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12">
            <a 
              href={personalInfo.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-2xl"
            >
              <Github size={24} />
            </a>
            <a 
              href={personalInfo.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-2xl"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={personalInfo.socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-2xl"
            >
              <Twitter size={24} />
            </a>
            <a 
              href={personalInfo.socialLinks.email}
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-2xl"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-slate-400 text-2xl" />
        </div>
      </div>
    </section>
  );
}
