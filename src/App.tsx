import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
import { Download, Github, Linkedin, Mail, Code, Globe, Award, Rocket } from 'lucide-react';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import { Project, Certification } from './types';

const projects: Project[] = [
  {
    title: "Web Protection Suite",
    description: "Shields websites from cyber threats.",
    image: "https://d2yn3p1o2oplij.cloudfront.net/2023/11/importance-of-web-security.webp", 
    technologies: ["Python","ML", "HTML", "CSS","SQL"],
    github: "https://github.com/shashwat-81/Web-Protection.git",
  },
  {
    title: "Personal Carbon Calculator",
    description: "Calculate, understand, and reduce your carbon footprint effortlessly.",
    image: "https://images.prismic.io/palmettoblog/ddd3baeb-d7c2-4247-9ed6-964184738854_what-is-a-carbon-footprint.jpg?auto=compress,format&rect=0,0,1200,800&w=1200&h=800", 
    technologies: ["Python", "Streamlit", "CSS","HTML","JavaScript"],
    link: "https://personal-carbon-calculator-nfyhbwbggnfmnn7jvhqbzu.streamlit.app/",
    github:"https://github.com/shashwat-81/Personal-Carbon-Calculator.git"
  },
  {
    title: "GestureRunner",
    description: "Control games with hand gestures using computer vision.",
    image: "https://www.researchgate.net/publication/307894274/figure/fig2/AS:403958326677506@1473322578610/game-controlling-using-hand-gestures-1.png",
    technologies: ["Python", "OpenCV", "MediaPipe"],
    github: "https://github.com",
  },
  {
    title: "Attendance Management System",
    description: "A modern web-based attendance tracking system with real-time updates and detailed analytics.",
    image: "https://www.lystloc.com/blog/wp-content/uploads/2024/01/ezgif-2-0baa780715.webp", // Updated image URL
    technologies: ["Python", "Flask", "MongoDB", "HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
    github: "https://github.com/shashwat-81/Attendance-management.git",
    // link: "https://your-demo-link.com"
  }
];
type Internship = {
  company: string;
  role: string;
  duration: string;
  description: string;
  certificateImage: string;
  certificateLink?: string;
};

const internships: Internship[] = [
  {
    company: "Microsoft (Edunet Foundation, AICTE)",
    role: "Foundations of AI Intern",
    duration: "10 April 2025 – 10 May 2025",
    description:
      "Successfully completed a 4-week internship on Foundations of AI, implemented by Edunet Foundation in collaboration with AICTE. Gained hands-on experience in AI concepts and applications.",
    certificateImage: "https://drive.google.com/file/d/1-JfmHj8tZLw4szjfvdXh_GjF8BoVBjwv/view?usp=drive_link",
    certificateLink: "https://drive.google.com/file/d/1-JfmHj8tZLw4szjfvdXh_GjF8BoVBjwv/view?usp=drive_link",
  },
];
const certifications: Certification[] = [
  {
    title: "Python Foundation",
    issuer: "Infosys Springboard",
    date: "2024",
    link: "https://drive.google.com/file/d/1jTQuI6npmSIfI-7jlFyYER3PAIMlJXPf/view?usp=drivesdk",
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Forage",
    date: "2024",
    link: "https://drive.google.com/file/d/1jUI5RM7u21yLOtN7T8snJLqigMdYjm-T/view?usp=drivesdk",
  },
  {
    title: "Introduction to Soft Skills",
    issuer: "TCSION",
    date: "2024",
    link: "https://drive.google.com/file/d/1jYAYI5VtJW3vo-RKmZ0WaDyrqyew0Hc5/view?usp=drivesdk",
  },
  // {
  //   title: "React Advanced Concepts",
  //   issuer: "Coursera",
  //   date: "2024",
  //   image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  //   link: "https://coursera.org",
  // },
];

const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "JavaScript", "HTML/CSS"],
    icon: <Code className="w-6 h-6" />
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Tailwind CSS", "Android Studio", "Streamlit"],
    icon: <Globe className="w-6 h-6" />
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "VS Code", "Firebase", "SQL"],
    icon: <Rocket className="w-6 h-6" />
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Team Collaboration", "Communication", "Time Management"],
    icon: <Award className="w-6 h-6" />
  }
];

// Add this array near your other data arrays (like projects, certifications)
const achievements = [
  {
    title: "Runner up - Project Omega 2025",
    description: "Secured 3rd place in a national-level hackathon organized by Yenepoya institute of arts, science, commerce and management, Mangalore.",
    image: "/Omega.jpg", // Use the public path
  },
];

