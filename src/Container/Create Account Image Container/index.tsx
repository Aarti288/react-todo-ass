import UpperImage from "../../Components/Common Component/UpperImage";
import BelowImage from "../../Components/Common Component/Below Image";
import MiddleImage from "../../Components/Common Component/Middle Image";
import MicroBankImage from "../../Components/Common Component/MicroBank Image";
import "../Create Account Image Container/style.css";

import upperImg from "../../Components/images/Group7.png";
import belowImg from "../../Components/images/Union.png";
import middleimg from "../../Components/images/middleImg.png";
import microbankimg from "../../Components/images/MicroBank.png";

function CreateImageContainer() {
  return (
    <div className="Create-image-container">
      <UpperImage upperImages={upperImg} />
      <MiddleImage middleImage={middleimg} />
      <MicroBankImage microbankImages={microbankimg} />
      <BelowImage BelowImages={belowImg} />
    </div>
  );
}

export default CreateImageContainer;
