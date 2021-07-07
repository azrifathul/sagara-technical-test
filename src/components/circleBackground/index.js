import { useLocation } from "react-router-dom";
import "./styles.scss";

const CircleBackground = () => {
  const location = useLocation();
  return (
    <div
      className={`circle-container ${
        location.pathname === "/register" && "left-position"
      }`}
    ></div>
  );
};

export default CircleBackground;
