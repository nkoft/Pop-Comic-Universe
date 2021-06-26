import "./Home.css";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h2>
          Welcome to POP COMICS UNIVERSE. Whether you’re a casual fan or an avid
          reader, come share your thoughts and see what’s trending!
        </h2>

        <div className="home-buttons">
          <Link to="/comics">
            <button>Press Play</button>
          </Link>
          <Link to="/auth/login">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
