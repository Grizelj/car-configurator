import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { VehicleContext } from "../../../views";

import "./Configurations.css";
import ConfigurationsCarousel from "./ConfigurationsCarousel";

export const Configurations: React.FC = ({ vehicles }) => {
  const navigate = useNavigate();

  function renderCars() {
    return <ConfigurationsCarousel vehicles={vehicles} />;
  }

  return <div className="configurations_info">{renderCars()}</div>;
};
