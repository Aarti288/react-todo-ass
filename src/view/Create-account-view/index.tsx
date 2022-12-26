import CreateAccountContainer from "../../Container/Create-Account-container";
import ImageContainer from "../../Container/login Image-container";
import "../Create-account-view/style.css";
import CreateImageContainer from "../../Container/Create Account Image Container";
function CreateAccountView() {
  return (
    <div className="create-Account-view">
      <CreateImageContainer />
      <CreateAccountContainer />
    </div>
  );
}

export default CreateAccountView;
