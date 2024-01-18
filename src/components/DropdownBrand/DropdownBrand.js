import { Label, Option, Select } from './DropdownBrand.styled';

export const DropdownBrand = ({ options, onSelect }) => {
  const handleSelectChange = event => {
    const selectedBrand = event.target.value;
    onSelect(selectedBrand);
  };

  return (
    <div>
      <Label>Car brand</Label>
      <Select onChange={handleSelectChange}>
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
