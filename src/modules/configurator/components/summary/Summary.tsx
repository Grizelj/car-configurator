import React from "react";
import "./Summary.css";

const Summary: React.FC = ({}) => {
  return (
    <div className="summary">
      <div>
        <h1>Almost done!</h1>
        <p>Review your configuration and save your car.</p>
      </div>
      <div className="car_label">
        <div>
          <p>audi rs6 avant</p>
          <p>2022</p>
        </div>
        <div>
          <p>total</p>
          <p>recoil</p>
        </div>
      </div>
      <div className="configuration_details">
        <div className="config_info">
          <p>Your configuration details</p>
        </div>
        <div className="config_details">
          <div className="config_exterior">
            <p>
              <span>Exterior</span>
              <button className="config_edit">Edit</button>
            </p>
            <p>
              <div className="paint_img"></div>
              <span>color</span>
              <span>price</span>
            </p>
            <p>
              <div className="wheel_img"></div>
              <span>wheels</span>
              <span>price</span>
            </p>
          </div>
          <div className="config_interior">
            <p>
              <span>Interior</span>
              <button className="config_edit">Edit</button>
            </p>
            <p>
              <div className="interior_img"></div>
              <span>color</span>
              <span>price</span>
            </p>
          </div>
          <div className="total_cost">
            <p>
              <span>Total</span>
              <span>PRICE</span>
            </p>
          </div>
        </div>
      </div>
      <div className="configurator_footer">
        <div className="footer_info">
          <span>2022</span>
          <span>audi rs6 avant</span>
        </div>
        <div className="footer_save_config">
          <p>total</p>
          <p>PPRICE</p>
          <button className="save_config_button">
            <span>Save your configuration</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
