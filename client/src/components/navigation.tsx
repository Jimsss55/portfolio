import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { personalInfo } from "@/lib/portfolio-data";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleResumeDownload = () => {
    window.open("/api/resume/download", "_blank");
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-slate-900/98" : "bg-slate-900/95"
    } backdrop-blur-sm border-b border-slate-800`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-400">{personalInfo.name}</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection("about")} className="text-slate-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                About
              </button>
              <button onClick={() => scrollToSection("skills")} className="text-slate-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Skills
              </button>
              <button onClick={() => scrollToSection("projects")} className="text-slate-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Projects
              </button>
              {/* <button onClick={() => scrollToSection("blog")} className="text-slate-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Blog
              </button> */}
              <button onClick={() => scrollToSection("contact")} className="text-slate-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Contact
              </button>
              <button onClick={handleResumeDownload} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2">
                <Download size={16} />
                Resume
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-400 hover:text-blue-400 focus:outline-none focus:text-blue-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-sm">
            <button onClick={() => scrollToSection("about")} className="text-slate-300 hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors duration-200 w-full text-left">
              About
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-slate-300 hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors duration-200 w-full text-left">
              Skills
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-slate-300 hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors duration-200 w-full text-left">
              Projects
            </button>
            {/* <button onClick={() => scrollToSection("blog")} className="text-slate-300 hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors duration-200 w-full text-left">
              Blog
            </button> */}
            <button onClick={() => scrollToSection("contact")} className="text-slate-300 hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors duration-200 w-full text-left">
              Contact
            </button>
            <button onClick={handleResumeDownload} className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 mx-3 mt-2 flex items-center gap-2">
              <Download size={16} />
              Download Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
