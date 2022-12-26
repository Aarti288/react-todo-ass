import { Link } from "react-router-dom";
import "../DontHaveAccountLogin/style.css";
function DontHaveAccountLogin(Props: any) {
  return (
    <div className="dont-have-create-account">
      <span className="Dont-Have-Account">{Props.donthaveaccount}</span>
      <Link to="/" className="Create-Account">
        {Props.createaccount}
      </Link>
    </div>
  );
}

export default DontHaveAccountLogin;
