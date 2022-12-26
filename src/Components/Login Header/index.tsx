import "../Login Header/style.css";
function FormHeader(Props: any) {
  return (
    <div className="App">
      <h1 className="login-header">{Props.Loginheader}</h1>
    </div>
  );
}

export default FormHeader;
