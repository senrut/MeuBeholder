import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL // 'http://localhost:3001';

export async function doLogin(email, password) {
    const loginUrl = `${API_URL}/login`;
    const response = await axios.post(loginUrl, { email, password });
    return response.data;
}

export async function doLogout(token) {
    const logoutUrl = `${API_URL}/logout`;
    const response = await axios.post(logoutUrl);
    return response.data;
}