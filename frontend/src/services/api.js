import axios from 'axios'

const api = axios.create({
  baseURL: 'https://kennedyrs-bethehero.herokuapp.com'
})

export default api