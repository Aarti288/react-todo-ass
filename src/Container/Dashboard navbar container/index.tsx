import Navbarleft from "../../Components/Common Component/Navbar Left";
import Navbarright from "../../Components/Common Component/Navbar right";
import "../Dashboard navbar container/style.css";
function DashboradNavbarcontainer() {
  return (
    <div className="navbar">
      <Navbarleft />
      <Navbarright />
    </div>
  );
}

export default DashboradNavbarcontainer;
