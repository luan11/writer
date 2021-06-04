import axios from 'axios';

const api = axios.create({
  baseURL: 'https://segware-book-api.segware.io/api',
});

export default api;