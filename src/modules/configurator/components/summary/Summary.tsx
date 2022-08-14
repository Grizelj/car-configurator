import { setMaxListeners } from "events";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetRecoilValueInfo_UNSTABLE, useRecoilState } from "recoil";
import { db } from "../../../../firebase";
import { configuratorAtoms } from "../../../../shared";
import Carousel from "../carousel/Carousel";
import "./Summary.css";

const Summary: React.FC = ({}) => {
  const [cars, setCars] = useState<Car[]>();
  const [active, setActive] = useRecoilState(configuratorAtoms.setActive);
  const [car, setCar] = useRecoilState(configuratorAtoms.setCar);
  const [paint, setPaint] = useRecoilState(configuratorAtoms.setPaint);
  const [wheel, setWheel] = useRecoilState(configuratorAtoms.setWheel);
  const [interior, setInterior] = useRecoilState(configuratorAtoms.setInterior);
  const [carousel, setCarousel] = useRecoilState(configuratorAtoms.setCarousel);

  interface Car {
    car: string;
    paint: string;
    wheel: string;
    interior: string;
  }

  const navigate = useNavigate();

  useEffect(() => {
    setListener();
  }, []);

  function setListener() {
    const q = query(collection(db, "cars"));

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const cars = QuerySnapshot.docs.map((item) => item.data()) as Car[];

      setCars(cars);
    });
  }

  async function handleClick() {
    const docRef = await addDoc(collection(db, "cars"), {
      car: car,
      paint: paint,
      wheel: wheel,
      interior: interior,
    });
    console.log(docRef);
    navigate("/home");
  }

  return (
    <div className="summary">
      <div>
        <h1>Almost done!</h1>
        <p>Review your configuration and save your car.</p>
        <Carousel />
        <p>
          <span
            className="arrow left"
            onClick={() => setCarousel(carousel - 1)}
          ></span>{" "}
          {carousel} / 5{" "}
          <span
            className="arrow right"
            onClick={() => setCarousel(carousel + 1)}
          ></span>
        </p>
      </div>
      <div className="car_label">
        <div>
          <p>{car}</p>
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
              <button
                className="config_edit"
                onClick={() => setActive("Exterior")}
              >
                Edit
              </button>
            </p>
            <p>
              {paint === "Ultra Blue" && (
                <img src="/Assets2/Color=Ultra Blue.png" />
              )}
              {paint === "Black" && <img src="/Assets2/Color=Black.png" />}
              {paint === "Polar White" && (
                <img src="/Assets2/Color=Pola White.png" />
              )}
              {paint === "Nardo Gay" && (
                <img src="/Assets2/Color=Nardo Gay.png" />
              )}
              {paint === "Tango Red" && (
                <img src="/Assets2/Color=Tango Red.png" />
              )}
              {paint === "Turbo Blue" && (
                <img src="/Assets2/Color=Turbo Blue.png" />
              )}
              {paint === "Tactical Green" && (
                <img src="/Assets2/Color=Tactical Green.png" />
              )}
              {paint === "Florett Silver" && (
                <img src="/Assets2/Color=Florett Silver.png" />
              )}
              <span>{paint}</span>
              <span>price</span>
            </p>
            <p>
              {wheel === "RS6One" && (
                <img src="/Assets2/Car=RS6, Style=One.png" />
              )}
              {wheel === "RS6Two" && (
                <img src="/Assets2/Car=RS6, Style=Two.png" />
              )}
              {wheel === "RS5One" && (
                <img src="/Assets2/Car=RS5, Style=One.png" />
              )}
              {wheel === "RS5Two" && (
                <img src="/Assets2/Car=RS5, Style=Two.png" />
              )}
              {wheel === "e-tronOne" && (
                <img src="/Assets2/Car=e-tron, Style=One.png" />
              )}
              {wheel === "e-tronTwo" && (
                <img src="/Assets2/Car=e-tron, Style=Two.png" />
              )}
              <span>{wheel}</span>
              <span>price</span>
            </p>
          </div>
          <div className="config_interior">
            <p>
              <span>Interior</span>
              <button
                className="config_edit"
                onClick={() => setActive("Interior")}
              >
                Edit
              </button>
            </p>
            <p>
              {interior === "Black&grey" && (
                <img src="/Assets2/Color=Black&grey.png"></img>
              )}
              {interior === "Black&red" && (
                <img src="/Assets2/Color=Black&red.png"></img>
              )}
              {interior === "Black-1" && (
                <img src="/Assets2/Color=Black-1.png"></img>
              )}
              {interior === "Brown" && (
                <img src="/Assets2/Color=Brown.png"></img>
              )}
              {interior === "Lunar Silver" && (
                <img src="/Assets2/Color=Lunar Silver.png"></img>
              )}
              {interior === "Red" && <img src="/Assets2/Color=Red.png"></img>}
              <span>{interior}</span>
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
          <span>{car}</span>
        </div>
        <div className="footer_save_config">
          <p>total</p>
          <p>PPRICE</p>
          <button className="save_config_button" onClick={handleClick}>
            <span>Save your configuration</span>
          </button>
        </div>
      </div>
    </div>
  );
};
