import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SYMBOLS = "=◇:○^/,%&$(#&$,^(#&#^#,*&%^$*#,)(#&$^#";

function randomChar() {
  return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
}

export default function HoverScrambleText({
  text,
  speed = 30,
  className = "",
}) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);

  const startScramble = () => {
    let iteration = 0;

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, i) =>
            i < iteration ? char : randomChar()
          )
          .join("")
      );

      iteration += 0.5;
    }, speed);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setDisplayText(text);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <motion.span
      className={`font-mono cursor-pointer ${className}`}
      onMouseEnter={startScramble}
      onMouseLeave={stopScramble}
      whileHover={{
        textShadow: "0px 0px 8px rgba(34,197,94,0.9)",
      }}
    >
      {displayText}
    </motion.span>
  );
}
