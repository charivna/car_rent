// RangeFilter.js
import React, { useState } from 'react';

const RangeFilter = ({ onFilterChange, onApplyFilters }) => {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  const handleFromChange = event => {
    setFromValue(event.target.value);
  };

  const handleToChange = event => {
    setToValue(event.target.value);
  };

  return (
    <div>
      <label>
        Car mileage / km
        <input
          type="number"
          placeholder="From"
          value={fromValue}
          onChange={handleFromChange}
        />
      </label>

      <label>
        <input
          type="number"
          placeholder="To"
          value={toValue}
          onChange={handleToChange}
        />
      </label>
    </div>
  );
};

export default RangeFilter;
