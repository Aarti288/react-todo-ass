import LoginView from "./view/Login view";
import CreateAccountView from "./view/Create-account-view";
import "./App.css";
import DashboardView from "./view/Dashborad view";
import EditProfileContainer from "./Container/EditProfileContainer";
import ProfileData from "./Components/ProfileData";
import TransactionTableData from "./Components/TransactionTable";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/Dashboradview" element={<DashboardView />} />
          <Route path="/CreateAccount" element={<CreateAccountView />} />
          <Route
            path="/EditProfileContainer"
            element={<EditProfileContainer />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
