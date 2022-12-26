import { Link } from "react-router-dom";
import "../DontHaveAccount/style.css";
function DontHaveAccount(Props: any) {
  return (
    <div className="dont-have-account">
      <span className="Dont-Have-Account">{Props.donthaveaccount}</span>
      <Link to="/CreateAccount" className="Create-Account">
        {Props.createaccount}
      </Link>
    </div>
  );
}

export default DontHaveAccount;
