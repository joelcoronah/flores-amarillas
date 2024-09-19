import { HeartComponent } from "./Heart";

export const ListHearts = () => {
  return (
    <div className="bubbles">
      {[...Array(20).keys()].map((i) => (
        <HeartComponent key={i} />
      ))}
    </div>
  );
};
