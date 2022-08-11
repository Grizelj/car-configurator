import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { configuratorAtoms } from "../../../../shared";
import Carousel from "../carousel/Carousel";
import "./Exterior.css";
import Paint from "./paint/Paint";
import Wheel from "./wheel/Wheel";

const Exterior: React.FC = ({}) => {
  const [active, setActive] = useRecoilState(configuratorAtoms.setActive);
  const [car, setCar] = useRecoilState(configuratorAtoms.setCar);
  const [openPaint, setOpenPaint] = useState(Boolean);
  const [openWheel, setOpenWheel] = useState(Boolean);
  const [paint, setPaint] = useRecoilState(configuratorAtoms.setPaint);
  const [wheel, setWheel] = useRecoilState(configuratorAtoms.setWheel);
  const [carousel, setCarousel] = useRecoilState(configuratorAtoms.setCarousel);

  return (
    <div className="exterior_layout">
      <div className="carousel_display">
        <Carousel />
        <p>
          <span
            className="arrow left"
            onClick={() => setCarousel(carousel - 1)}
          ></span>{" "}
          {carousel} / 5{" "}
          <span
            className="arrow right"
            onClick={() => setCarousel(carousel + 1)}
          ></span>
        </p>
      </div>
      <div className="exterior_car_menu">
        <div className="exterior_top_menu">
          <div
            className="exterior_menu_info"
            onClick={() => setOpenPaint(true)}
          >
            {paint === "Ultra Blue" && (
              <img src="/Assets2/Color=Ultra Blue.png" />
            )}
            {paint === "Black" && <img src="/Assets2/Color=Black.png" />}
            {paint === "Polar White" && (
              <img src="/Assets2/Color=Pola White.png" />
            )}
            {paint === "Nardo Gay" && (
              <img src="/Assets2/Color=Nardo Gay.png" />
            )}
            {paint === "Tango Red" && (
              <img src="/Assets2/Color=Tango Red.png" />
            )}
            {paint === "Turbo Blue" && (
              <img src="/Assets2/Color=Turbo Blue.png" />
            )}
            {paint === "Tactical Green" && (
              <img src="/Assets2/Color=Tactical Green.png" />
            )}
            {paint === "Florett Silver" && (
              <img src="/Assets2/Color=Florett Silver.png" />
            )}
            <div>
              <p>{paint}</p>
              <p>paint color</p>
            </div>
          </div>
          <div
            className="exterior_menu_info"
            onClick={() => setOpenWheel(true)}
          >
            {wheel === "RS6One" && (
              <img src="/Assets2/Car=RS6, Style=One.png" />
            )}
            {wheel === "RS6Two" && (
              <img src="/Assets2/Car=RS6, Style=Two.png" />
            )}
            {wheel === "RS5One" && (
              <img src="/Assets2/Car=RS5, Style=One.png" />
            )}
            {wheel === "RS5Two" && (
              <img src="/Assets2/Car=RS5, Style=Two.png" />
            )}
            {wheel === "e-tronOne" && (
              <img src="/Assets2/Car=e-tron, Style=One.png" />
            )}
            {wheel === "e-tronTwo" && (
              <img src="/Assets2/Car=e-tron, Style=Two.png" />
            )}
            <div>
              <p>{wheel}</p>
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
        {openPaint === true && <Paint />}
        {openWheel === true && <Wheel />}
      </div>
    </div>
  );
};

export default Exterior;
