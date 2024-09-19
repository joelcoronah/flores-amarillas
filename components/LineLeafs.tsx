import React from "react";

interface LineLeafsProps {
  count: number;
}

const LineLeafs: React.FC<LineLeafsProps> = ({ count }) => {
  return (
    <div className="flower__line">
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className={`flower__line__leaf flower__line__leaf--${index + 1}`}
        ></div>
      ))}
    </div>
  );
};

export default LineLeafs;
