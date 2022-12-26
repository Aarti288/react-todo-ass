import "./style.css";
function Btn(Props: { btnTitle: string }) {
  return (
    <div className="App">
      <button className="login-btn" type="submit">
        {Props.btnTitle}
      </button>
    </div>
  );
}

export default Btn;
