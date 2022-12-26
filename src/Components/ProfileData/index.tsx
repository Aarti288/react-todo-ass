import React, { useState } from "react";
import currentAccountImg from "../../Components/Assets/create_account.png";
import "../ProfileData/style.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import EditProfileContainer from "../../Container/EditProfileContainer";

const ProfileData = (props: any) => {
  // console.log(">>>>>>>>>", props);
  return (
    <div className="profile-data">
      <div className="Profile-circle">
        <div className="profile-circle-text">{props.userData.Fullname[0]}</div>
      </div>

      <div className="user-name">{props.userData.Fullname}</div>
      <div className="user-email">{props.userData.Email}</div>
      <div className="border"></div>
      <Link to="/EditProfileContainer" className="link">
        Edit Profile
      </Link>

      <div className="border-up"></div>
      <div className="link">Settings</div>
      <div className="border"></div>

      <Link to="/" className="link">
        Logout
      </Link>
    </div>
  );
};
const mapstatetoprops = (state: any) => {
  // console.log(">>>>>>>>>>>.", state.validationReducer);
  return {
    userData: state.validationReducer.userData,
  };
};
export default connect(mapstatetoprops, null)(ProfileData);
