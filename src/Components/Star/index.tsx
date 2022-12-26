import { useState } from "react";
import { updateStars } from "../../services/service";
import "./style.css";

function StarRating(props: { serviceName: string; rating: number }) {
  const { serviceName, rating } = props;
  // console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<", props);
  const len = 5;
  const [star, setStar] = useState(rating);
  let stars: JSX.Element[] = [];

  function handleClick(e: any) {
    const starId = e.target.id.split("-");
    const serviceName = starId[0];
    const categoryNumber = parseInt(starId[1]);
    const starCount = parseInt(starId[2]);
    console.log(starCount, "<<<<<<<<<<<<<");
    updateStars(serviceName, categoryNumber, starCount);
    setStar(starCount);
  }

  for (let i = 0; i < len; i++) {
    if (i < star) {
      stars.push(
        <span
          key={i}
          className="fa fa-star"
          style={{ color: "green" }}
          id={serviceName + "-" + (i + 1)}
        />
      );
    } else {
      stars.push(
        <span
          key={i}
          className="fa fa-star"
          style={{ color: "grey" }}
          id={serviceName + "-" + (i + 1)}
        />
      );
    }
  }
  return (
    <div className="star-data" onClick={handleClick}>
      {stars}
    </div>
  );
}
export default StarRating;
