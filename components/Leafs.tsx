import React from "react";
import Lights from "./Lights";

interface LeafsProps {
  leafsClass: string;
}

const Leafs: React.FC<LeafsProps> = ({ leafsClass }) => {
  return (
    <div className={`flower__leafs ${leafsClass}`}>
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className={`flower__leaf flower__leaf--${index + 1}`}
        ></div>
      ))}

      <div className="flower__white-circle"></div>

      <Lights lightsClass="flower__leaf flower__leaf" />
    </div>
  );
};

export default Leafs;
