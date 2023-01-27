import wheel from "@/assets/icons/wheel.svg";
import car from "@/assets/icons/car.svg";
import chart from "@/assets/icons/chart.svg";

type IconProps = {
  name: "wheel" | "car" | "chart";
  size: number;
};

export const Icon: React.FC<IconProps> = ({ name, size }) => {
  const icons = {
    wheel,
    car,
    chart,
  };
  return <img src={icons[name]} style={{ width: `${size}vw` }} />;
};
