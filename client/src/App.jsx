import "./App.css";
// import Layout from "./components/Layout/Layout";
import Home from "./screens/Home/Home";
import { verifyUser } from "./services/auth";
import { Route, Switch, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const grabUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    grabUser();
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
