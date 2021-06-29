import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./SignIn.css";

export default function SignIn(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Layout>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
        }}
      >
        <div className="sign-in-container">
          <h3>Login</h3>
          <label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <br />
          <h4>
            Not Signed Up Yet? <Link to="/sign-up">Sign Up</Link>
          </h4>

          <button>Submit</button>
        </div>
      </form>
    </Layout>
  );
}
