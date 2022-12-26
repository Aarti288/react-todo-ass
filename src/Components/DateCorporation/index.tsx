import "../DateCorporation/style.css";
function DateOfCorporation(Props: any) {
  return (
    <div className="App">
      <input className="date-corporation" type="date">
        {Props.datecorporation}
      </input>
    </div>
  );
}

export default DateOfCorporation;
