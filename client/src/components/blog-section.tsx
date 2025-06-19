import { useQuery } from "@tanstack/react-query";
import { ArrowRight, BookOpen } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import type { Article } from "@shared/schema";

export default function BlogSection() {
  const { data: articles, isLoading, error } = useQuery<Article[]>({
    queryKey: ["/api/articles/recent"],
  });

  if (error) {
    return (
      <section id="blog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-400">Failed to load articles. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Latest Articles</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Sharing insights about web development, best practices, and emerging technologies 
            in the ever-evolving world of software development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <article key={index} className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50">
                <Skeleton className="w-full h-48" />
                <div className="p-6">
                  <Skeleton className="h-4 w-24 mb-3" />
                  <Skeleton className="h-6 w-full mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-4" />
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-20" />
                    <div className="flex gap-2">
                      <Skeleton className="h-5 w-16" />
                      <Skeleton className="h-5 w-16" />
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            articles?.map((article) => {
              const categoryColors = {
                React: "blue",
                TypeScript: "emerald",
                DevOps: "purple",
              };
              
              const colorClass = categoryColors[article.category as keyof typeof categoryColors] || "blue";
              
              return (
                <article 
                  key={article.id}
                  className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title} 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`bg-${colorClass}-600 text-white px-3 py-1 rounded-full text-sm font-medium`}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-slate-400 mb-3">
                      <time>{new Date(article.publishedAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}</time>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-200 group-hover:text-blue-400 transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-slate-400 mb-4 leading-relaxed">{article.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <button className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium flex items-center gap-1">
                        Read More <ArrowRight size={16} />
                      </button>
                      <div className="flex space-x-2">
                        {article.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 rounded-lg transition-all duration-300">
            <BookOpen className="mr-2" size={20} />
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
