import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { auth } from "../firebase";
import { configuratorAtoms } from "../shared";
import "./Css/car-picker.css";

export const CarPicker: React.FC = () => {
  const [car, setCar] = useRecoilState(configuratorAtoms.setCar);
  const [paint, setPaint] = useRecoilState(configuratorAtoms.setPaint);
  const [wheel, setWheel] = useRecoilState(configuratorAtoms.setWheel);
  const [interior, setInterior] = useRecoilState(configuratorAtoms.setInterior);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // ...
      } else {
        navigate("/login");
      }
    });
  });

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
              setWheel("One");
              setInterior("Black&grey");
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
              setWheel("One");
              setInterior("Black&red");
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
              setWheel("One");
              setInterior("Black-1");
            }}
          >
            <span>Configure now </span>
          </button>
        </div>
      </div>
    </div>
  );
};
