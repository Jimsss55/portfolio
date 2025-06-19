import { Code, Server, Settings } from "lucide-react";
import { skillCategories } from "@/lib/portfolio-data";

const iconMap = {
  Code,
  Server,
  Settings,
};

export default function SkillsSection() {
  const renderStars = (level: number, color: string) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={`text-xl ${
          i < level ? `text-${color}-400` : 'text-slate-600'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            
            return (
              <div 
                key={index}
                className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-${category.color}-600/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`text-${category.color}-400 text-2xl w-8 h-8`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-200">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-slate-300">{skill.name}</span>
                      <div className="flex space-x-1">
                        {renderStars(skill.level, category.color)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