function App() {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {
      const count = 100;
      setUserCount(count);
    };

    fetchUserCount();
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    submitting: boolean;
    success: boolean;
    error: string | null;
  }>({
    submitting: false,
    success: false,
    error: null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: null });

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ submitting: false, success: false, error: 'Please fill in all fields' });
      return;
    }

    if (!formData.email.includes('@')) {
      setFormStatus({ submitting: false, success: false, error: 'Please enter a valid email' });
      return;
    }

    try {
      // Send form data to Formspree
      const formResponse = await fetch('https://formspree.io/f/mjkyjkzn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New message from ${formData.name}`
        }),
      });
      
      if (!formResponse.ok) {
        throw new Error('Failed to send message');
      }
      
      setFormStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, success: false }));
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({ submitting: false, success: false, error: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      <Navigation />
      <ThemeToggle />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#home" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                Portfolio
              </a>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                About
              </a>
              <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Projects
              </a>
              <a href="#internship" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Internship
              </a>
              <a href="#certifications" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Certifications
              </a>
              <a href="#achievements" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Achievements
              </a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-[50vh] flex items-center justify-center pt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h1 className="text-3xl sm:text-5xl font-bold mb-3">
              Hi, I'm <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">Shashwat</span>
            </h1>
            <div className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6 h-16">
              <TypeAnimation
                sequence={[
                  'Java developer | Android App developer',
                  2000,
                  'Building amazing digital experiences',
                  2000,
                  'Learning new technologies',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <div className="flex justify-center space-x-4">
              <a
                href="https://drive.google.com/file/d/1kPE20DKv7NPO9LCmSrPMCfU_8bD3s1B4/view?usp=drivesdk"
                className="relative group bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
                download
              >
                <span className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></span>
                <span className="relative flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </span>
              </a>
              <a
                href="#contact"
                className="relative group bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <span className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></span>
                <span className="relative">Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(0,0,0,0))]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-5xl font-bold mb-20 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 animate-gradient">
              About Me
            </span>
          </h2>
          
          {/* Profile Image on Top */}
          <div className="flex justify-center mb-24" data-aos="zoom-in">
            <div className="relative group perspective-1000">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-700"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 rounded-full blur opacity-20 group-hover:opacity-50 transition duration-700 animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 rounded-full blur opacity-10 group-hover:opacity-30 transition duration-700 animate-pulse delay-150"></div>
              <div className="relative transform group-hover:rotate-y-6 transition-transform duration-700">
                <img
                  src="/shashwat.jpg"
                  alt="Profile"
                  className="relative rounded-full shadow-2xl w-80 h-80 object-cover mx-auto ring-4 ring-white dark:ring-gray-800 transform group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1517849845537-4d257902454a";
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-16">
            <div className="relative group perspective-1000" data-aos="fade-right">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-700"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-700 animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-700 animate-pulse delay-150"></div>
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-12 rounded-2xl shadow-xl h-full border border-gray-100 dark:border-gray-700 transform group-hover:rotate-y-3 transition-transform duration-700">
                <h3 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 animate-gradient">
                  Who I Am
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed">
                  I'm a third-year Computer Science student at Sahyadri College of Engineering and Management with a strong foundation in Java and a growing interest in mobile app development. I've built real-world projects like a Web Protection Suite and a Carbon Footprint Calculator, showcasing my ability to create secure and impactful solutions.
                </p>
              </div>
            </div>
            
            <div className="relative group perspective-1000" data-aos="fade-left">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-700"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-700 animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-700 animate-pulse delay-150"></div>
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-12 rounded-2xl shadow-xl h-full border border-gray-100 dark:border-gray-700 transform group-hover:rotate-y-3 transition-transform duration-700">
                <h3 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 animate-gradient">
                  My Goals
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed">
                  My career goal is to become a versatile software developer focused on building scalable, user-centric applications while continuously learning and contributing to innovative technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-900/30 dark:to-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text" data-aos="fade-up">
            My Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="relative group" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg h-full">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-lg">
                      {skill.icon}
                    </div>
                    <h3 className="ml-3 text-xl font-bold text-primary-600 dark:text-primary-400">
                      {skill.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-br from-secondary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(0,0,0,0))]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-5xl font-bold mb-20 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 animate-gradient">
              Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="relative group perspective-1000" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-700"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-700 animate-pulse"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-700 animate-pulse delay-150"></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden h-full border border-gray-100 dark:border-gray-700 transform group-hover:rotate-y-3 transition-transform duration-700">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 flex items-end p-8">
                      <div className="flex space-x-6">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-primary-300 transition-colors transform hover:scale-110 hover:rotate-12"
                          >
                            <Github className="w-10 h-10" />
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-primary-300 transition-colors transform hover:scale-110 hover:rotate-12"
                          >
                            <Globe className="w-10 h-10" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-bold mb-6">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-5 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium transform hover:scale-105 transition-transform"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Section (moved and restyled) */}
      <section id="internship" className="py-24 bg-gradient-to-br from-secondary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(0,0,0,0))]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-5xl font-bold mb-20 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 animate-gradient">
              Internships
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {internships.map((intern, idx) => (
              <div
                key={idx}
                className="relative group perspective-1000"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-700"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-700 animate-pulse"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-700 animate-pulse delay-150"></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden h-full border border-gray-100 dark:border-gray-700 transform group-hover:rotate-y-3 transition-transform duration-700 flex flex-col items-center p-10">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 animate-gradient">{intern.role}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">{intern.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{intern.duration}</p>
                    <p className="mb-2 text-gray-700 dark:text-gray-300">{intern.description}</p>
                    {intern.certificateLink && (
                      <a
                        href={intern.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition"
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(0,0,0,0))]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-5xl font-bold mb-20 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 animate-gradient">
              Certifications
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {certifications.map((cert, index) => (
              <div key={index} className="relative group perspective-1000" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-700"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-700 animate-pulse"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-700 animate-pulse delay-150"></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl h-full border border-gray-100 dark:border-gray-700 transform group-hover:rotate-y-3 transition-transform duration-700">
                  <div className="flex items-center mb-8">
                    <div className="p-4 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-xl transform group-hover:rotate-12 transition-transform duration-700">
                      <Award className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-2xl font-bold ml-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 animate-gradient">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                    {cert.date}
                  </p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 group transform hover:translate-x-2 transition-transform duration-700"
                    >
                      View Certificate
                      <Award className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform duration-700" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section with Carousel */}
      <section id="achievements" className="py-24 bg-gradient-to-br from-secondary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(0,0,0,0))]"></div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-5xl font-bold mb-20 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 animate-gradient">
              Achievements
            </span>
          </h2>
          {(() => {
            const [current, setCurrent] = React.useState(0);
            const total = achievements.length;
            const prev = () => setCurrent((c) => (c - 1 + total) % total);
            const next = () => setCurrent((c) => (c + 1) % total);

            return (
              <div className="flex flex-col items-center">
                {/* Description */}
                <div className="mb-8 text-center">
                  <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 animate-gradient">
                    {achievements[current].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 text-lg">
                    {achievements[current].description}
                  </p>
                </div>
                {/* Large Image */}
                <img
                  src={achievements[current].image}
                  alt={achievements[current].title}
                  className="w-full max-w-3xl h-auto object-contain rounded-2xl shadow-xl border-4 border-primary-100 dark:border-primary-900"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1517849845537-4d257902454a";
                  }}
                  data-aos="fade-up"
                />
                {total > 1 && (
                  <div className="flex space-x-4 mt-8">
                    <button
                      onClick={prev}
                      className="px-6 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition"
                      aria-label="Previous Achievement"
                    >
                      &#8592; Prev
                    </button>
                    <button
                      onClick={next}
                      className="px-6 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition"
                      aria-label="Next Achievement"
                    >
                      Next &#8594;
                    </button>
                  </div>
                )}
                {total > 1 && (
                  <div className="flex space-x-2 mt-4">
                    {achievements.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-3 h-3 rounded-full ${current === idx ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text" data-aos="fade-up">
            Contact Me
          </h2>
          <div className="max-w-lg mx-auto">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              data-aos="fade-up"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>
              </div>
              
              {formStatus.error && (
                <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg">
                  {formStatus.error}
                </div>
              )}
              
              {formStatus.success && (
                <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              <button
                type="submit"
                disabled={formStatus.submitting}
                className={`relative group w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 ${formStatus.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <span className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></span>
                <span className="relative flex items-center justify-center">
                  {formStatus.submitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </span>
              </button>
            </form>
            <div className="mt-12 flex justify-center space-x-6" data-aos="fade-up">
              <a
                href="mailto:mishrashashwat112@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transform hover:scale-110 transition-all"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/shashwat-81"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transform hover:scale-110 transition-all"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/shashwat-kumar-mishra-39716b294"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transform hover:scale-110 transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;