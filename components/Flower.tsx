import React from "react";
import Leafs from "./Leafs";
import LineLeafs from "./LineLeafs";

interface FlowerProps {
  flowerClass: string;
  leafsClass: string;
  lineLeafsCount: number;
}

const Flower: React.FC<FlowerProps> = ({
  flowerClass,
  leafsClass,
  lineLeafsCount,
}) => {
  return (
    <div className={`flower ${flowerClass}`}>
      <Leafs leafsClass={leafsClass} />
      <LineLeafs count={lineLeafsCount} />
    </div>
  );
};

export default Flower;
