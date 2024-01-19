import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarCard from 'components/CarCard/CarCard';
import { Container, List } from './Catalog.styled';

export const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `https://65a7bc4794c2c5762da7693e.mockapi.io/catalog?page=${currentPage}&limit=12`
        );

        setCars(prevCars => [...prevCars, ...response.data]);
        setLoading(false);
      } catch (error) {
        console.error('Помилка запиту:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

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
      <button onClick={handleLoadMore}>Load more</button>
    </Container>
  );
};
