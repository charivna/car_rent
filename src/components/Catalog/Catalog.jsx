import React, { useEffect } from 'react';
import CarCard from 'components/CarCard/CarCard';
import { Container, List, MoreBtn } from './Catalog.styled';
import {
  setCars,
  appendCars,
  setLoading,
  setCurrentPage,
} from '../../redux/Catalog/catalogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../services/api';

export const Catalog = () => {
  const dispatch = useDispatch();
  const { cars, loading, currentPage } = useSelector(state => state.catalog);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));

        const data = await fetchCars(currentPage);

        if (currentPage === 1) {
          dispatch(setCars(data));
        } else {
          dispatch(appendCars(data));
        }

        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [currentPage, dispatch]);

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

      {cars.length >= 12 && (
        <MoreBtn onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
          Load more
        </MoreBtn>
      )}
    </Container>
  );
};
