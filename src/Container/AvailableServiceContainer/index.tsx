import React, { ReactNode } from "react";
import AvailableServiceData from "../../Components/AvailableServiceData";
import "../AvailableServiceContainer/style.css";

function AvailableServicecontainer() {
  return (
    <div className="available-data-container">
      <div className="available-heading">Available Services</div>
      <AvailableServiceData />
    </div>
  );
}

export default AvailableServicecontainer;
