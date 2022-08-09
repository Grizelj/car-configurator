import "./Css/empty-state.css";

export const Home: React.FC = () => {
  return (
    <div className="empty-state-home">
      <div className="empty-state-configuration">
        <p>View saved configurations</p>
        <button className="empty-state-button">
          <span>Configure a car </span>
        </button>
      </div>
      <div className="empty-state-wrapper">
        <div className="empty-state-info">
          <img src="../../public/Assets/Img/car-register.png" />
          <p>
            You haven't configured any cars yet. You may choose to{" "}
            <a className="empty-state-info-anchor" href="#">
              configure some now.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
