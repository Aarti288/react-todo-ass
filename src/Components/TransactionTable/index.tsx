import { useState } from "react";
import "../TransactionTable/style.css";
import Transaction_modal from "../../Container/transaction_modal";

function TransactionTableData() {
  const data = [
    {
      id: "2011002039111",
      date: "22 - 9 - 2021",
      Amount: "1,890",
      Status: "Approved",
      Action1: "Assets/Transaction_eye.png",
      Action: "Assets/download_img.png",
    },
    {
      id: "2011002039112",
      date: "19 - 9 - 2021",
      Amount: "1,890",
      Status: "Approved",
      Action1: "Assets/Transaction_eye.png",
      Action: "Assets/download_img.png",
    },
    {
      id: "2011002039113",
      date: "20 - 8 - 2021",
      Amount: "1,780",
      Status: "Rejected",
      Action1: "Assets/Transaction_eye.png",
      Action: "Assets/download_img.png",
    },
    {
      id: "2011002039114",
      date: "12 - 7 - 2021",
      Amount: "1,890",
      Status: "Approved",
      Action1: "Assets/Transaction_eye.png",
      Action: "Assets/download_img.png",
    },
    {
      id: "2011002039111",
      date: " 12 - 7 - 2021",
      Amount: "2,800",
      Status: "Rejected",
      Action1: "Assets/Transaction_eye.png",
      Action: "Assets/download_img.png",
    },
  ];

  let [id, setID] = useState("");
  let [date, setDate] = useState("");
  let [amount, setAmount] = useState("");
  let [status, setStatus] = useState("");
  let [Action, setAction] = useState("");

  const [toggle, setToggle] = useState(false);

  function sendData(
    ID: string,
    Date: string,
    Amount: string,
    Status: string,
    Action: any
  ) {
    setID((id = ID));
    setDate((date = Date));
    setAmount((amount = Amount));
    setStatus((status = Status));
    setAction((Action = Action));

    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }

  return (
    <div className="Transaction-details">
      <table id="transaction-table">
        <tbody>
          <tr className="tr">
            <th className="Transaction-header">Transaction ID</th>
            <th className="Transaction-header">Date</th>
            <th className="Transaction-header">Amount</th>
            <th className="Transaction-header">Status</th>
            <th className="Transaction-header">Action</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr
                key={key}
                onClick={() =>
                  sendData(val.id, val.date, val.Amount, val.Status, val.Action)
                }
              >
                <td>{val.id}</td>
                <td>{val.date}</td>
                <td>{val.Amount}</td>
                <td>{val.Status}</td>
                <td>
                  <img src={val.Action1}></img>
                  <img src={val.Action}></img>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="modal-container">
        {toggle ? (
          <Transaction_modal
            id={id}
            date={date}
            status={status}
            amount={amount}
            Action={Action}
          />
        ) : (
          " "
        )}
      </div>
    </div>
  );
}

export default TransactionTableData;
