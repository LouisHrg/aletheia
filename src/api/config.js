import axios from 'axios';

const { VUE_APP_BACKEND_PROXY } = process.env;

const instance = axios.create({
  baseURL: VUE_APP_BACKEND_PROXY,
  timeout: 1000,
});

export default instance;
