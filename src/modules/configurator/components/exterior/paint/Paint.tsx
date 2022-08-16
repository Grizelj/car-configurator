import { useState } from "react";
import { useRecoilState } from "recoil";
import { configuratorAtoms } from "../../../../../shared";
import "./Paint.css";

const Paint: React.FC = ({ setOpen }) => {
  const [car, setCar] = useRecoilState(configuratorAtoms.setCar);
  const [paint, setPaint] = useRecoilState(configuratorAtoms.setPaint);

  return (
    <div className="paint_car_menu">
      <div className="paint_top_menu_header">
        <div>Paint color</div>
        <div
          onClick={() => {
            setOpen(false);
          }}
        >
          X
        </div>
      </div>
      {car === "AUDI RS6 AVANT" && (
        <div className="paint_top_menu">
          <div
            className="paint_menu_info"
            onClick={() => setPaint("Ultra Blue")}
          >
            <img src="/Assets2/Color=Ultra Blue.png" />
            <div>
              <p>Ultra Blue</p>
              <p>2.500 €</p>
            </div>
          </div>
          <div className="paint_menu_info" onClick={() => setPaint("Black")}>
            <img src="/Assets2/Color=Black.png" />
            <div>
              <p>Black metallic</p>
              <p>2.500 €</p>
            </div>
          </div>
          <div
            className="paint_menu_info"
            onClick={() => setPaint("Polar White")}
          >
            <img src="/Assets3/Color=Polar White.png" />
            <div>
              <p>Polar White</p>
              <p>2.500 €</p>
            </div>
          </div>
        </div>
      )}
      {car === "AUDI RS5" && (
        <div className="paint_top_menu">
          <div
            className="paint_menu_info"
            onClick={() => setPaint("Nardo Gay")}
          >
            <img src="/Assets2/Color=Nardo Gay.png" />
            <div>
              <p>Nardo Gay</p>
              <p>2.500 €</p>
            </div>
          </div>
          <div
            className="paint_menu_info"
            onClick={() => setPaint("Tango Red")}
          >
            <img src="/Assets2/Color=Tango Red.png" />
            <div>
              <p>Tango Red</p>
              <p>2.500 €</p>
            </div>
          </div>
          <div
            className="paint_menu_info"
            onClick={() => setPaint("Turbo Blue")}
          >
            <img src="/Assets2/Color=Turbo Blue.png" />
            <div>
              <p>Turbo Blue</p>
              <p>2.500 €</p>
            </div>
          </div>
        </div>
      )}
      {car === "AUDI E-TRON GT" && (
        <div className="paint_top_menu">
          <div
            className="paint_menu_info"
            onClick={() => setPaint("Tactical Green")}
          >
            <img src="/Assets2/Color=Tactical Green.png" />
            <div>
              <p>Tactical Green</p>
              <p>2.500 €</p>
            </div>
          </div>
          <div
            className="paint_menu_info"
            onClick={() => setPaint("Florett Silver")}
          >
            <img src="/Assets2/Color=Florett Silver.png" />
            <div>
              <p>Florett Silver</p>
              <p>2.500 €</p>
            </div>
          </div>
        </div>
      )}
      <div className="paint_bottom_menu">
        <div className="total_price">
          <span className="total_info">total</span>
          <span>RECOIL</span>
        </div>
        <button className="paint_next_button" onClick={() => setOpen(false)}>
          <span>Done </span>
        </button>
      </div>
    </div>
  );
};

export default Paint;
