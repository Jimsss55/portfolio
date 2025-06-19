import { users, contactMessages, projects, articles, type User, type InsertUser, type ContactMessage, type InsertContactMessage, type Project, type InsertProject, type Article, type InsertArticle } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  getArticles(): Promise<Article[]>;
  getRecentArticles(limit?: number): Promise<Article[]>;
  createArticle(article: InsertArticle): Promise<Article>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private projects: Map<number, Project>;
  private articles: Map<number, Article>;
  private currentUserId: number;
  private currentMessageId: number;
  private currentProjectId: number;
  private currentArticleId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.projects = new Map();
    this.articles = new Map();
    this.currentUserId = 1;
    this.currentMessageId = 1;
    this.currentProjectId = 1;
    this.currentArticleId = 1;

    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample projects
    const sampleProjects: Project[] = [
      {
        id: this.currentProjectId++,
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform built with Next.js, featuring user authentication, payment processing, inventory management, and admin dashboard.",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        demoUrl: "https://example-ecommerce.com",
        githubUrl: "https://github.com/alexthompson/ecommerce-platform",
        technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
        featured: true,
        year: 2024,
      },
      {
        id: this.currentProjectId++,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and detailed analytics.",
        imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        demoUrl: "https://example-taskmanager.com",
        githubUrl: "https://github.com/alexthompson/task-manager",
        technologies: ["React", "Socket.io", "MongoDB", "Express"],
        featured: true,
        year: 2023,
      },
      {
        id: this.currentProjectId++,
        title: "Analytics Dashboard",
        description: "A comprehensive analytics dashboard for data visualization with interactive charts, real-time data processing, and customizable report generation.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        demoUrl: "https://example-analytics.com",
        githubUrl: "https://github.com/alexthompson/analytics-dashboard",
        technologies: ["D3.js", "Python", "FastAPI", "Redis"],
        featured: true,
        year: 2023,
      },
    ];

    sampleProjects.forEach(project => this.projects.set(project.id, project));

    // Sample articles
    const sampleArticles: Article[] = [
      {
        id: this.currentArticleId++,
        title: "Optimizing React Performance with Concurrent Features",
        excerpt: "Explore how React's concurrent features can dramatically improve your app's performance and user experience through better scheduling and prioritization.",
        content: "Full article content here...",
        imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        category: "React",
        readTime: "5 min read",
        tags: ["Performance", "React 18"],
        publishedAt: new Date("2023-12-15"),
      },
      {
        id: this.currentArticleId++,
        title: "Advanced TypeScript Patterns for Better Code Quality",
        excerpt: "Discover advanced TypeScript patterns and techniques that will help you write more maintainable, type-safe code and catch errors at compile time.",
        content: "Full article content here...",
        imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        category: "TypeScript",
        readTime: "7 min read",
        tags: ["TypeScript", "Best Practices"],
        publishedAt: new Date("2023-12-08"),
      },
      {
        id: this.currentArticleId++,
        title: "Building Scalable CI/CD Pipelines with GitHub Actions",
        excerpt: "Learn how to create robust, scalable CI/CD pipelines using GitHub Actions for automated testing, building, and deployment of modern web applications.",
        content: "Full article content here...",
        imageUrl: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        category: "DevOps",
        readTime: "6 min read",
        tags: ["CI/CD", "Automation"],
        publishedAt: new Date("2023-11-28"),
      },
    ];

    sampleArticles.forEach(article => this.articles.set(article.id, article));
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentMessageId++;
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      createdAt: new Date() 
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).sort((a, b) => b.year - a.year);
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values())
      .filter(project => project.featured)
      .sort((a, b) => b.year - a.year);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }

  async getArticles(): Promise<Article[]> {
    return Array.from(this.articles.values())
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }

  async getRecentArticles(limit: number = 3): Promise<Article[]> {
    const articles = await this.getArticles();
    return articles.slice(0, limit);
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const id = this.currentArticleId++;
    const article: Article = { 
      ...insertArticle, 
      id, 
      publishedAt: new Date() 
    };
    this.articles.set(id, article);
    return article;
  }
}

export const storage = new MemStorage();
