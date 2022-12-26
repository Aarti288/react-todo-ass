import SummaryData from "../../Components/SummaryData";
import Summarycontainer from "../summaryContainer";
import "../summaryContainer/style.css";
import AvailableServicecontainer from "../AvailableServiceContainer";
import CurrentServicesContainer from "../CurrentServicesContainer";

function DashboardpageContainer() {
  return (
    <div>
      <Summarycontainer />
      <CurrentServicesContainer />
      <AvailableServicecontainer />
    </div>
  );
}

export default DashboardpageContainer;
