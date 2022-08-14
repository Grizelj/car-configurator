import userEvent from "@testing-library/user-event";
import { useId } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { configuratorAtoms } from "../shared";
import "./Css/empty-state.css";

export const Home: React.FC = () => {
  const [user, setUser] = useRecoilState(configuratorAtoms.setUser);
  const navigate = useNavigate();
  return (
    <div className="empty-state-home">
      <div className="empty-state-configuration">
        <p>View saved configurations</p>
        {console.log(user)}
        <button
          className="empty-state-button"
          onClick={() => navigate("/CarPicker")}
        >
          <span>Configure a car </span>
        </button>
      </div>
      <div className="empty-state-wrapper">
        <div className="empty-state-info">
          <img src="/Assets/Img/car-register.png" />
          <p>
            You haven't configured any cars yet. You may choose to{" "}
            <Link to="/CarPicker">configure some now.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
