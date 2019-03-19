import Axios from '@/api/config';

const RESOURCE_NAME = '/sources';

export default {
  getAll() {
    return Axios.get(RESOURCE_NAME);
  },

  get(id) {
    return Axios.get(`${RESOURCE_NAME}/${id}`);
  },
};
