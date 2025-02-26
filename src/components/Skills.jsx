import { motion, useInView } from 'framer-motion';
import { FaHtml5, FaReact, FaCss3Alt, FaJava } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMysql, SiMongodb } from 'react-icons/si';
import { useRef, useEffect, useState } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const skills = [
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'React', icon: FaReact },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Java', icon: FaJava },
    { name: 'MySQL', icon: SiMysql },
    { name: 'MongoDB', icon: SiMongodb },
  ];

  return (
    <section ref={ref} id="skills" className="py-24 bg-gradient-to-b from-[#1a1a1a] to-[#232323] relative">
      <div
        className="fixed top-0 left-0 w-full h-1 z-50"
        style={{
          background: '#2a2a2a',
        }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-[#c0ff1a] to-[#90e000]"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[#c0ff1a] to-[#90e000] text-transparent bg-clip-text">My Skills</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Here are the technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9, y: isInView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-[#2a2a2a] to-[#323232] p-8 rounded-xl shadow-xl hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-500 text-center backdrop-blur-sm border border-gray-800/20"
            >
              <div className="flex flex-col items-center group">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#3a3a3a] to-[#454545] flex items-center justify-center mb-6 group-hover:from-[#404040] group-hover:to-[#505050] transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <skill.icon className="text-gray-300 text-6xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 group-hover:text-[#c0ff1a] hover:drop-shadow-[0_0_25px_rgba(192,255,26,0.9)]" />
                </div>
                <h3 className="text-white text-2xl font-bold group-hover:text-[#c0ff1a] transition-colors duration-500 mb-2">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;