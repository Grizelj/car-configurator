import "./Css/configurator.css";
import Exterior from "./../modules/configurator/components/exterior/Exterior";
import Interior from "../modules/configurator/components/Interior/Interior";
import Summary from "../modules/configurator/components/summary/Summary";
import React, { useState } from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { configuratorAtoms } from "../shared";
import { useNavigate } from "react-router-dom";

export const Configurator: React.FC = () => {
  const [active, setActive] = useRecoilState(configuratorAtoms.setActive);
  const [car, setCar] = useRecoilState(configuratorAtoms.setCar);
  const [paint, setPaint] = useRecoilState(configuratorAtoms.setPaint);
  const [wheel, setWheel] = useRecoilState(configuratorAtoms.setWheel);
  const [interior, setInterior] = useRecoilState(configuratorAtoms.setInterior);

  const navigate = useNavigate();

  return (
    <div>
      <div className="configurator_navbar">
        <button
          onClick={() => navigate("/CarPicker")}
          className="navbar_back_button"
        >
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
      <div></div>
      {active === "Exterior" && <Exterior />}
      {active === "Interior" && <Interior />}
      {active === "Summary" && <Summary />}
    </div>
  );
};
