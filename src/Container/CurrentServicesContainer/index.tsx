import React, { useState } from "react";
import currentAccountImg from "../../Components/Assets/create_account.png";
import CurrentService from "./CurrentServiceApi";
import CurrentServiceData from "../../Components/CurrentServiceData";
import "../CurrentServicesContainer/style.css";
import StarRating from "../../Components/Star";

import { loginUser, stardatas } from "../../services/service";

const CurrentServicesContainer = () => {
  const [menuData, setCurrentService] = useState(CurrentService);
  async function getData() {
    const starData = await stardatas();
    // console.log(">>>>>>>>>>>>>>>", starData);
  }
  getData();

  return (
    <>
      <div className="current-service-container">
        <div className="current-service-title">Current Services</div>
        <div className="current-service-data">
          <CurrentServiceData menuData={menuData} />
        </div>
      </div>
    </>
  );
};
export default CurrentServicesContainer;
