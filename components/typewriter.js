import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Typewriter = ({ text }) => {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const nextChar = text.charAt(visibleText.length);
      setVisibleText((prevVisibleText) => prevVisibleText + nextChar);
    }, 100); // Adjust typing speed here (in milliseconds)

    return () => clearInterval(interval);
  }, [text, visibleText]);

  return <motion.span>{visibleText}</motion.span>;
};

export default Typewriter;
