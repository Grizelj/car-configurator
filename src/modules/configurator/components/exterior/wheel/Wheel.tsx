import { useState } from "react";
import { useRecoilState } from "recoil";
import { configuratorAtoms } from "../../../../../shared";
import "../paint/Paint.css";

const Paint: React.FC = ({ setOpen }) => {
  const [active, setActive] = useRecoilState(configuratorAtoms.setActive);
  const [openWheel, setOpenWheel] = useState(Boolean);
  const [car, setCar] = useRecoilState(configuratorAtoms.setCar);
  const [paint, setPaint] = useRecoilState(configuratorAtoms.setPaint);
  const [wheel, setWheel] = useRecoilState(configuratorAtoms.setWheel);

  return (
    <div className="paint_car_menu">
      <div className="paint_top_menu_header">
        <div>Wheels</div>
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
          <div className="paint_menu_info" onClick={() => setWheel("One")}>
            <img src="/Assets3/Car=AUDI RS6 AVANT, Style=One.png" />
            <div>
              <p>Style One</p>
              <p>2.500 €</p>
            </div>
          </div>
          <div className="paint_menu_info" onClick={() => setWheel("Two")}>
            <img src="/Assets3/Car=AUDI RS6 AVANT, Style=Two.png" />
            <div>
              <p>Style Two</p>
              <p>2.500 €</p>
            </div>
          </div>
        </div>
      )}
      {car === "AUDI RS5" && (
        <div className="paint_top_menu">
          <div className="paint_menu_info" onClick={() => setWheel("One")}>
            <img src="/Assets3/Car=AUDI RS5, Style=One.png" />
            <div>
              <p>Style One</p>
              <p>2.500 €</p>
            </div>
          </div>
          <div className="paint_menu_info" onClick={() => setWheel("Two")}>
            <img src="/Assets3/Car=AUDI RS5, Style=Two.png" />
            <div>
              <p>Style Two</p>
              <p>2.500 €</p>
            </div>
          </div>
        </div>
      )}
      {car === "AUDI E-TRON GT" && (
        <div className="paint_top_menu">
          <div className="paint_menu_info" onClick={() => setWheel("One")}>
            <img src="/Assets3/Car=AUDI E-TRON GT, Style=One.png" />
            <div>
              <p>Style One</p>
              <p>2.500 €</p>
            </div>
          </div>
          <div className="paint_menu_info" onClick={() => setWheel("Two")}>
            <img src="/Assets3/Car=AUDI E-TRON GT, Style=Two.png" />
            <div>
              <p>Style Two</p>
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
