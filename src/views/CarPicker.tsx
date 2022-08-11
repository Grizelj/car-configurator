import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { configuratorAtoms } from "../shared";
import "./Css/car-picker.css";

export const CarPicker: React.FC = () => {
  const [car, setCar] = useRecoilState(configuratorAtoms.setCar);
  const [paint, setPaint] = useRecoilState(configuratorAtoms.setPaint);
  const [wheel, setWheel] = useRecoilState(configuratorAtoms.setWheel);
  const navigate = useNavigate();

  return (
    <div className="car-full-display">
      <div className="car-full-display-info">
        <p>Configure a car</p>
        <p>Pick your favorite model and start configuring.</p>
      </div>
      <div className="car-display">
        <div className="card">
          <img src="/Assets/Img/Audi RS6.png" />
          <h2>2022</h2>
          <h1>audi rs6 avant</h1>
          <button
            className="car-button"
            onClick={() => {
              navigate("/Configurator");
              setCar("AUDI RS6 AVANT");
              setPaint("Ultra Blue");
              setWheel("RS6One");
            }}
          >
            <span>Configure now </span>
          </button>
        </div>
        <div className="card">
          <img src="/Assets/Img/Audi RS5.png" />
          <h2>2022</h2>
          <h1>audi rs5</h1>
          <button
            className="car-button"
            onClick={() => {
              navigate("/Configurator");
              setCar("AUDI RS5");
              setPaint("Nardo Gay");
              setWheel("RS5One");
            }}
          >
            <span>Configure now </span>
          </button>
        </div>
        <div className="card">
          <img src="/Assets/Img/Audi e-Tron GT.png" />
          <h2>2022</h2>
          <h1>audi e-tron gt</h1>
          <button
            className="car-button"
            onClick={() => {
              navigate("/Configurator");
              setCar("AUDI E-TRON GT");
              setPaint("Tactical Green");
              setWheel("e-tronOne");
            }}
          >
            <span>Configure now </span>
          </button>
        </div>
      </div>
    </div>
  );
};
