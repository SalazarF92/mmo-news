import axios from "axios";

const APIURL = "https://mmo-games.p.rapidapi.com/";

const api = axios.create({
  baseURL: APIURL,
});

export { api };
