// src/api/auth.js
import axios from 'axios';

const API_URL = 'http://localhost:9000/api';  // Replace with your backend API URL

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};
