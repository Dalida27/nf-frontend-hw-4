import axios from 'axios';

const baseURL = 'https://fakestoreapi.com';

const productsService = axios.create({
  baseURL,
});

export default productsService;
