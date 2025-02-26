import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Avatar from './Avatar';

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} id="home" className="min-h-screen flex items-center bg-[#1a1a1a] py-32">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.5 }}
            className="text-white mb-12 md:mb-0 md:w-1/2"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm{' '}
              <motion.div
                className="inline-block"
                initial={{ width: 0 }}
                animate={{ width: isInView ? "auto" : 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ overflow: "hidden", whiteSpace: "nowrap" }}
              >
                <motion.span
                  className="bg-clip-text text-white bg-gradient-to-r from-[#c0ff1a] to-[#1a1a1a] inline-block"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    background: ['#c0ff1a', '#1a1a1a', '#c0ff1a'],
                  }}
                  transition={{
                    opacity: { duration: 0.3, delay: 0.8 },
                    background: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      delay: 1,
                    },
                  }}
                >
                  Shankar
                </motion.span>
              </motion.div>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-gray-400 mb-8 max-w-lg">
              I create beautiful and functional websites that help businesses grow and succeed online.
            </p>
            <div className="flex space-x-6 mb-8">
              <a href="https://github.com/Shankardevkar" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/shankar-devkar-379061342/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#0A66C2] transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.8)]">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#E4405F] transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(228,64,95,0.8)]">
                <FaInstagram size={24} />
              </a>
            </div>
            <a
              href="mailto:shankardevkar09@gmail.com"
              className="px-8 py-3 bg-[#c0ff1a] text-black rounded-md hover:bg-opacity-90 transition-all font-semibold inline-block"
            >
              Get In Touch
            </a>
          </motion.div>
          
          <div className="md:w-1/2">
            <Avatar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;