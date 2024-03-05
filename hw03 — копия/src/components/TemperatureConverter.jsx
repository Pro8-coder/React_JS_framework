import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit((value * 9 / 5) + 32 || '');
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius((value - 32) * 5 / 9 || '');
  };

  return (
    <div>
      <TextField
        label="Градусы Цельсия"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <TextField
        label="Градусы Фаренгейта"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setCelsius('');
          setFahrenheit('');
        }}
      >
        Сбросить
      </Button>
    </div>
  );
};

export default TemperatureConverter;
