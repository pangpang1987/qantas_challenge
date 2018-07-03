import axios from 'axios';

// GraphQL service endpoint
const ENDPOINT = '/graphql';

const client = () => ({
  get: (options) => axios.get(ENDPOINT, options),
  post: (options) => axios.post(ENDPOINT, options),
  put: options => axios.put(ENDPOINT, options),
  delete: options => axios.delete(ENDPOINT, options)
});

export default client;
