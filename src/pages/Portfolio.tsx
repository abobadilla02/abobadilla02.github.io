import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  year: string;
};

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Medium & WhatsApp Scheduler",
      description: "A comprehensive scheduling and publishing application for Medium and WhatsApp content management. Features automated posting, content calendar, and analytics dashboard.",
      image: "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Medium+WhatsApp+Scheduler",
      technologies: ["React", "Node.js", "MongoDB", "WhatsApp API", "Medium API"],
      githubUrl: "#",
      liveUrl: "#",
      year: "2024"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern web technologies and responsive design.",
      image: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=E-commerce+Platform",
      technologies: ["Angular", "Python", "PostgreSQL", "Stripe API", "AWS"],
      githubUrl: "#",
      liveUrl: "#",
      year: "2023"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and progress tracking. Designed for remote teams.",
      image: "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Task+Management+App",
      technologies: ["React", "TypeScript", "Socket.io", "Express", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
      year: "2023"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts, interactive maps, and customizable widgets. Integrates with multiple weather APIs.",
      image: "https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Weather+Dashboard",
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js", "TailwindCSS"],
      githubUrl: "#",
      liveUrl: "#",
      year: "2023"
    }
  ];

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const handleProjectLink = (url: string): void => {
    if (url !== '#') {
      window.open(url, '_blank');
    }
  };

  return (
    <main className="max-w-6xl mx-auto" role="main">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Portfolio
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A collection of projects showcasing my skills in fullstack development, 
          from web applications to cloud infrastructure solutions.
        </p>
      </motion.section>

      <section className="grid md:grid-cols-2 gap-8" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="sr-only">Project Portfolio</h2>
        {projects.map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={`Screenshot of ${project.title} project`}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onKeyDown={(e) => handleKeyDown(e, () => handleProjectLink(project.githubUrl))}
                  className="p-2 bg-black bg-opacity-50 text-white rounded-lg hover:bg-opacity-70 transition-all duration-200"
                  aria-label={`View ${project.title} source code on GitHub`}
                  tabIndex={0}
                >
                  <Github className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onKeyDown={(e) => handleKeyDown(e, () => handleProjectLink(project.liveUrl))}
                  className="p-2 bg-black bg-opacity-50 text-white rounded-lg hover:bg-opacity-70 transition-all duration-200"
                  aria-label={`View ${project.title} live demo`}
                  tabIndex={0}
                >
                  <ExternalLink className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-1" aria-hidden="true" />
                  <time>{project.year}</time>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onKeyDown={(e) => handleKeyDown(e, () => handleProjectLink(project.githubUrl))}
                  className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                  aria-label={`View ${project.title} source code`}
                  tabIndex={0}
                >
                  <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                  View Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onKeyDown={(e) => handleKeyDown(e, () => handleProjectLink(project.liveUrl))}
                  className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  aria-label={`View ${project.title} live demo`}
                  tabIndex={0}
                >
                  <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <a
          href="https://github.com/abobadilla02"
          target="_blank"
          rel="noopener noreferrer"
          onKeyDown={(e) => handleKeyDown(e, () => window.open('https://github.com/abobadilla02', '_blank'))}
          className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
          aria-label="View more projects on GitHub"
          tabIndex={0}
        >
          <Github className="w-5 h-5 mr-2" aria-hidden="true" />
          View More on GitHub
        </a>
      </motion.section>
    </main>
  );
};

export default Portfolio; 