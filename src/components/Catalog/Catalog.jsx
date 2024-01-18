import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarCard from 'components/CarCard/CarCard';
import { Container, List } from './Catalog.styled';

export const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        // Ваш URL для запиту до бекенду
        const response = await axios.get(
          'https://65a7bc4794c2c5762da7693e.mockapi.io/catalog'
        );

        // Оновлюємо стан компонента з отриманими даними
        setCars(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Помилка запиту:', error);
        setLoading(false);
      }
    };

    // Викликаємо функцію для отримання карточок при завантаженні компонента
    fetchCars();
  }, []); // Порожній масив для запобігання безкінечного циклу

  return (
    <Container>
      {loading ? (
        <p>Завантаження...</p>
      ) : (
        <List>
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </List>
      )}
      <button>Load more</button>
    </Container>
  );
};

export default Catalog;
