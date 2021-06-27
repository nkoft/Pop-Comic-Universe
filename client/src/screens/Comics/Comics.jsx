import { React, useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getAllComics } from "../../services/comics";
import "./Comics.css";

const ComicBook = (props) => {
  const {
    detail: { id, artist, brand, image_url, title },
  } = props;
  console.log(111, props.detail);
  return (
    <div className="comic-item">
      <img src={image_url} alt={title} />
    </div>
  );
};

const Comics = (prop) => {
  const [comics, setComics] = useState([]);

  useEffect(async () => {
    const comics = await getAllComics();
    setComics(comics);
  }, []);

  return (
    <Layout user={prop.user}>
      <div className="comic-list">
        {comics.length ? (
          comics.map((c, index) => <ComicBook key={index} detail={c} />)
        ) : (
          <div>empty list</div>
        )}
      </div>
    </Layout>
  );
};

export default Comics;
