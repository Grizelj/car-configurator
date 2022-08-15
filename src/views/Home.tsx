import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { configuratorAtoms } from "../shared";
import "./Css/empty-state.css";
import { useState } from "react";
import { Configurations, Empty } from "../modules";

export const Home: React.FC = () => {
  const [state, setState] = useState(Boolean);
  const navigate = useNavigate();

  return (
    <div className="empty-state-home">
      <div className="empty-state-configuration">
        <p>View saved configurations</p>
        <button
          className="empty-state-button"
          onClick={() => navigate("/CarPicker")}
        >
          <span>Configure a car </span>
        </button>
      </div>
      <div className="empty-state-wrapper">
        {state === true && <Empty />}
        {state === false && <Configurations />}
      </div>
    </div>
  );
};
