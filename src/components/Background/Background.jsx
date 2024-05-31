import "./Background.scss";
import Background from "../../assets/images/background.png";

export default function BackgroundRender() {
  return (
    <>
      <div className="background-image">
        <img src={Background} alt="Background" />
      </div>
    </>
  );
}
