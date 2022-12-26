import "../AvailableServiceData/style.css";
import wallets from "../../../public/Assets/wallets.png";

 const availabeSData = [
   {
     image: "Assets/wallets.png",
     title: "Wallets",
   },
   {
     image: "Assets/investments.png",
     title: "Investments",
   },
   {
     image: "Assets/tax_payments.png",
     title: "Tax Payment",
   },
   {
     image: "Assets/payment.png",
     title: "Loan",
   },
 ];
function AvailableServiceData() {
  const Availble = availabeSData.map((element) => {
    return (
      <div className="summary-Data">
        <img src={element.image} className="available-service-img" />
        <div className="summary-amount">{element.title}</div>
      </div>
    );
  });
  return (
    <div className="sumary-details">
      <div className="available">{Availble}</div>
    </div>
  );
}

export default AvailableServiceData;
