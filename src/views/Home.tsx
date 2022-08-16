import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { auth, db } from "../firebase";
import { Configurations, Empty } from "../modules";
import { configuratorAtoms } from "../shared";
import "./Css/empty-state.css";

interface Vehicle {
  id: string;
  name: string;
  paint: string;
  wheel: string;
  interior: string;
  date: Date;
}

export const VehicleContext = createContext({});

export const Home: React.FC = () => {
  const [vehicles, setVehicles] = useState<{
    [key: string]: Vehicle;
  }>({});
  const [user] = useRecoilState(configuratorAtoms.setUser);
  const [active, setActive] = useRecoilState(configuratorAtoms.setActive);
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    setListener();
  }, []);

  function setListener() {
    const unsubscribe = onSnapshot(
      doc(db, "vehicles", user),
      (querySnapshot) => {
        const vehicles = querySnapshot.data() as {
          [key: string]: Vehicle;
        };
        setVehicles(vehicles);
      }
    );
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        // ...
      } else {
        navigate("/login");
      }
    });
  });

  console.log(Object.keys(vehicles).length);
  return (
    <div className="empty-state-home">
      <div className="empty-state-configuration">
        <p>View saved configurations</p>
        <button
          className="empty-state-button"
          onClick={() => {
            navigate("/CarPicker");
            setActive("Exterior");
          }}
        >
          <span>Configure a car </span>
        </button>
      </div>
      <div className="empty-state-wrapper">
        {vehicles && Object.keys(vehicles).length > 0 ? (
          <VehicleContext.Provider value={vehicles}>
            <Configurations vehicles={vehicles} />
          </VehicleContext.Provider>
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};
