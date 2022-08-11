import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { configuratorAtoms } from "../../../../shared";
import InteriorCarousel from "../carousel/InteriorCarousel";
import "./Interior.css";
import Seats from "./Seats";

const Interior: React.FC = ({}) => {
  const [active, setActive] = useRecoilState(configuratorAtoms.setActive);
  const [openInterior, setOpenInterior] = useState(Boolean);
  const [interior, setInterior] = useRecoilState(configuratorAtoms.setInterior);
  const [carousel, setCarousel] = useRecoilState(configuratorAtoms.setCarousel);

  return (
    <div className="interior_layout">
      <div className="carousel_display">
        <InteriorCarousel />
        <p>
          <span
            className="arrow left"
            onClick={() => setCarousel(carousel - 1)}
          ></span>{" "}
          {carousel} / 2{" "}
          <span
            className="arrow right"
            onClick={() => setCarousel(carousel + 1)}
          ></span>
        </p>
      </div>
      <div className="interior_car_menu">
        <div className="interior_top_menu">
          <div
            className="interior_menu_info"
            onClick={() => setOpenInterior(true)}
          >
            {interior === "Black&grey" && (
              <img src="/Assets2/Color=Black&grey.png"></img>
            )}
            {interior === "Black&red" && (
              <img src="/Assets2/Color=Black&red.png"></img>
            )}
            {interior === "Black-1" && (
              <img src="/Assets2/Color=Black-1.png"></img>
            )}
            {interior === "Brown" && <img src="/Assets2/Color=Brown.png"></img>}
            {interior === "Lunar Silver" && (
              <img src="/Assets2/Color=Lunar Silver.png"></img>
            )}
            {interior === "Red" && <img src="/Assets2/Color=Red.png"></img>}
            <div>
              <p>{interior}</p>
              <p>color</p>
            </div>
          </div>
        </div>
        <div className="interior_bottom_menu">
          <div className="total_price">
            <span className="total_info">total</span>
            <span>RECOIL</span>
          </div>
          <button
            className="interior_next_button"
            onClick={() => {
              setActive("Summary");
            }}
          >
            <span>Summary </span>
          </button>
        </div>
        {openInterior === true && <Seats />}
      </div>
    </div>
  );
};

export default Interior;
