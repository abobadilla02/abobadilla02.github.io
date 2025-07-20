import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Heart } from 'lucide-react';

type Value = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type TimelineItem = {
  year: string;
  role: string;
  company: string;
  description: string;
};

const About: React.FC = () => {
  const values: Value[] = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Async Work Culture",
      description: "Believe in the power of asynchronous communication and flexible work schedules that respect individual productivity patterns."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and methodologies to stay current in the ever-evolving tech landscape."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Remote Collaboration",
      description: "Expert in building and maintaining strong team relationships across different time zones and cultures."
    }
  ];

  const timeline: TimelineItem[] = [
    {
      year: "2021 - Present",
      role: "Senior Software Engineer & Team Lead",
      company: "Airnguru",
      description: "Leading cross-functional teams, mentoring developers, and implementing high-impact features using Angular, TypeScript, Python, and AWS."
    },
    {
      year: "2020 - 2021",
      role: "Frontend Developer",
      company: "Airnguru",
      description: "Developed custom Angular libraries and web modules, integrated AWS Cognito authentication, and created reusable components."
    },
    {
      year: "2018 - 2020",
      role: "Frontend Developer",
      company: "Nobilis",
      description: "Added features using Angular and NodeJS, refactored application modules, and implemented automatic testing frameworks."
    }
  ];

  return (
    <main className="max-w-4xl mx-auto" role="main">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          About Me
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm a Senior Software Engineer & Team Lead with 7+ years of experience developing web applications using Angular, TypeScript, and Python under AWS cloud infrastructure. 
          I focus on creating robust software solutions with high-quality, reusable code and have experience leading cross-functional teams. 
          My approach combines technical excellence with mentorship and team growth.
        </p>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
        aria-labelledby="values-heading"
      >
        <h2 id="values-heading" className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
          My Values
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        aria-labelledby="timeline-heading"
      >
        <h2 id="timeline-heading" className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
          Professional Journey
        </h2>
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-blue-600"
            >
              <div className="flex items-center mb-2">
                <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" aria-hidden="true" />
                <time className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {item.year}
                </time>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                {item.role}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {item.company}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default About; 