import LoginContainer from "../../Container/Login-container";
import ImageContainer from "../../Container/login Image-container";
import "./style.css";
function LoginView() {
  return (
    <div className="login-view">
      <ImageContainer />
      <LoginContainer />
    </div>
  );
}

export default LoginView;
