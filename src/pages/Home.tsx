import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Users, Globe } from 'lucide-react';

type ValueCard = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

const Home: React.FC = () => {
  const valueCards: ValueCard[] = [
    {
      icon: <Code className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />,
      title: "Clean Code Advocate",
      description: "Writing maintainable, scalable code with best practices and modern technologies.",
      delay: 0.2
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />,
      title: "Mentor & Collaborator",
      description: "Sharing knowledge and helping teams grow through effective mentorship.",
      delay: 0.4
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />,
      title: "Remote Culture Expert",
      description: "Championing async work and distributed team collaboration.",
      delay: 0.6
    }
  ];

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <main className="min-h-screen flex items-center" role="main">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="text-blue-600 dark:text-blue-400">Alonso</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Fullstack Software Engineer passionate about building scalable applications 
            and fostering remote-first, async work cultures.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {valueCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: card.delay }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                {card.icon}
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/portfolio"
              onKeyDown={(e) => handleKeyDown(e, () => window.location.href = '/portfolio')}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              aria-label="View my portfolio projects"
              tabIndex={0}
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/contact"
              onKeyDown={(e) => handleKeyDown(e, () => window.location.href = '/contact')}
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
              aria-label="Get in touch with me"
              tabIndex={0}
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default Home; 