import "./style.css";

interface microbankImgType {
  microbankImages: string;
}
function MicroBankImage(props: { microbankImages: string }) {
  return (
    <div className="micro-Bank">
      <img className="microbank-image" src={props.microbankImages} />
    </div>
  );
}

export default MicroBankImage;
