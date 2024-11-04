'use client'
import { FC } from "react";

interface WaterDropProps {
    isVisible: boolean;
}

const WaterDrop: FC<WaterDropProps> = ({ isVisible }) => {
  return (
    <div className={`waterDrop ${isVisible ? `show` : ""}`} />
  );
};

export default WaterDrop;
