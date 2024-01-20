import { Label, Option, Select } from './DropdownPrice.styled';

const DropdownPrice = () => {
  const generatePriceOptions = () => {
    const options = [];
    for (let price = 10; price <= 200; price += 10) {
      options.push(price);
    }
    return options;
  };

  const handleSelectChange = event => {
    const selectedPrice = event.target.value;
    return selectedPrice;
  };

  return (
    <div>
      <Label>Price/ 1 hour</Label>
      <Select onChange={handleSelectChange}>
        <Option value="">To $</Option>
        {generatePriceOptions().map((price, index) => (
          <option key={index} value={price}>
            ${price}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default DropdownPrice;
