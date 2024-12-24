import { motion } from 'framer-motion';
import cover from "../assets/cover.jpg";
import tony from "../assets/TonyYang.png";
import hanhan from "../assets/HanHan.jpg";
import { useEffect, useState } from 'react';

const pageVariants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};

const Book = () => {
  const [isVisible, setIsVisible] = useState(false);

  // This function will trigger page load animations
  useEffect(() => {
    const timeout = setIsVisible((true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      className="book-section min-h-screen text-neutral-300 relative overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      {/* Floating Stones in the background */}
      <div className="background-stones">
        {/* Add 15 stones (black and white) */}
        <div className="stone stone-black stone1"></div>
        <div className="stone stone-white stone2"></div>
        <div className="stone stone-black stone3"></div>
        <div className="stone stone-white stone4"></div>
        <div className="stone stone-black stone5"></div>
        <div className="stone stone-white stone6"></div>
        <div className="stone stone-black stone7"></div>
        <div className="stone stone-white stone8"></div>
        <div className="stone stone-black stone9"></div>
        <div className="stone stone-white stone10"></div>
        <div className="stone stone-black stone11"></div>
        <div className="stone stone-white stone12"></div>
        <div className="stone stone-black stone13"></div>
        <div className="stone stone-white stone14"></div>
        <div className="stone stone-black stone15"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 justify-center transition-opacity duration-1000 ease-in-out">
        <img
          src={cover}
          alt="Book Cover"
          className="w-full lg:w-1/4 h-auto object-cover"
        />

        {/* Book Title and Description on the right */}
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold">The Theory of Go</h1>
          <p className="text-xl mt-4 leading-relaxed">
            From years of professional experience competing and teaching, this
            book presents seven essential lessons on Go theory that every player
            should know, alongside carefully chosen examples from professional
            games. From this book, readers will uncover the key principles that
            shape strategic thinking in Go and master how to choose their very
            next move.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href="https://www.amazon.com/dp/B0DRBGQ2ZD/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.FzWXr3Vu5N__DT_6rwNI5QAegsotRoYr-2hv_mKOrCs1usUyyFgB2kNJwEQXVeSEGpFXciUkWI6bWjATDVkB4vCFU30oaEoLXiUdIQnSzzQOB95PvWKvvdiWh8uMjF7QYVdY6fX7Wh5KlLQjuR1IIZpT5FjfTHQq-apkwQlvVjxLl1l5UZpccqZMtQexFzoW-Kbx_YSPY6Cy535zu3DP4cPAQeWKGCGkQMAO8iSS1bk.JSAfrKSHtb-8Q0Ab5QmJJZ-VLV8XuaPjjW_TuT3USzc&qid=1735028220&sr=1-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-800 transition-colors"
            >
              More Info
            </a>
          </div>
        </div>
      </div>

      {/* About the Authors Section */}
      <div className="mt-16">
        <h1 className="text-5xl font-bold text-center transition-opacity duration-1000 ease-in-out">
          About The Authors
        </h1>

        {/* Tony Yang section */}
        <div className={`flex flex-col lg:flex-row items-center justify-center lg:items-start gap-8 mt-8 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="lg:w-1/2 text-left">
            <p className="text-xl leading-relaxed">
              Tony Yang, born on October 20, 2008, is an AGA-rated 7 dan, who is currently a high school
              student in Southern California. He was the back-to-back champion
              of the 2022 & 2023 U.S. Go Congress Open Division, and took 3rd
              place in the 38th World Youth Go Championship. In 2024, he
              launched ScribeGo, an innovative iOS app that allows users to
              study and replay professional Go matches with ease. Moreover, Yang
              has had experience as a teacher, having taught Go at his local
              Chinese school and the San Diego Go Club.
            </p>
          </div>
          <img
            src={tony}
            alt="Tony Yang"
            className="w-full lg:w-1/4 h-auto object-cover"
          />
        </div>

        {/* Han Han section */}
        <div className={`flex flex-col lg:flex-row items-center justify-center lg:items-start gap-8 mt-8 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="lg:w-1/2 text-left">
            <p className="text-xl leading-relaxed">
              Han Han (韩晗), born on July 11, 1989, is a Chinese professional 5P who has had a distinguished
              career in both competition and teaching. He became a professional in 2003 and was promoted to 5P in 2009. In 2012, Han qualified for top 32 of the 1st Bailing Cup. In 2004, he was a member
              of Team Xinxing, the runner-up in the China Weiqi League. Moreover,
              Han took 1st place in the 2022 & 2023 U.S. Go Congress Masters
              Division. He currently teaches Go with students from both the U.S.
              and China.
            </p>
          </div>
          <img
            src={hanhan}
            alt="Han Han"
            className="w-full lg:w-1/4 h-auto object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Book;
