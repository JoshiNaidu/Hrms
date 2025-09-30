import axios from 'axios';

const API_URL = 'http://localhost:4000/api'; // replace with your backend URL

// Login function
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      // you can send either username or email
      email,  
      password,
    });
    return response.data; // token or user data
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    throw error;
  }
};
