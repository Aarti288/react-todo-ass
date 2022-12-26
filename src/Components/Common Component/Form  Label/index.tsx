import "./style.css";
function FormLabel(Props: { formlabel: string }) {
  return (
    <div className="App">
      <label className="email-label">{Props.formlabel}</label>
    </div>
  );
}
export default FormLabel;
