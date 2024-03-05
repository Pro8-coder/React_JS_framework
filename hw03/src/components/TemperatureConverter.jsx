import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value !== "" ? ((value * 9) / 5 + 32).toFixed(2) : "");
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value !== "" ? (((value - 32) * 5) / 9).toFixed(2) : "");
  };

  const handleReset = () => {
    setCelsius("");
    setFahrenheit("");
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
      <div>
        <Button onClick={handleReset}>Сбросить</Button>
      </div>
    </div>
  );
}

export default TemperatureConverter;
