import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./screens/Home/Home";
import Comics from "./screens/Comics/Comics";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import SignOut from "./screens/SignOut/SignOut";
import ComicDetail from "./screens/ComicDetail/ComicDetail";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";

function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const grabUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    grabUser();
  }, []);

  const handleLogin = async (formData) => {
    const user = await loginUser(formData);
    setUser(user);
    history.push("/comics");
  };

  const handleRegister = async (formData) => {
    const user = await registerUser(formData);
    setUser(user);
    history.push("/comics");
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route exact path="/comics">
          <Comics user={user} />
        </Route>
        <Route exact path="/comics/:id">
          <ComicDetail user={user} />
        </Route>
        <Route exact path="/sign-in">
          <SignIn handleLogin={handleLogin} />
        </Route>
        <Route exact path="/sign-up">
          <SignUp handleRegister={handleRegister} />
        </Route>
        <Route exact path="/comics">
          {/* <SignOut handleLogout={handleLogout} /> */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
