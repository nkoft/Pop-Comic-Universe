import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Comic from "../../components/Comic/Comic";
import Search from "../../components/Search/Search";
import Sort from "../../components/Sort/Sort";
import { AZ, ZA } from "../../utils/sort";
import { getAllComics } from "../../services/comics";
import "./Comics.css";

const Comics = (props) => {
  const [comics, setComics] = useState([]);
  const [applySort, setApplySort] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [sortType, setSortType] = useState("title-ascending");

  useEffect(() => {
    const fetchComics = async () => {
      const allComics = await getAllComics();
      console.log(allComics);
      setComics(allComics);
      setSearchResult(allComics);
    };
    fetchComics();
  }, []);

  const handleSort = (type) => {
    if (type !== "" && type !== undefined) {
      setSortType(type);
    }
    switch (type) {
      case "title-ascending":
        setSearchResult(AZ(searchResult));
        break;
      case "title-descending":
        setSearchResult(ZA(searchResult));
        break;
    }
  };

  if (applySort) {
    handleSort(sortType);
    setApplySort(false);
  }

  const handleSearch = (event) => {
    const results = comics.filter((comic) =>
      comic.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    console.log(results);
    setSearchResult(results);
    setApplySort(true);
  };

  const handleSubmit = (event) => event.preventDefault();

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
      <div className="comic-card">
        {searchResult.map((comicData, index) => {
          return <Comic comicData={comicData} key={index} />;
        })}
      </div>
    </Layout>
  );
};

export default Comics;
