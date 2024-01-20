import { DropdownBrand } from 'components/DropdownBrand/DropdownBrand';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DropdownPrice from 'components/DropdownPrice/DropdownPrice';
import RangeFilter from 'components/RangeFilter/RangeFilter';
import { AllFilter, SearchBtn } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedBrand } from '../../redux/Filter/filterSlice';
import { selectSelectedBrand } from '../../redux/Filter/filterSelectors';
import { filterCarsByBrand } from 'services/api';
import { updateCars } from '../../redux/Catalog/catalogSlice';

export const Filter = () => {
  const [brandOptions, setBrandOptions] = useState([]);

  const selectedBrand = useSelector(selectSelectedBrand);

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
    console.log('Вибрано бренд:', brand);

    try {
      // Вызываем функцию filterCarsByBrand из другого файла
      const filteredCars = await filterCarsByBrand(brand);

      // Обновление состояния с отфильтрованными данными о машинах на фронте
      // setFilteredCars(filteredCars);
      dispatch(updateCars(filteredCars));
      console.log('Дані про відфільтровані автомобілі:', filteredCars);
    } catch (error) {
      // Обработка ошибки
      console.error(
        'Помилка при отриманні даних про відфільтровані автомобілі:',
        error
      );
    }
  };

  const handleApplyFilters = async () => {
    // Отримання та відправлення зібраних даних на бекенд
    const filtersData = {
      brand: selectedBrand,
    };

    // Ваш код для відправлення даних на бекенд
    console.log('Відправлення на бекенд:', filtersData);

    // Фильтрация данных на бекенде
    try {
      const filteredCars = await filterCarsByBrand(selectedBrand);
      dispatch(updateCars(filteredCars));
      console.log('Відфільтровані дані про автомобілі:', filteredCars);
      // Обновление состояния с данными о машинах на фронте, если необходимо
    } catch (error) {
      // Обработка ошибки
      console.error('Помилка при фільтрації даних про автомобілі:', error);
    }
  };

  return (
    <AllFilter>
      <DropdownBrand options={brandOptions} onSelect={handleBrandSelect} />
      <DropdownPrice />
      <RangeFilter />
      <SearchBtn onClick={handleApplyFilters}>Search</SearchBtn>
    </AllFilter>
  );
};
