import React from "react";

interface LightsProps {
  lightsClass: string;
}

const Lights: React.FC<LightsProps> = ({ lightsClass }) => {
  return (
    <>
      {[...Array(8)].map((_, index) => (
        <div key={index} className={`${lightsClass}--${index + 1}`}></div>
      ))}
    </>
  );
};

export default Lights;
