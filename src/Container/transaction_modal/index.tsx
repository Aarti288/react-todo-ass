import "./style.css";
import Transaction_modal_data from "../../Components/transaction-modal-data";
import downloadimg from "../../Components/images/download_img.png";

function Transaction_modal(props: any) {
  let transactionID = "Transaction ID";
  let transactiondetails = "2011002039111";

  let transactionDate = "Date";
  let transactionStatus = "status";

  let transactiondateDetails = "22-09-2021";

  let transactionstatusname = "Approved";

  let transactionComments = "Comments";

  let transactionComentsData = "Against invoice IN00021009";
  let transferto = "Transfer To";

  let transfertowhom = "XYZ corporation";

  let Amount = "Amount";
  let Amountvalue = "1,780";
  let Action = "Action";

  return (
    <div className="transaction-modal">
      <label className="transaction-details-label">Transaction Details</label>

      <hr className="horizontal-transaction"></hr>
      <div className="transaction">
        <div className="transaction-data">
          <div className="upper-">
            <Transaction_modal_data
              transactioncategory={transactionID}
              transactiondata={props.id}
            />
            <Transaction_modal_data
              transactioncategory={transactionDate}
              transactiondata={props.date}
            />
            <Transaction_modal_data
              transactioncategory={transactionStatus}
              transactiondata={props.status}
            />
            <Transaction_modal_data
              transactioncategory={transactionComments}
              transactiondata={transactionComentsData}
            />
          </div>
          <div className="below-">
            <Transaction_modal_data
              transactioncategory={transferto}
              transactiondata={transfertowhom}
            />
            <Transaction_modal_data
              transactioncategory={Amount}
              transactiondata={props.amount}
            />

            <Transaction_modal_data
              transactioncategory={Action}
              transactiondata={props.Action}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction_modal;
