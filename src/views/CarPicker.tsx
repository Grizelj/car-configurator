import "./Css/car-picker.css";

export const CarPicker: React.FC = () => {
  return (
    <div className="car-full-display">
      <div className="car-full-display-info">
        <p>Configure a car</p>
        <p>Pick your favorite model and start configuring.</p>
      </div>
      <div className="car-display">
        <div className="card">
          <img src="../../public/Assets/Img/Audi RS6.png" />
          <h2>2022</h2>
          <h1>audi rs6 avant</h1>
          <button className="car-button">
            <span>Configure now </span>
          </button>
        </div>
        <div className="card">
          <img src="../../public/Assets/Img/Audi RS5.png" />
          <h2>2022</h2>
          <h1>audi rs5</h1>
          <button className="car-button">
            <span>Configure now </span>
          </button>
        </div>
        <div className="card">
          <img src="../../public/Assets/Img/Audi e-Tron GT.png" />
          <h2>2022</h2>
          <h1>audi e-tron gt</h1>
          <button className="car-button">
            <span>Configure now </span>
          </button>
        </div>
      </div>
    </div>
  );
};
