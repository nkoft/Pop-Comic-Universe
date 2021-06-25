import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://git.heroku.com/pop-comics-api.git"
    : "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
