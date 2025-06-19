export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  heroDescription: string;
  bio: {
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  stats: {
    experience: string;
    projects: string;
    clients: string;
    articles: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  profileImage: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: {
    name: string;
    level: number;
  }[];
}

export const personalInfo: PersonalInfo = {
  name: "Alex Thompson",
  firstName: "Alex",
  lastName: "Thompson",
  title: "Full Stack Developer",
  heroDescription: "Passionate about creating exceptional digital experiences through clean code, innovative solutions, and cutting-edge technologies. Specializing in React, Node.js, and modern web development.",
  bio: {
    paragraph1: "I'm a passionate Full Stack Developer with over 5 years of experience building scalable web applications and user-centric digital solutions. My journey in tech started with a Computer Science degree and has evolved through hands-on experience with cutting-edge technologies.",
    paragraph2: "I specialize in React ecosystem, Node.js backend development, and cloud technologies. I'm particularly interested in performance optimization, user experience design, and building maintainable, testable code.",
    paragraph3: "When I'm not coding, you'll find me contributing to open source projects, writing technical articles, or exploring the latest developments in AI and machine learning."
  },
  stats: {
    experience: "5+",
    projects: "50+",
    clients: "20+",
    articles: "15+"
  },
  contact: {
    email: "alex.thompson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA"
  },
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
  socialLinks: {
    github: "https://github.com/alexthompson",
    linkedin: "https://linkedin.com/in/alexthompson",
    twitter: "https://twitter.com/alexthompson",
    email: "mailto:alex.thompson@email.com"
  }
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "Code",
    color: "blue",
    skills: [
      { name: "React/Next.js", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Redux/Zustand", level: 4 }
    ]
  },
  {
    title: "Backend Development",
    icon: "Server",
    color: "emerald",
    skills: [
      { name: "Node.js/Express", level: 5 },
      { name: "Python/Django", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "GraphQL", level: 3 }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: "Settings",
    color: "purple",
    skills: [
      { name: "Docker/Kubernetes", level: 4 },
      { name: "AWS/Vercel", level: 4 },
      { name: "Git/GitHub Actions", level: 5 },
      { name: "Jest/Cypress", level: 4 }
    ]
  }
];
