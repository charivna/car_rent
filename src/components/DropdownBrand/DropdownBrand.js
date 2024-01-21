import { useDispatch, useSelector } from 'react-redux';
import {
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownList,
  Label,
} from './DropdownBrand.styled';
import { setSelectedBrand } from '../../redux/Filter/filterSlice';
import { useState } from 'react';

export const DropdownBrand = ({ options }) => {
  const dispatch = useDispatch();
  const selectedBrand = useSelector(state => state.filter.selectedBrand);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleOptionSelect = selectedOption => {
    dispatch(setSelectedBrand(selectedOption));
    setDropdownOpen(false);
  };

  return (
    <DropdownContainer>
      <Label>Car brand</Label>
      <DropdownButton onClick={() => setDropdownOpen(!isDropdownOpen)}>
        {selectedBrand || 'Enter the text'}
      </DropdownButton>
      <DropdownList isOpen={isDropdownOpen}>
        {options.map((brand, index) => (
          <DropdownItem key={index} onClick={() => handleOptionSelect(brand)}>
            {brand}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};
