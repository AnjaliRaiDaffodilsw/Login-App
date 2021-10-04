import axios from 'axios';

export function SignupAPI(email, password) {
  return axios.post("https://reqres.in/api/register",
    { email, password });
}