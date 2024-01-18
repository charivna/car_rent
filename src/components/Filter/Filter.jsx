import { DropdownBrand } from 'components/DropdownBrand/DropdownBrand';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DropdownPrice from 'components/DropdownPrice/DropdownPrice';
import RangeFilter from 'components/RangeFilter/RangeFilter';
import { AllFilter, SearchBtn } from './Filter.styled';

export const Filter = () => {
  const [brandOptions, setBrandOptions] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [rangeFilter, setRangeFilter] = useState({ from: null, to: null });

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

  const handleBrandSelect = brand => {
    setSelectedBrand(brand);
    // Додайте код для обробки вибору бренду, наприклад, фільтрації даних або виконання інших дій(запиту на бек за картинками)
    console.log('Вибрано бренд:', brand);
  };

  const handlePriceSelect = price => {
    setSelectedPrice(price);
    console.log('Вибрана ціна:', price);
  };

  const handleRangeFilterChange = newRangeFilter => {
    setRangeFilter(newRangeFilter);
    console.log('Вибраний діапазон:', newRangeFilter);
  };

  const handleApplyFilters = () => {
    // Отримання та відправлення зібраних даних на бекенд
    const filtersData = {
      brand: selectedBrand,
      price: selectedPrice,
      range: rangeFilter,
    };

    // Ваш код для відправлення даних на бекенд
    console.log('Відправлення на бекенд:', filtersData);
  };

  return (
    <AllFilter>
      <DropdownBrand options={brandOptions} onSelect={handleBrandSelect} />
      <DropdownPrice onChange={handlePriceSelect} />
      <RangeFilter
        onFilterChange={handleRangeFilterChange}
        onApplyFilters={handleApplyFilters}
      />
      <SearchBtn onClick={handleApplyFilters}>Search</SearchBtn>
    </AllFilter>
  );
};
