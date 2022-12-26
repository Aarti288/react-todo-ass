import "../SummaryData/style.css";
let id = 1;
function SummaryData() {
  const SummaryData = [
    {
      title: "Account Number",
      Amount: "67238744",
    },
    {
      title: "Income",
      Amount: "$20,00,000",
    },
    {
      title: "Spends",
      Amount: "$11,00,000",
    },
  ];

  const summary = SummaryData.map((element) => {
    return (
      <div className="summary-Data">
        <div className="summary-title">{element.title}</div>
        <div className="summary-amount">{element.Amount}</div>
      </div>
    );
  });
  return (
    <div className="sumary-details">
      <div className="summary-heading">Summary </div>
      <div className="summary">{summary}</div>
    </div>
  );
}

export default SummaryData;
