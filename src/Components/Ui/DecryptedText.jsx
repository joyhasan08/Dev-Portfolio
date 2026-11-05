import { useEffect, useState, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

const DecryptedText = ({
  text = '',
  speed = 40,
  maxIterations = 10,
  characters = CHARS,
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  revealDirection = 'start'
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const startAnimation = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }
      iteration += 1 / (maxIterations / text.length || 1);
    }, speed);
  };

  useEffect(() => {
    if (animateOn === 'view') {
      startAnimation();
    }
    return () => clearInterval(intervalRef.current);
  }, [text, animateOn]);

  const handleMouseEnter = () => {
    if (animateOn === 'hover') {
      setIsHovered(true);
      startAnimation();
    }
  };

  return (
    <span
      className={parentClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={isHovered ? encryptedClassName : className}>
        {displayText}
      </span>
    </span>
  );
};

export default DecryptedText;

