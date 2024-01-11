import Axios from 'axios';

// function authRequestInterceptor(config) {
//   const token = storage.getToken();
//   if (token) {
//     config.headers.authorization = `${token}`;
//   }
//   config.headers.Accept = 'application/json';
//   return config;
// }

export const API = Axios.create({
  baseURL: 'http://localhost:8080',
});

// ** -------- AUTH API -------- **
export const getUser = (user) => API.post('/user/login', user);
export const register = (user) => API.post('/user/signup', user);

// ** -------- PRODUCT API -------- **
export const getAllProduct = () => API.get('/product');
export const getProductbyID = (id) => API.get(`/product/${id}`);

// ** -------- CATEGORY API -------- **

export const getCategories = () => API.get('/categories');
export const getSubCategory = (id) => API.get(`subcategory/${id}`);
export const getProductBySubcategory = (id) =>
  API.get(`/product/subcategory/${id}`);
// ** -------- ORDER API -------- **

// axios.interceptors.request.use(authRequestInterceptor);
