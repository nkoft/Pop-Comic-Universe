import { NavLink } from "react-router-dom";
import "./Nav.css";

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/comics/create">
      Add New Comic
    </NavLink>
    <NavLink className="link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <div className="nav-unauthenticated">
    <NavLink className="link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link" to="/sign-in">
      Sign In
    </NavLink>
  </div>
);

const alwaysOptions = (
  <>
    <NavLink className="link" to="/comics">
      Comic Books
    </NavLink>
  </>
);

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <div className="links">
          {user && (
            <p className="link-welcome">
              <span className="welcome"> Welcome, {user.username}</span>
            </p>
          )}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
};
export default Nav;
