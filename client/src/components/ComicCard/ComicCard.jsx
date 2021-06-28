import "./ComicCard.css";
import { Link } from "react-router-dom";

const ComicCard = (props) => {
  return (
    <div className="comic-card">
      <Link className="card" to={`/comics/${props._id}`}>
        <img className="comic-card-image" src={props.image_url} />
      </Link>
      <p className="comic-card-title">{props.title}</p>
    </div>
  );
};

export default ComicCard;
