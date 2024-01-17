export const DropdownBrand = ({ options, onSelect }) => {
  const handleSelectChange = event => {
    const selectedBrand = event.target.value;
    onSelect(selectedBrand);
  };

  return (
    <div>
      <label>Car brand</label>
      <select onChange={handleSelectChange}>
        <option value="">Enter the text</option>
        {options.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
};
