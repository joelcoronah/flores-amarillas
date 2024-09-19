import Grass from "./Grass";
import GrowAns from "./GrowAns";
import Flower from "./Flower";

export const BunchOfFlowers = () => {
  return (
    <div className="flowers">
      <Flower
        flowerClass="flower--1"
        leafsClass="flower__leafs--1"
        lineLeafsCount={6}
      />
      <Flower
        flowerClass="flower--2"
        leafsClass="flower__leafs--2"
        lineLeafsCount={4}
      />
      <Flower
        flowerClass="flower--3"
        leafsClass="flower__leafs--3"
        lineLeafsCount={4}
      />
      <Flower
        flowerClass="flower--4"
        leafsClass="flower__leafs--3"
        lineLeafsCount={4}
      />

      <GrowAns />

      <Grass grassClass="flower__grass--1" />
      <Grass grassClass="flower__grass--2" />
    </div>
  );
};
