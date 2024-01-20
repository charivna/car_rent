// services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://65a7bc4794c2c5762da7693e.mockapi.io';

export const fetchCars = async (page = 1, limit = 12) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/catalog?page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error('Помилка запиту:', error);
    throw error; // Переброс ошибки для обработки в компоненте
  }
};

export const filterCarsByBrand = async brand => {
  try {
    const response = await axios.get(`${API_BASE_URL}/catalog?make=${brand}`);

    return response.data;
  } catch (error) {
    console.error('Помилка фільтрації автомобілів за брендом:', error);
    throw error; // Переброс ошибки для обработки в компоненте
  }
};
