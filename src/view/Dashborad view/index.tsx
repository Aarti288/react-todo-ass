import DashboradNavbarcontainer from "../../Container/Dashboard navbar container";
import Dashboradcontainer from "../../Container/SummaryDetailsNavbarContainer";
import Summarycontainer from "../../Container/summaryContainer";
import TransactionTableData from "../../Components/TransactionTable";
import "./style.css";
import CurrentServicesContainer from "../../Container/CurrentServicesContainer";
import AvailableServicecontainer from "../../Container/AvailableServiceContainer";
import DashboardpageContainer from "../../Container/DashboardpageContainer";
import { useState } from "react";

function DashboardView() {
  const [toggle, setToggle] = useState(false);
  function handleDashboard(e: any) {
    if (e.target.id === "summary") {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }
  return (
    <div className="dashboard-view">
      <DashboradNavbarcontainer />
      <Dashboradcontainer onClick={handleDashboard} />
      <div>
        {toggle ? <TransactionTableData /> : <DashboardpageContainer />}
      </div>

      {/* <div className="Services-heading">
        Services
        <span className="Services">Micro bank services for you</span>
      </div> */}

      {/* <AvailableServicecontainer /> */}

      {/* <CurrentServicesContainer /> */}
    </div>
  );
}

export default DashboardView;
