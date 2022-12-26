import "../Forgot Password/style.css";
function ForgotPassword(Props: any) {
  return (
    <div className="App">
      <p className="forgot-password">{Props.forgotPassword}</p>
    </div>
  );
}

export default ForgotPassword;
