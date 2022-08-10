import "./Css/configurator.css";
import Exterior from "./../modules/configurator/components/exterior/Exterior";
import Interior from "../modules/configurator/components/Interior/Interior";
import Summary from "../modules/configurator/components/summary/Summary";
import React, { useState } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { configuratorAtoms } from "../shared";

const setActive = atom<string>({
  key: "setActive",
  default: "Exterior",
});

export const Configurator: React.FC = () => {
  const [active, setActive] = useRecoilState(configuratorAtoms.setActive);

  return (
    <div>
      <div className="configurator_navbar">
        <button className="navbar_back_button">
          <span>2022</span> audi rs6 avant
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
      {active === "Exterior" && (
        <Exterior color="Ultra blue metallic" wheels="22''Magnesium 5-spoke" />
      )}
      {active === "Interior" && <Interior color="Brown" />}
      {active === "Summary" && <Summary />}
    </div>
  );
};
