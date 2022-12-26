import "./style.css";

interface UpperImageType {
  upperImages: string;
}

function UpperImage(props: { upperImages: string }) {
  return (
    <div className="upper">
      <img className="upper-image" src={props.upperImages} alt="Logo" />
    </div>
  );
}

export default UpperImage;
