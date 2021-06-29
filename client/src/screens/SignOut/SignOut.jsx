import { useEffect } from "react";
import { removeToken } from "../../services/auth";
import { useHistory } from "react-router-dom";

const SignOut = (props) => {
  const { setUser } = props;
  const history = useHistory();

  useEffect(() => {
    const signOutUser = () => {
      setUser(null);
      localStorage.removeItem("authToken");
      removeToken();
      history.push("/comics");
    };
    signOutUser();
  }, [history, setUser]);

  return (
    <div>
      <h1>sign out</h1>
    </div>
  );
};

export default SignOut;
