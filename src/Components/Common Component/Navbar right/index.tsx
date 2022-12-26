import "./style.css";
import bellicon from "../../images/notification.png";
import arrowIcon from "../../images/drop_down.png";
import { useState } from "react";
import { AccountType } from "../../../Types";
import { connect } from "react-redux";
import ProfileData from "../../ProfileData";

function Navbarright(props: any) {
  // console.log(">>>>>>>>>navbar", props);
  const [displayprofile, setdisplayprofile] = useState(false);

  function handleClick() {
    if (displayprofile) {
      setdisplayprofile(false);
    } else {
      setdisplayprofile(true);
    }
  }
  return (
    <>
      <div>
        <div className="navbar-right">
          <img className="bell-icon" src={bellicon} />
          <div className="Profile-icon" onClick={handleClick}>
            <label className="profile-person-name">
              {props.userData.Fullname[0]}
            </label>
          </div>

          <div className="Profile-arrow-icon">
            <img className="arrow-icon" src={arrowIcon} onClick={handleClick} />
          </div>
        </div>
        <div>{displayprofile ? <ProfileData /> : ""}</div>
      </div>
    </>
  );
}
const mapstatetoprops = (state: any) => {
  // console.log(">>>>>>>>>>>.", state.validationReducer);
  return {
    userData: state.validationReducer.userData,
  };
};

export default connect(mapstatetoprops, null)(Navbarright);
