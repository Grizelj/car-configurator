import React from "react";
import { useRecoilState } from "recoil";
import { configuratorAtoms } from "../../../../shared";
import "./Interior.css";

interface Props {
  color: string;
}

const Interior: React.FC<Props> = ({ color }) => {
  const [active, setActive] = useRecoilState(configuratorAtoms.setActive);

  return (
    <div className="interior_car_menu">
      <div className="interior_top_menu">
        <div className="interior_menu_info">
          <div className="interior_img"></div>
          <div>
            <p>{color}</p>
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
          onClick={() => setActive("Summary")}
        >
          <span>Summary </span>
        </button>
      </div>
    </div>
  );
};

export default Interior;
