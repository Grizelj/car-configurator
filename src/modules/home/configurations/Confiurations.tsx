import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Configurations.css";
import ConfigurationsCarousel from "./ConfigurationsCarousel";

export const Configurations: React.FC = ({}) => {
  const navigate = useNavigate();

  function renderCars() {
    return <ConfigurationsCarousel />;
  }

  return (
    <div className="configurations_info">
      <p>{renderCars()}</p>
    </div>
  );
};
