import Axios from 'axios';

const RESOURCE_NAME = '/sources';

export default {
  getAll() {
    return Axios.get(`${process.env.VUE_APP_BACKEND_PROXY}${RESOURCE_NAME}`);
  },

  get(id) {
    return Axios.get(`${RESOURCE_NAME}/${id}`);
  },
};
