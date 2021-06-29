import { useState, useEffect } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { putComic, deleteComic, getOneComic } from "../../services/comics";
import Layout from "../../components/Layout/Layout";
import "./ComicEdit.css";

const ComicEdit = (props) => {
  const [comic, setComic] = useState({
    image_url: "",
    title: "",
    brand: "",
    artist: "",
    writer: "",
    date: "",
    synopsis: "",
  });

  const [isEdited, setEdited] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const grabComic = async () => {
      const comic = await getOneComic(id);
      setComic(comic);
    };
    grabComic();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setComic({
      ...comic,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await putComic(id, comic);
    setEdited(updated);
  };

  if (isEdited) {
    return <Redirect to={`/comics/${id}`} />;
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
          <Link to="/comics">
            <button
              className="delete-button"
              onClick={() => deleteComic(comic.id)}
            >
              Delete
            </button>
          </Link>
        </form>
      </div>
    </Layout>
  );
};
export default ComicEdit;
