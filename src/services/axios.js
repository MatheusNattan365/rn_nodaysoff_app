import axios from 'axios';

export default axios.create({
  baseURL: "https://react-tests-7118f.firebaseio.com",
  responseType: "json"
});