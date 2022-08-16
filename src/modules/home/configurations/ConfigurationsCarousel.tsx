import {
  doc,
  query,
  collection,
  onSnapshot,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { db } from "../../../firebase";
import { configuratorAtoms } from "../../../shared";
import { VehicleContext } from "../../../views";
import ConfigurationDisplay from "./ConfigurationDisplay";

interface Vehicle {
  id: string;
  name: string;
  paint: string;
  wheel: string;
  interior: string;
  date: Date;
}

const ConfigurationsCarousel: React.FC = ({ vehicles }) => {
  const [user, setUser] = useRecoilState(configuratorAtoms.setUser);
  const navigate = useNavigate();
  const alert = useAlert();

  async function handleDelete(car, id) {
    const leftOverCars = {} as {
      [key: string]: Vehicle | {} | undefined;
    };
    if (vehicles) {
      Object.entries(vehicles).forEach(([vehicleId, vehicle]) => {
        if (vehicleId !== id) {
          leftOverCars[vehicleId] = vehicle;
        }
      });
    }
    if (car) {
      navigate("/home");
      const docRef = await setDoc(doc(db, "vehicles", user), leftOverCars);
      alert.show("You have successfully deleted car configuration!");
    }
  }
  function editConfig(car) {
    navigate("/configurator");
  }

  console.log(vehicles);
  return (
    <>
      {vehicles &&
        Object.entries(vehicles).map(([id, car]) => (
          <ConfigurationDisplay
            id={id}
            carData={car}
            handleDelete={(car, id) => {
              handleDelete(car, id);
            }}
            editConfig={(car, id) => {
              editConfig(car);
            }}
          />
        ))}
    </>
  );
};

export default ConfigurationsCarousel;
