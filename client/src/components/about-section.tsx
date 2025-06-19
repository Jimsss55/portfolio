import { personalInfo } from "@/lib/portfolio-data";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Hello, I'm Jimpa</h3>
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>{personalInfo.bio.paragraph1}</p>
              <p>{personalInfo.bio.paragraph2}</p>
              <p>{personalInfo.bio.paragraph3}</p>
            </div>
            
            {/* <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-slate-200">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{personalInfo.stats.experience}</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{personalInfo.stats.projects}</div>
                  <div className="text-sm text-slate-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{personalInfo.stats.clients}</div>
                  <div className="text-sm text-slate-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{personalInfo.stats.articles}</div>
                  <div className="text-sm text-slate-400">Tech Articles</div>
                </div>
              </div>
            </div> */}
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern developer workspace" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
