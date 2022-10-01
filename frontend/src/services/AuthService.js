import axios from 'axios';
 
//localhost:3001

const API_URL = process.env.REACT_APP_API_URL;

export async function doLogin(email, password) {
  const loginUrl = `${API_URL}/login`;
  const response = await axios.post(loginUrl, {email, password});
  return response.data;

  // return new Promise((response, reject) => {
  //   if (email === 'contato@luiztools.com.br'
  //     && password === '123456') {
  //     response(true);
  //   }
  //   reject(`Invalid user and/or password!`);
  // })

}

export async function doLogout() {
  const logoutUrl = `${API_URL}/logout`;
  const response = await axios.post(logoutUrl);
  return response.data;

}