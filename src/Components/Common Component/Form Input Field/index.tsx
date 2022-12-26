import "./style.css";
function FormInputBox(Props: {
  type: string;
  value: string;
  onChange: any;
  name: string;
  placeholder: string;
}) {
  return (
    <div className="App">
      <input
        className="Email-field"
        type={Props.type}
        value={Props.value}
        onChange={Props.onChange}
        name={Props.name}
        placeholder={Props.placeholder}
      />
    </div>
  );
}

export default FormInputBox;
