import Axios from 'axios';

const RESOURCE_NAME = '/sources';
const { VUE_APP_BACKEND_PROXY } = process.env;

export default {
  getAll() {
    return Axios.get(`${VUE_APP_BACKEND_PROXY}${RESOURCE_NAME}`);
  },

  get(id) {
    return Axios.get(`${RESOURCE_NAME}/${id}`);
  },
};
