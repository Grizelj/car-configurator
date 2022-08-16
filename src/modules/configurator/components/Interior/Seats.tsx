import { useState } from "react";
import { useRecoilState } from "recoil";
import { configuratorAtoms } from "../../../../shared";
import "./Seats.css";

const Seats: React.FC = ({ setOpen }) => {
  const [active, setActive] = useRecoilState(configuratorAtoms.setActive);
  const [car, setCar] = useRecoilState(configuratorAtoms.setCar);
  const [openInterior, setOpenInterior] = useState(Boolean);
  const [interior, setInterior] = useRecoilState(configuratorAtoms.setInterior);

  return (
    <div className="seat_car_menu">
      <div className="paint_top_menu_header">
        <div>Interior</div>
        <div
          onClick={() => {
            setOpen(false);
          }}
        >
          X
        </div>
      </div>
      {car === "AUDI RS6 AVANT" && (
        <div className="seat_top_menu">
          <div
            className="seat_menu_info"
            onClick={() => setInterior("Black&grey")}
          >
            <img src="/Assets2/Color=Black&grey.png"></img>
            <div>
              <p>Black and grey</p>
              <p>0 €</p>
            </div>
          </div>
          <div
            className="seat_menu_info"
            onClick={() => setInterior("Black&red")}
          >
            <img src="/Assets2/Color=Black&red.png"></img>
            <div>
              <p>Black and red</p>
              <p>0 €</p>
            </div>
          </div>
          <div className="seat_menu_info" onClick={() => setInterior("Brown")}>
            <img src="/Assets2/Color=Brown.png"></img>
            <div>
              <p>Cognac Brown</p>
              <p>0 €</p>
            </div>
          </div>
        </div>
      )}
      {car === "AUDI RS5" && (
        <div className="seat_top_menu">
          <div
            className="seat_menu_info"
            onClick={() => setInterior("Black&grey")}
          >
            <img src="/Assets2/Color=Black&grey.png"></img>
            <div>
              <p>Black and grey</p>
              <p>0 €</p>
            </div>
          </div>
          <div
            className="seat_menu_info"
            onClick={() => setInterior("Black&red")}
          >
            <img src="/Assets2/Color=Black&red.png"></img>
            <div>
              <p>Black and red</p>
              <p>0 €</p>
            </div>
          </div>
          <div
            className="seat_menu_info"
            onClick={() => setInterior("Lunar Silver")}
          >
            <img src="/Assets2/Color=Lunar Silver.png"></img>
            <div>
              <p>Lunar Silver</p>
              <p>0 €</p>
            </div>
          </div>
        </div>
      )}
      {car === "AUDI E-TRON GT" && (
        <div className="seat_top_menu">
          <div
            className="seat_menu_info"
            onClick={() => setInterior("Black-1")}
          >
            <img src="/Assets2/Color=Black-1.png"></img>
            <div>
              <p>Black</p>
              <p>0 €</p>
            </div>
          </div>
          <div className="seat_menu_info" onClick={() => setInterior("Red")}>
            <img src="/Assets2/Color=Red.png"></img>
            <div>
              <p>Red</p>
              <p>0 €</p>
            </div>
          </div>
        </div>
      )}
      <div className="seat_bottom_menu">
        <div className="total_price">
          <span className="total_info">total</span>
          <span>RECOIL</span>
        </div>
        <button className="seat_next_button" onClick={() => setOpen(false)}>
          <span>Done </span>
        </button>
      </div>
    </div>
  );
};

export default Seats;
