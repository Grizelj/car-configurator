import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Css/car-picker.css";

const carOptions = [
  { value: "rs6", label: "Audi RS6 Avant" },
  { value: "rs5", label: "Audi RS5" },
  { value: "e-tron gt", label: "Audi e-Tron GT" },
];

export const CarPicker: React.FC = () => {
  const navigate = useNavigate();

  const [selectValue, setSelectValue] = useState<string>("");
  const selectRef = React.useRef();

  const handleChange = (selectValue) => {
    setSelectValue(selectValue);
  };
  const onClick = () => {
    if (selectRef.current) {
      selectRef.current.focus();
    }
  };

  return (
    <div className="car-full-display">
      <div className="car-full-display-info">
        <p>Configure a car</p>
        <p>Pick your favorite model and start configuring.</p>
      </div>
      <div className="car-display">
        <div className="card">
          <img src="../../public/Assets/Img/Audi RS6.png" />
          <h2>2022</h2>
          <h1>audi rs6 avant</h1>
          <button
            className="car-button"
            onClick={() => navigate("/Configurator")}
          >
            <span>Configure now </span>
          </button>
        </div>
        <div className="card">
          <img src="../../public/Assets/Img/Audi RS5.png" />
          <h2>2022</h2>
          <h1>audi rs5</h1>
          <button
            className="car-button"
            onClick={() => navigate("/Configurator")}
          >
            <span>Configure now </span>
          </button>
        </div>
        <div className="card">
          <img src="../../public/Assets/Img/Audi e-Tron GT.png" />
          <h2>2022</h2>
          <h1>audi e-tron gt</h1>
          <button
            className="car-button"
            onClick={() => navigate("/Configurator")}
          >
            <span>Configure now </span>
          </button>
        </div>
      </div>
    </div>
  );
};
