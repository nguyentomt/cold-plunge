'use client'
import React, { useEffect, useState } from "react";

interface BubbleProps {
  delay: number;
  duration: number;
  xPosition: number;
}

const Bubble: React.FC<BubbleProps> = ({ delay, duration, xPosition }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      className={`bubble ${visible ? "visible" : ""}`}
      style={{
        left: `${xPosition}%`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}ms`,
      }}
    />
  );
};

export default Bubble;