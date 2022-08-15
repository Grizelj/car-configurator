import { Link, useNavigate } from "react-router-dom";

export const Empty: React.FC = ({}) => {
  const navigate = useNavigate();

  return (
    <div className="empty-state-info">
      <img src="/Assets/Img/car-register.png" />
      <p>
        You haven't configured any cars yet. You may choose to{" "}
        <Link to="/CarPicker">configure some now.</Link>
      </p>
    </div>
  );
};

export default Empty;
