import ABCPVT from "../../images/ABC.png";
import dash from "../../images/dashed.png";
import microbankhead from "../../images/Micro Bank_dashboard.png";
import "./style.css";

function Navbarleft() {
  return (
    <div className="navbar-left">
      <img className="microbank-head" src={microbankhead} />
      <img className="dash-head" src={dash} />
      <img className="ABC-head" src={ABCPVT} />
    </div>
  );
}

export default Navbarleft;
