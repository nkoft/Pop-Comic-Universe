import "./Reviews.css";
import { useEffect, useState } from "react";

const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(props.reviews);
  }, [props.reviews]);

  return (
    <div>
      <h3>Reviews:</h3>
      {reviews &&
        reviews.map((item, index) => <div key={index}>{item.post}</div>)}
    </div>
  );
};

export default Reviews;
