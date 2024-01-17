const DropdownPrice = ({ onChange }) => {
  const generatePriceOptions = () => {
    const options = [];
    for (let price = 10; price <= 200; price += 10) {
      options.push(price);
    }
    return options;
  };

  const handleSelectChange = event => {
    const selectedPrice = event.target.value;
    onChange(selectedPrice);
  };

  return (
    <div>
      <label>Price/ 1 hour</label>
      <select onChange={handleSelectChange}>
        <option value="">To $</option>
        {generatePriceOptions().map((price, index) => (
          <option key={index} value={price}>
            ${price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownPrice;
