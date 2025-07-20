import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, MessageCircle } from 'lucide-react';

type ContactMethod = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
};

type InterestItem = {
  text: string;
  color: string;
};

const Contact: React.FC = () => {
  const contactMethods: ContactMethod[] = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      description: "Connect with me professionally",
      link: "https://www.linkedin.com/in/alonsobobadilla/",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      description: "Check out my code and projects",
      link: "https://github.com/abobadilla02",
      color: "bg-gray-800 hover:bg-gray-900"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Send me a direct message",
      link: "mailto:alonso.bobadilla.montoya@gmail.com",
      color: "bg-red-600 hover:bg-red-700"
    }
  ];

  const lookingFor: InterestItem[] = [
    { text: "Remote-first opportunities", color: "bg-blue-600 dark:bg-blue-400" },
    { text: "Fullstack development roles", color: "bg-blue-600 dark:bg-blue-400" },
    { text: "Teams that value clean code", color: "bg-blue-600 dark:bg-blue-400" },
    { text: "Mentorship opportunities", color: "bg-blue-600 dark:bg-blue-400" }
  ];

  const expertise: InterestItem[] = [
    { text: "Angular (4-18) & TypeScript", color: "bg-green-600 dark:bg-green-400" },
    { text: "Python & NodeJS development", color: "bg-green-600 dark:bg-green-400" },
    { text: "AWS (Lambda, S3, Cognito, DynamoDB)", color: "bg-green-600 dark:bg-green-400" },
    { text: "Team leadership & mentoring", color: "bg-green-600 dark:bg-green-400" }
  ];

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const handleContactLink = (link: string): void => {
    if (link.startsWith('mailto:')) {
      window.location.href = link;
    } else {
      window.open(link, '_blank');
    }
  };

  return (
    <main className="max-w-4xl mx-auto" role="main">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, 
          or just having a chat about technology and remote work culture.
        </p>
      </motion.section>

      <section className="grid md:grid-cols-3 gap-8 mb-12" aria-labelledby="contact-methods-heading">
        <h2 id="contact-methods-heading" className="sr-only">Contact Methods</h2>
        {contactMethods.map((method, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="text-center"
          >
            <a
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              onKeyDown={(e) => handleKeyDown(e, () => handleContactLink(method.link))}
              className={`inline-flex items-center justify-center w-16 h-16 ${method.color} text-white rounded-full mb-4 transition-colors duration-200`}
              aria-label={`Connect via ${method.title}`}
              tabIndex={0}
            >
              {method.icon}
            </a>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {method.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {method.description}
            </p>
            <a
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              onKeyDown={(e) => handleKeyDown(e, () => handleContactLink(method.link))}
              className="text-blue-600 dark:text-blue-400 hover:underline"
              aria-label={`Connect via ${method.title}`}
              tabIndex={0}
            >
              Connect →
            </a>
          </motion.article>
        ))}
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        aria-labelledby="work-together-heading"
      >
        <div className="text-center mb-6">
          <MessageCircle className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" aria-hidden="true" />
          <h2 id="work-together-heading" className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            Let's Work Together
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            I'm particularly interested in:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              What I'm Looking For:
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              {lookingFor.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className={`w-2 h-2 ${item.color} rounded-full mt-2 mr-3 flex-shrink-0`} aria-hidden="true"></span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              My Expertise:
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              {expertise.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className={`w-2 h-2 ${item.color} rounded-full mt-2 mr-3 flex-shrink-0`} aria-hidden="true"></span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mt-12"
      >
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Currently available for new opportunities
        </p>
        <a
          href="mailto:alonso.bobadilla.montoya@gmail.com"
          onKeyDown={(e) => handleKeyDown(e, () => window.location.href = 'mailto:alonso.bobadilla.montoya@gmail.com')}
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          aria-label="Send me an email"
          tabIndex={0}
        >
          <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
          Send me an email
        </a>
      </motion.section>
    </main>
  );
};

export default Contact; 