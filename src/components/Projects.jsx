import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Weather App',
      description: 'A responsive weather application that provides real-time weather updates, forecasts, and location-based weather information. Features include temperature display, weather conditions, and hourly/daily forecasts.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Weather API'],
      githubLink: '#',
      liveLink: '#',
      image: '/src/assets/Google-Weather-icon.avif'
    },
    {
      title: 'Currency Converter',
      description: 'An intuitive currency conversion tool that supports multiple currencies with real-time exchange rates. Users can easily convert between different currencies with a clean and user-friendly interface.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Exchange Rate API'],
      githubLink: '#',
      liveLink: '#',
      image: '/src/assets/currencyconverter.jpg'
    },
    {
      title: 'Chat Application',
      description: 'A real-time chat application enabling instant messaging between users. Features include user authentication, private messaging, group chats, and message history.',
      technologies: ['React', 'Node.js', 'Socket.io', 'Tailwind CSS'],
      githubLink: '#',
      liveLink: '#',
      image: '/src/assets/image.png'
    },
    {
      title: 'E-commerce Website',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and secure checkout process. Includes product filtering, search functionality, and responsive design.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      githubLink: '#',
      liveLink: '#',
      image: '/src/assets/images2.webp'
    }
  ];

  return (
    <section ref={ref} id="projects" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9, y: isInView ? 0 : 50 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-[1.02] transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3 hover:text-[#c0ff1a] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#3a3a3a] text-[#c0ff1a] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-[#c0ff1a] transition-colors"
                  >
                    <FaGithub className="text-xl" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-[#c0ff1a] transition-colors"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;