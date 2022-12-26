import "./style.css";

function Transaction_modal_data(props: {
  transactioncategory: string;
  transactiondata: string;
}) {
  return (
    <div className="transaction-modal-data">
      <span className="transaction-details-label-data">
        {props.transactioncategory}
      </span>
      <span className="transaction-details-data">{props.transactiondata}</span>
    </div>
  );
}

export default Transaction_modal_data;
