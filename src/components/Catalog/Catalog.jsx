import React, { useEffect } from 'react';
import CarCard from 'components/CarCard/CarCard';
import { Container, List, MoreBtn } from './Catalog.styled';
import {
  setCars,
  appendCars,
  setCurrentPage,
} from '../../redux/Catalog/catalogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../services/api';

export const Catalog = () => {
  const dispatch = useDispatch();
  const { cars, currentPage } = useSelector(state => state.catalog);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCars(currentPage);

        if (currentPage === 1) {
          dispatch(setCars(data));
        } else {
          dispatch(appendCars(data));
        }
      } catch (error) {
        throw new Error();
      }
    };

    fetchData();
  }, [currentPage, dispatch]);

  const handleLoadMoreClick = () => {
    dispatch(setCurrentPage(currentPage + 1));
    // fetchCars();
  };

  return (
    <Container>
      <List>
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </List>

      {cars.length >= 12 && (
        <MoreBtn type="button" onClick={handleLoadMoreClick}>
          Load more
        </MoreBtn>
      )}
    </Container>
  );
};
