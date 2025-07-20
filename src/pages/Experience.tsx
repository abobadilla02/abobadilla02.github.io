import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

const Experience: React.FC = () => {
  const experiences: Experience[] = [
    {
      role: "Fullstack Software Engineer",
      company: "Various Companies",
      period: "2023 - Present",
      location: "Remote",
      description: "Working on scalable web applications and cloud infrastructure.",
      achievements: [
        "Developed and maintained full-stack applications using Angular and Python",
        "Implemented AWS cloud solutions for scalable infrastructure",
        "Collaborated with distributed teams using async communication practices",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["Angular", "Python", "AWS", "TypeScript", "React", "Node.js"]
    },
    {
      role: "Software Developer",
      company: "Previous Experience",
      period: "2022 - 2023",
      location: "Remote",
      description: "Focused on web development and clean code practices.",
      achievements: [
        "Built responsive web applications with modern frameworks",
        "Implemented RESTful APIs and database integrations",
        "Participated in agile development processes",
        "Contributed to open-source projects"
      ],
      technologies: ["JavaScript", "React", "Node.js", "PostgreSQL", "Git"]
    }
  ];

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <main className="max-w-4xl mx-auto" role="main">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Experience
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          My professional journey in software development, focusing on fullstack solutions 
          and remote collaboration.
        </p>
      </motion.section>

      <section className="space-y-8" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="sr-only">Work Experience</h2>
        {experiences.map((exp, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                    {exp.company}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" aria-hidden="true" />
                      <time>{exp.period}</time>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" aria-hidden="true" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
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
          href="https://www.linkedin.com/in/alonsobobadilla/"
          target="_blank"
          rel="noopener noreferrer"
          onKeyDown={(e) => handleKeyDown(e, () => window.open('https://www.linkedin.com/in/alonsobobadilla/', '_blank'))}
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          aria-label="View full profile on LinkedIn"
          tabIndex={0}
        >
          View Full Profile on LinkedIn
          <ExternalLink className="ml-2 w-5 h-5" aria-hidden="true" />
        </a>
      </motion.section>
    </main>
  );
};

export default Experience; 