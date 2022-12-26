import "./style.css";
import belowImage from "../../Assets/Union.png";
interface BelowImageType {
  BelowImages: string;
}
function BelowImage(props: { BelowImages: string }) {
  return (
    <div className="below">
      <img className="below-image" src={props.BelowImages} />
    </div>
  );
}

export default BelowImage;
