'use client'
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Bubble from "./bubble";

const BubblesContainer: React.FC = () => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [bubbles, setBubbles] = useState<number[]>([]);

  // Function to generate new bubbles
  const generateBubbles = () => {
    const bubblesArray = Array.from({ length: 6 }, (_, i) => i); // Array of 6 items
    setBubbles(bubblesArray);
  };

  useEffect(() => {
    // Trigger bubbles generation when the pathname changes
    setIsTransitioning(true);
    const timer = setTimeout(() => {
        setIsTransitioning(false);
    }, 1000);
    return () => clearTimeout(timer);
}, [pathname]);

//     // Call the function on initial render
//     handlePathnameChange();

//     // Monitor pathname changes
//     const handlePopState = () => {
//       handlePathnameChange();
//     };

//     window.addEventListener("popstate", handlePopState);
//     window.addEventListener("pushState", handlePopState); // Ensure to listen for pushState as well if using history.pushState

    // Cleanup listeners on unmount
//     return () => {
//       window.removeEventListener("popstate", handlePopState);
//       window.removeEventListener("pushState", handlePopState);
//     };
//   }, [window.location.pathname]);

  return (
    <div className="bubbles-container">
      {bubbles.map((_, i) => (
        <Bubble
          key={i}
          delay={Math.random() * 1000} // Random delay up to 1 second
          duration={2 + Math.random() * 3} // Random duration between 2 and 5 seconds
          xPosition={Math.random() * 100} // Random position along the x-axis
        />
      ))}
    </div>
  );
};

export default BubblesContainer;