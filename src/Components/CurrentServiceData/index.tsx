import React, { useEffect, useState } from "react";
import currentAccountImg from "../../Components/Assets/create_account.png";
import "../CurrentServiceData/style.css";
import StarRating from "../Star";
import { stardatas } from "../../services/service";

const availabeSData = [
  {
    image: "Assets/create_account.png",
    title: "Current Account",
    rating: 0,
  },
  {
    image: "Assets/payroll.png",
    title: "Payroll",
    rating: 0,
  },

  {
    image: "Assets/payment.png",
    title: "Payment",
    rating: 0,
  },
];
const CurrentServiceData = (props: { menuData: any }) => {
  const [starArray, setStarArray] = useState(availabeSData);
  const [state, isSetState] = useState(false);

  async function getRating() {
    var stardata = await stardatas();
    // console.log(stardata);
    availabeSData.map((data, index) => (data.rating = stardata[index].rating));
    setStarArray(availabeSData);
    isSetState(true);
  }
  useEffect(() => {
    getRating();
  }, [starArray[0].rating, starArray[1].rating, starArray[2].rating]);

  return (
    <div className="sumary-details">
      <div className="available">
        {availabeSData.map((element, index) => {
          return (
            <div key={index} className="summary-Data">
              <img src={element.image} className="available-service-img" />
              <div className="summary-amount">{element.title}</div>
              <div className="star-container"></div>
              <StarRating
                serviceName={availabeSData[index].title + "-" + (index + 1)}
                rating={availabeSData[index].rating}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentServiceData;
