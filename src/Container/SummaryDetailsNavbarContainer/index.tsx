import "./style.css";
import ProfileData from "../../Components/ProfileData";
import TransactionTableData from "../../Components/TransactionTable";
import Summarycontainer from "../summaryContainer";
import DashboardpageContainer from "../DashboardpageContainer";

import { useState } from "react";
function Dashboradcontainer(props: any) {
  const [displaysummary, setdisplaysummary] = useState(true);
  const handlesummarydetails = () => {
    if (displaysummary) {
      setdisplaytransaction(false);
    } else {
      setdisplaysummary(true);
    }
  };

  const [displaytransaction, setdisplaytransaction] = useState(false);

  return (
    <div className="Dashboard">
      <div className="Dashboard-heading">Dashboard</div>

      <div className="summary-details-container">
        <p className="summary-container" id="summary" onClick={props.onClick}>
          Summary
        </p>

        <p className="details-container" id="details" onClick={props.onClick}>
          Details
        </p>
      </div>
    </div>
  );
}

export default Dashboradcontainer;
