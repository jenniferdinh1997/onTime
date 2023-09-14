import tokenService from "./tokenService";
import axios from "axios";

const BASE_URL = "/api/users";

// NOTE THIS IS configured to send of a multi/part form request
// aka photo
const signup = async (user) => {
  // return (
  //   fetch(BASE_URL + "signup", {
  //     method: "POST",
  //     body: user,
  //   })
  //     .then((res) => {
  //       if (res.ok) return res.json();
  //       // Probably a duplicate email
  //       throw new Error("Email already taken!");
  //     })
  //     // Parameter destructuring!
  //     .then(({ token }) => tokenService.setToken(token))
  // );
  // Setting our token in localStorage in our browser
  // then we'll be able to use with every request!
  // The above could have been written as
  //.then((token) => token.token);,
  const response = await axios.post(`${BASE_URL}/signup`, user);
  return response.data;
}

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

function logout() {
  tokenService.removeToken();
}

const login = async (creds) => {
  const response = await axios.post(`${BASE_URL}/login`, creds);
  return response.data;
}

function getProfile(name){
  return fetch(BASE_URL + name, {
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    }
  }).then(res => {
    if(res.ok) return res.json();
    throw new Error('Bad Credentials!')
  })
}

const userService = {
  signup,
  logout,
  login,
  getUser,
  getProfile
};

export default userService;
