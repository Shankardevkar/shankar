import { motion } from 'framer-motion';

const Avatar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto md:mx-0"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#c0ff1a] to-[#1a1a1a] animate-pulse">
        <img
          src="https://img.freepik.com/premium-photo/cute-anime-boy-wallpaper_776894-111254.jpg?w=1060"
          alt="Anime Boy Avatar"
          className="w-full h-full object-cover rounded-full p-1"
        />
      </div>
    </motion.div>
  );
};

export default Avatar;