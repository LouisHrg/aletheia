import Axios from 'axios';

const instance = Axios.create({
  baseURL: process.env.BACKEND_PROXY,
  timeout: 1000,
});

export default instance;
