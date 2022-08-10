import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { configuratorAtoms } from "../../../../shared";
import "./Exterior.css";

interface Props {
  color: string;
  wheels: string;
}

const Exterior: React.FC<Props> = ({ color, wheels }) => {
  const [active, setActive] = useRecoilState(configuratorAtoms.setActive);

  return (
    <div className="exterior_car_menu">
      <div className="exterior_top_menu">
        <div className="exterior_menu_info">
          <div className="paint_img"></div>
          <div>
            <p>{color}</p>
            <p>paint color</p>
          </div>
        </div>
        <div className="exterior_menu_info">
          <div className="wheel_img"></div>
          <div>
            <p>{wheels}</p>
            <p>wheels</p>
          </div>
        </div>
      </div>
      <div className="exterior_bottom_menu">
        <div className="total_price">
          <span className="total_info">total</span>
          <span>RECOIL</span>
        </div>
        <button
          className="exterior_next_button"
          onClick={() => setActive("Interior")}
        >
          <span>Interior </span>
        </button>
      </div>
    </div>
  );
};

export default Exterior;
