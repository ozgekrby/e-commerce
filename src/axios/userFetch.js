import axios from 'axios';

export const fetchUser = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});