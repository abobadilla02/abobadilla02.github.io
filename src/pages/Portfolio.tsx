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
      title: "Personal Portfolio Website",
      description: "Modern, responsive personal portfolio built with React, TypeScript, and TailwindCSS. Features dark mode, smooth animations, and accessibility-first design with professional presentation of skills and projects.",
      image: "https://picsum.photos/400/250?random=1",
      technologies: ["React 19", "TypeScript", "TailwindCSS", "Framer Motion", "React Router", "GitHub Pages"],
      githubUrl: "https://github.com/abobadilla02/abobadilla02.github.io",
      liveUrl: "https://abobadilla02.github.io",
      year: "2025"
    },
    {
      title: "Medium Post Integration & Scheduler",
      description: "Fullstack web application for scheduling and publishing posts to Medium using React, TypeScript, GraphQL, and Node.js. Features real-time updates, flexible scheduling, and modern UI with toast notifications.",
      image: "https://picsum.photos/400/250?random=2",
      technologies: ["React 18", "TypeScript", "GraphQL", "Apollo Client", "Node.js", "MongoDB", "Node-cron"],
      githubUrl: "https://github.com/abobadilla02/medium-post-integration",
      liveUrl: "#",
      year: "2025"
    },
    {
      title: "Custom Angular Library & PDF Creator",
      description: "Developed a custom Angular library with dynamic slides creator and server-side PDF generator using Puppeteer. Reduced PDF creation time by 90% and improved accuracy by 70%.",
      image: "https://picsum.photos/400/250?random=3",
      technologies: ["Angular 11-18", "TypeScript", "Puppeteer", "NodeJS", "AWS Lambda"],
      githubUrl: "#",
      liveUrl: "#",
      year: "2023"
    },
    {
      title: "Real-time Notification System",
      description: "Designed and implemented a notification flow using AppSync and DynamoDB Streams. Eliminated polling bottlenecks by creating real-time updates when new data is added to the database.",
      image: "https://picsum.photos/400/250?random=4",
      technologies: ["AWS AppSync", "DynamoDB Streams", "GraphQL", "TypeScript", "Angular"],
      githubUrl: "#",
      liveUrl: "#",
      year: "2022"
    },
    {
      title: "CloudFormation Infrastructure",
      description: "Created comprehensive CloudFormation templates to replicate complete AWS stacks across different customers. Automated infrastructure deployment and management.",
      image: "https://picsum.photos/400/250?random=5",
      technologies: ["AWS CloudFormation", "AWS Lambda", "S3", "Cognito", "DynamoDB", "Step Functions"],
      githubUrl: "#",
      liveUrl: "#",
      year: "2022"
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
                {project.githubUrl && project.githubUrl !== "#" ? (
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
                ) : (
                  <div className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-600">
                    <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                    Private Project
                  </div>
                )}
                {project.liveUrl && project.liveUrl !== "#" ? (
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
                ) : (
                  <div className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-600">
                    <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
                    Demo Coming Soon
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {/* Academic & Research Projects (GitLab) */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Academic & Research Projects (GitLab)
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Software Product Line Engineering Toolkit
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A set of tools and scripts for modeling, analyzing, and managing software product lines (SPLs). Demonstrates advanced knowledge in feature modeling, variability management, and SPL automation. Used in academic research and teaching.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">Angular</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">Angular</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">SPL</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">Research</span>
            </div>
            <a
              href="https://gitlab.com/abobadilla02"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="View GitLab profile"
            >
              View on GitLab
            </a>
          </div>
        </div>
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
          className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200 mr-4"
          aria-label="View more projects on GitHub"
          tabIndex={0}
        >
          <Github className="w-5 h-5 mr-2" aria-hidden="true" />
          View More on GitHub
        </a>
        <a
          href="https://gitlab.com/abobadilla02"
          target="_blank"
          rel="noopener noreferrer"
          onKeyDown={(e) => handleKeyDown(e, () => window.open('https://gitlab.com/abobadilla02', '_blank'))}
          className="inline-flex items-center px-6 py-3 bg-orange-600 dark:bg-orange-700 text-white rounded-lg hover:bg-orange-700 dark:hover:bg-orange-800 transition-colors duration-200"
          aria-label="View more projects on GitLab"
          tabIndex={0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M22.548 13.297l-2.01-6.187a1.13 1.13 0 0 0-2.148-.01l-1.7 5.1H7.31l-1.7-5.1a1.13 1.13 0 0 0-2.148.01l-2.01 6.187a1.13 1.13 0 0 0 .41 1.27l9.19 6.68a1.13 1.13 0 0 0 1.34 0l9.19-6.68a1.13 1.13 0 0 0 .41-1.27z"/></svg>
          View More on GitLab
        </a>
      </motion.section>
    </main>
  );
};

export default Portfolio; 