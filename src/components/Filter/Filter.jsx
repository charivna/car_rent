import { DropdownBrand } from 'components/DropdownBrand/DropdownBrand';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DropdownPrice from 'components/DropdownPrice/DropdownPrice';
import RangeFilter from 'components/RangeFilter/RangeFilter';
import { AllFilter, SearchBtn } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedBrand } from '../../redux/Filter/filterSlice';

import { filterCarsByBrand } from 'services/api';
import { updateCars } from '../../redux/Catalog/catalogSlice';

export const Filter = () => {
  const [brandOptions, setBrandOptions] = useState([]);

  const selectedBrand = useSelector(state => state.filter.selectedBrand);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('makes.json');
        setBrandOptions(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleBrandSelect = async brand => {
    dispatch(setSelectedBrand(brand));

    try {
      const filteredCars = await filterCarsByBrand(brand);
      dispatch(updateCars(filteredCars));
    } catch (error) {
      console.error(
        'Помилка при отриманні даних про відфільтровані автомобілі:',
        error
      );
    }
  };

  const handleApplyFilters = async () => {
    try {
      const filteredCars = await filterCarsByBrand(selectedBrand);
      dispatch(updateCars(filteredCars));
      dispatch(setSelectedBrand(''));
    } catch (error) {
      console.error('Помилка при фільтрації даних про автомобілі:', error);
    }
  };

  return (
    <>
      <AllFilter>
        <DropdownBrand options={brandOptions} onSelect={handleBrandSelect} />
        <DropdownPrice />
        <RangeFilter />
        <SearchBtn onClick={handleApplyFilters}>Search</SearchBtn>
      </AllFilter>
    </>
  );
};
