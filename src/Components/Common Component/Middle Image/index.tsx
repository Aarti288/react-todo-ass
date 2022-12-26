import "../Middle Image/style.css";
import middleImage from "../../images/middleImg.png";

function MiddleImage(props: any) {
  return (
    <div className="middle">
      <img className="middle-image" src={middleImage} />
    </div>
  );
}

export default MiddleImage;
