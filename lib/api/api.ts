
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL + "/api";

export const nextServer = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});


// ----------------1

// const nextServer = axios.create({
//   baseURL: 'http://localhost:3000/api',
//   withCredentials: true, 
// });