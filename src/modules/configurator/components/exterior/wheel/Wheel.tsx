import { useState } from "react";
import { useRecoilState } from "recoil";
import { configuratorAtoms } from "../../../../../shared";
import "../paint/Paint.css";

const Paint: React.FC = ({}) => {
  const [active, setActive] = useRecoilState(configuratorAtoms.setActive);
  const [openWheel, setOpenWheel] = useState(Boolean);
  const [car, setCar] = useRecoilState(configuratorAtoms.setCar);
  const [paint, setPaint] = useRecoilState(configuratorAtoms.setPaint);
  const [wheel, setWheel] = useRecoilState(configuratorAtoms.setWheel);

  return (
    <div className="exterior_car_menu">
      {car === "AUDI RS6 AVANT" && (
        <div className="exterior_top_menu">
          <div
            className="exterior_menu_info"
            onClick={() => setWheel("RS6One")}
          >
            <img src="/Assets2/Car=RS6, Style=One.png" />
            <div>
              <p>Style One</p>
              <p>2.500 €</p>
            </div>
          </div>
          <div
            className="exterior_menu_info"
            onClick={() => setWheel("RS6Two")}
          >
            <img src="/Assets2/Car=RS6, Style=Two.png" />
            <div>
              <p>Style Two</p>
              <p>2.500 €</p>
            </div>
          </div>
        </div>
      )}
      {car === "AUDI RS5" && (
        <div className="exterior_top_menu">
          <div
            className="exterior_menu_info"
            onClick={() => setWheel("RS5One")}
          >
            <img src="/Assets2/Car=RS5, Style=One.png" />
            <div>
              <p>Style One</p>
              <p>2.500 €</p>
            </div>
          </div>
          <div
            className="exterior_menu_info"
            onClick={() => setWheel("RS5Two")}
          >
            <img src="/Assets2/Car=RS5, Style=Two.png" />
            <div>
              <p>Style Two</p>
              <p>2.500 €</p>
            </div>
          </div>
        </div>
      )}
      {car === "AUDI E-TRON GT" && (
        <div className="exterior_top_menu">
          <div
            className="exterior_menu_info"
            onClick={() => setWheel("e-tronOne")}
          >
            <img src="/Assets2/Car=e-tron, Style=One.png" />
            <div>
              <p>Style One</p>
              <p>2.500 €</p>
            </div>
          </div>
          <div
            className="exterior_menu_info"
            onClick={() => setWheel("e-tronTwo")}
          >
            <img src="/Assets2/Car=e-tron, Style=Two.png" />
            <div>
              <p>Style Two</p>
              <p>2.500 €</p>
            </div>
          </div>
        </div>
      )}
      <div className="exterior_bottom_menu">
        <div className="total_price">
          <span className="total_info">total</span>
          <span>RECOIL</span>
        </div>
        <button
          className="exterior_next_button"
          onClick={() => setOpenWheel(false)}
        >
          <span>Done </span>
        </button>
      </div>
    </div>
  );
};

export default Paint;
