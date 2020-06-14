import axios from 'axios'

const api = axios.create({
  baseURL: "https://kennedyrs-bethehero.herokuapp.com",
  // baseURL: 'http://127.0.0.1:3333',
  headers: {
    "Access-Control-Allow-Origin": true
  }
});

export default api