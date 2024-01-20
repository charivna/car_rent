// RangeFilter.js
import React, { useState } from 'react';
import { InputFrom, InputTo, Label, Range } from './RangeFilter.styled';

const RangeFilter = () => {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  const handleFromChange = event => {
    setFromValue(event.target.value.replace('From ', ''));
  };

  const handleToChange = event => {
    setToValue(event.target.value.replace('To ', ''));
  };

  return (
    <div>
      <Label> Car mileage / km</Label>
      <Range>
        <label>
          <InputFrom value={`From ${fromValue}`} onChange={handleFromChange} />
        </label>

        <label>
          <InputTo value={`To ${toValue}`} onChange={handleToChange} />
        </label>
      </Range>
    </div>
  );
};

export default RangeFilter;
