export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  link?: string;
}