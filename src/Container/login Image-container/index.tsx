import UpperImage from "../../Components/Common Component/UpperImage";
import BelowImage from "../../Components/Common Component/Below Image";
import MiddleImage from "../../Components/Common Component/Middle Image";
import MicroBankImage from "../../Components/Common Component/MicroBank Image";
import upperImg from "../../Components/images/Group7.png";
import belowImg from "../../Components/images/Union.png";
import microbankimg from "../../Components/images/MicroBank.png";
import "./style.css";

function ImageContainer() {
  let middleImage, microBankImage;
  return (
    <div className="image-container">
      <UpperImage upperImages={upperImg} />
      <MiddleImage middleImage={middleImage} />
      <MicroBankImage microbankImages={microbankimg} />
      <BelowImage BelowImages={belowImg} />
    </div>
  );
}

export default ImageContainer;
