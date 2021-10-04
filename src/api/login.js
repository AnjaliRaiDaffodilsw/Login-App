import axios from 'axios';

export function LoginAPI(email, password) {
  return axios.post("https://reqres.in/api/login",
    { email, password });
}