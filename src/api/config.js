import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_PROXY,
  timeout: 1000,
});

export default instance;
