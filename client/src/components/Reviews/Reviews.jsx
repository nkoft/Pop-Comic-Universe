import "./Reviews.css";

const Reviews = (props) => {
  const { reviews } = props;
  return (
    reviews && (
      <div className="reviews">
        <h3>Reviews:</h3>

        {reviews.map((item, index) => (
          <div></div>
        ))}
      </div>
    )
  );
};

export default Reviews;
