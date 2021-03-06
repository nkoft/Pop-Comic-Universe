import { useState } from "react";
import { Redirect } from "react-router-dom";
import { postComic } from "../../services/comics";
import Layout from "../../components/Layout/Layout";
import "./ComicCreate.css";

const ComicCreate = (props) => {
  const [comic, setComic] = useState({
    image_url: "",
    title: "",
    brand: "",
    artist: "",
    writer: "",
    date: "",
    synopsis: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setComic({
      ...comic,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await postComic(comic);
    setCreated({ created });
  };
  if (isCreated) {
    return <Redirect to={`/comics`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="comic-edit">
        <div className="image-container">
          <img
            className="edit-comic-img"
            src={comic.image_url}
            alt={comic.name}
          />
        </div>
        <form className="comicEditForm" onSubmit={handleSubmit}>
          <input
            required
            className="edit-input-img-link"
            placeholder="Image Link"
            value={comic.image_url}
            name="image_url"
            onChange={handleChange}
          />
          <input
            className="input-title"
            placeholder="Title"
            value={comic.title}
            name="title"
            required
            autoFocus
            onChange={handleChange}
          />

          <input
            className="input-brand"
            placeholder="Brand Name"
            value={comic.brand}
            name="brand"
            required
            autoFocus
            onChange={handleChange}
          />

          <input
            className="input-date"
            placeholder="Date Published"
            value={comic.date}
            name="date"
            required
            autoFocus
            onChange={handleChange}
          />

          <input
            className="input-writer"
            placeholder="Writer"
            value={comic.writer}
            name="writer"
            required
            autoFocus
            onChange={handleChange}
          />

          <input
            className="input-artist"
            placeholder="Artist"
            value={comic.artist}
            name="artist"
            required
            autoFocus
            onChange={handleChange}
          />

          <textarea
            className="input-synopsis"
            placeholder="Synopsis"
            value={comic.synopsis}
            name="synopsis"
            required
            autoFocus
            onChange={handleChange}
          />
          <button type="submit" className="save-button">
            Save Changes
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ComicCreate;
