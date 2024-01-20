import { useDispatch, useSelector } from 'react-redux';
import { Label, Option, Select } from './DropdownBrand.styled';
import { setSelectedBrand } from '../../redux/Filter/filterSlice';

export const DropdownBrand = ({ options }) => {
  const dispatch = useDispatch();
  const selectedBrand = useSelector(state => state.filter.selectedBrand);

  const handleSelectChange = event => {
    const brand = event.target.value;
    dispatch(setSelectedBrand(brand));
  };

  return (
    <div>
      <Label>Car brand</Label>
      <Select value={selectedBrand} onChange={handleSelectChange}>
        <Option value="">Enter the text</Option>
        {options.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </Select>
    </div>
  );
};
