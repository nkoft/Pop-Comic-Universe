import { Link } from "react-router-dom";
import "./Comic.css";

const Comic = (props) => {
  const {
    comicData: { id, artist, writer, brand, image_url, title, date, synopsis },
  } = props;
  return (
    <div className="comic-item">
      <Link className="card" to={`/comics/${id}`}>
        <img className="comic-item-image" src={image_url} alt={title} />
        <div className="comic-item-text">
          <p className="comic-item-title">{title}</p>
          <div className="comic-item-brand">{brand}</div>
        </div>
      </Link>
    </div>
  );
};

export default Comic;
