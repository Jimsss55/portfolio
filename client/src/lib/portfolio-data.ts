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
  name: "Jimpa Jamtsho",
  firstName: "Jimpa",
  lastName: "Jamtsho",
  title: "Full Stack Developer",
  heroDescription: "Passionate about creating exceptional digital experiences through clean code, innovative solutions, and cutting-edge technologies.",
  bio: {
    paragraph1: "I am an optimistic and self-driven learner with a strong foundation in software development. My journey in tech started with a Bachelor of Engineering in Information Technology and has evolved through hands-on experience with cutting-edge technologies. ",
    paragraph2: "With hands-on experience in building scalable mobile and web applications, I approach every project as an opportunity to grow, embracing new challenges and technologies. My strength lies in structuring tasks efficiently, ensuring timely delivery without compromising quality. I take pride in being both a dependable team player and a confident leader, continuously seeking to deliver innovative, reliable, and maintainable solutions across the development lifecycle.",
    paragraph3: "When I'm not coding, you'll find me contributing to open source projects, writing technical articles, or exploring the latest developments in AI and machine learning."
  },
  // stats: {
  //   experience: "5+",
  //   projects: "50+",
  //   clients: "20+",
  //   articles: "15+"
  // },
  contact: {
    email: "jamtshojimpa@gmail.com",
    phone: "+975 17425363 ",
    location: "Thimphu, Bhutan"
  },
  profileImage: "/images/profile.png",
  socialLinks: {
    github: "https://github.com/Jimsss55",
    linkedin: "https://www.linkedin.com/in/jimpa-jamtsho-004021273/",
    // twitter: "https://twitter.com/alexthompson",
    email: "jamtshojimpa@gmail.com"
  },
  stats: {
    experience: "",
    projects: "",
    clients: "",
    articles: ""
  }
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "Code",
    color: "blue",
    skills: [
      { name: "React/Next.js", level: 3 },
      { name: "TypeScript", level: 3 },
      { name: "Tailwind CSS", level: 3 },
      { name: "Bootstrap", level: 3 },
      // { name: "Redux/Zustand", level: 4 }
    ]
  },
  {
    title: "Backend Development",
    icon: "Server",
    color: "emerald",
    skills: [
      { name: "Node.js/Express", level: 3 },
      { name: "ruby/Ruby on rails", level: 3 },
      { name: "PostgreSQL", level: 4 },
      // { name: "GraphQL", level: 3 }
    ]
  },
  // {
  //   title: "DevOps & Tools",
  //   icon: "Settings",
  //   color: "purple",
  //   skills: [
  //     { name: "Docker/Kubernetes", level: 4 },
  //     { name: "AWS/Vercel", level: 4 },
  //     { name: "Git/GitHub Actions", level: 5 },
  //     { name: "Jest/Cypress", level: 4 }
  //   ]
  // }
];
