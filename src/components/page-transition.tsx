'use client'
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import WaterDrop from "./waterdrop";

const PageTransition = () => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Trigger the transition when the pathname changes
    setIsTransitioning(true);

    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Adjust the timeout duration to match your animation

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [pathname]);

  return (
    <>
      {isTransitioning && <WaterDrop isVisible={true} />}
    </>
  );
};

export default PageTransition;