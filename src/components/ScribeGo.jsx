// src/components/ScribeGo.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import scribegoImage from "../assets/scribego.png";
import RotatingBoards from "./RotatingBoards"; // Import the RotatingBoards component

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};

const ScribeGo = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation when the component is mounted
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      className="scribego-section min-h-screen text-neutral-300 p-8 flex flex-col items-center justify-between relative overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      
      {/* RotatingBoards component with animation */}
      <motion.div
        className="flex justify-center itaems-center mb-80 ml-[-300px]" style={{ marginTop: '-0px' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <RotatingBoards />
      </motion.div>
      
      {/* Animated ScribeGo title */}
      <motion.h1
        className="text-5xl font-bold text-center mb-10 mt-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        ScribeGo
      </motion.h1>
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Image with animation */}
        <motion.img
          src={scribegoImage}
          alt="ScribeGo App Screenshot"
          className="w-48 h-48 lg:w-64 lg:h-64 object-cover shadow-lg rounded-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        {/* Description with animation */}
        <motion.div
          className="lg:w-1/2 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-xl leading-relaxed mb-4">
            ScribeGo is an innovative iOS app that allows users to study and replay professional Go matches with ease. 
            Experience Go in a new way by accessing top-tier game reviews and strategies right from your mobile device!
          </p>
          <p className="text-xl leading-relaxed mb-4">
            Learn from the best, explore a vast library of professional Go games, and improve your skills with interactive 
            features that make studying Go enjoyable and accessible.
          </p>
          
          {/* Centering the button with animation */}
          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <a
              href="https://apps.apple.com/us/app/scribego/id6476177124"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-500 text-white py-3 px-6 rounded-full text-xl hover:bg-cyan-700 transition-colors duration-300 ease-in-out"
            >
              Download ScribeGo on the App Store
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Additional spacing at the bottom */}
      <div className="mb-32"></div>
    </motion.div>
  );
};

export default ScribeGo;
