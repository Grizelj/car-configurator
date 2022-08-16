import "./Css/configurator.css";
import Exterior from "./../modules/configurator/components/exterior/Exterior";
import Interior from "../modules/configurator/components/Interior/Interior";
import Summary from "../modules/configurator/components/summary/Summary";
import React, { useState, useEffect } from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { configuratorAtoms } from "../shared";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const Configurator: React.FC = () => {
  const [active, setActive] = useRecoilState(configuratorAtoms.setActive);
  const [carEditToId, setCarEditToId] = useRecoilState(
    configuratorAtoms.setCarEditToId
  );
  const [car, setCar] = useRecoilState(configuratorAtoms.setCar);

  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname !== "/configurator") {
      setCarEditToId(null);
    }
  }, [navigate]);

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
    <div>
      <div className="configurator_navbar">
        <button
          onClick={() => navigate("/CarPicker")}
          className="navbar_back_button"
        >
          <span className="arrow left"></span>
          <span>2022</span> {car}
        </button>
        <div className="navbar_menu">
          <button className="button_menu" onClick={() => setActive("Exterior")}>
            01 <span>Exterior</span>
          </button>
          <button className="button_menu" onClick={() => setActive("Interior")}>
            02 <span>Interior</span>
          </button>
          <button className="button_menu" onClick={() => setActive("Summary")}>
            03 <span>Summary</span>
          </button>
        </div>
      </div>
      <div className="config_view">
        {active === "Exterior" && <Exterior />}
        {active === "Interior" && <Interior />}
        {active === "Summary" && <Summary />}
      </div>
    </div>
  );
};
