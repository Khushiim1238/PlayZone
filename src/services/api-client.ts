import axios from 'axios';

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ec13aea50edc421a84b2c67132ed8904",
  },
});
