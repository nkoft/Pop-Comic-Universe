import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Reviews from "../../components/Reviews/Reviews";
import { getOneComic } from "../../services/comics";
import "./ComicDetail.css";

const ComicDetail = (props) => {
  const [comic, setComic] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchComic = async () => {
      const result = await getOneComic(id);
      console.log(result);
      setComic(result);
    };
    fetchComic();
  }, []);

  return (
    <Layout user={props.user}>
      <div className="parallax">
        <div className="comic-detail">
          <img
            className="comic-detail-image"
            src={comic.image_url}
            alt={comic.title}
          />

          <div className="detail">
            <div className="title">{comic.title}</div>
            <div className="brand">{comic.brand}</div>

            <div className="date"> Release Date: {comic.date}</div>
            <div className="writer">Writer : {comic.writer}</div>
            <div className="artist">Artist : {comic.artist}</div>
            <div className="synopsis">Synopsis : {comic.synopsis}</div>
          </div>
          <Reviews reviews={comic.reviews} />
        </div>
        <Link className="edit-button" to={`/comics/${comic.id}/edit`}>
          <button className="edit-btn">Edit</button>
        </Link>
      </div>
    </Layout>
  );
};

export default ComicDetail;
