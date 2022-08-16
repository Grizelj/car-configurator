import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
  onSnapshot,
  query,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetRecoilValueInfo_UNSTABLE, useRecoilState } from "recoil";
import firebase, { db } from "../../../../firebase";
import { configuratorAtoms } from "../../../../shared";
import Carousel from "../carousel/Carousel";
import "./Summary.css";

interface Vehicle {
  uid: string;
  name: string;
  paint: string;
  wheel: string;
  interior: string;
  date: Date;
}

const Summary: React.FC = ({}) => {
  const [cars, setCars] = useState<Vehicle[]>();
  const [active, setActive] = useRecoilState(configuratorAtoms.setActive);
  const [carEditToId, setCarEditToId] = useRecoilState(
    configuratorAtoms.setCarEditToId
  );
  const [car, setCar] = useRecoilState(configuratorAtoms.setCar);
  const [paint, setPaint] = useRecoilState(configuratorAtoms.setPaint);
  const [wheel, setWheel] = useRecoilState(configuratorAtoms.setWheel);
  const [interior, setInterior] = useRecoilState(configuratorAtoms.setInterior);
  const [carousel, setCarousel] = useRecoilState(configuratorAtoms.setCarousel);
  const [user, setUser] = useRecoilState(configuratorAtoms.setUser);
  const navigate = useNavigate();

  useEffect(() => {
    setListener();
  }, []);

  function setListener() {
    const unsubscribe = onSnapshot(
      doc(db, "vehicles", user),
      (querySnapshot) => {
        const vehicles = querySnapshot.data() as Vehicle[];
        setCars(vehicles);
      }
    );
  }

  async function handleClick() {
    if (carEditToId && carEditToId !== "") {
      const docRef = await updateDoc(doc(db, "vehicles", user), {
        [carEditToId]: {
          name: car,
          paint,
          wheel,
          interior,
          date: new Date(),
        },
      });
      setCar("");
      setPaint("");
      setWheel("");
      setInterior("");
      navigate("/home");
      return;
    }
    const tempId = crypto.getRandomValues(new Uint8Array(16)).join("");
    const tempData = {
      ...cars,
      [tempId]: {
        name: car,
        paint: paint,
        wheel: wheel,
        interior: interior,
        date: getDate(),
      },
    };
    const docRef = await setDoc(doc(db, "vehicles", user), tempData);
    navigate("/home");
  }

  const getDate = () => {
    const now = Timestamp.now().toDate();
    return now;
  };

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
          ></span>
          <span className="no_select"> {carousel} / 5 </span>
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
          <p>120,000.12 €</p>
        </div>
      </div>
      <div className="configuration_details">
        <div className="config_info">
          <p>Your configuration details</p>
        </div>
        <div className="config_summary">
          <div className="config_summary_exterior">
            <div className="config_summary_exterior_label">
              <span>Exterior</span>
              <button
                className="config_edit"
                onClick={() => setActive("Exterior")}
              >
                Edit
              </button>
            </div>
            <div className="config_summary_exterior_paint">
              <div className="config_summary_exterior_paint_picker">
                <div className="config_summary_exterior_paint_picker_left">
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
                </div>
                <div>
                  <span>{paint}</span>
                </div>
              </div>
              <div className="config_summary_exterior_paint_price">
                <span>2,500 €</span>
              </div>
            </div>
            <div className="config_summary_exterior_paint">
              <div className="config_summary_exterior_paint_picker">
                <div className="config_summary_exterior_paint_picker_left">
                  {wheel === "One" && car === "AUDI RS6 AVANT" && (
                    <img src="/Assets2/Car=RS6, Style=One.png" />
                  )}
                  {wheel === "Two" && car === "AUDI RS6 AVANT" && (
                    <img src="/Assets2/Car=RS6, Style=Two.png" />
                  )}
                  {wheel === "One" && car === "AUDI RS5" && (
                    <img src="/Assets2/Car=RS5, Style=One.png" />
                  )}
                  {wheel === "Two" && car === "AUDI RS5" && (
                    <img src="/Assets2/Car=RS5, Style=Two.png" />
                  )}
                  {wheel === "One" && car === "AUDI E-TRON GT" && (
                    <img src="/Assets2/Car=e-tron, Style=One.png" />
                  )}
                  {wheel === "Two" && car === "AUDI E-TRON GT" && (
                    <img src="/Assets2/Car=e-tron, Style=Two.png" />
                  )}
                </div>
                <span>{wheel}</span>
              </div>
              <div className="config_summary_exterior_paint_price">
                <span>0 €</span>
              </div>
            </div>
            <div className="config_summary_exterior_paint">
              <div className="config_summary_exterior_paint_picker"></div>
              <div className="config_summary_exterior_paint_price"></div>
            </div>
          </div>
          <div className="config_summary_exterior">
            <div className="config_summary_exterior_label">
              <span>Interior</span>
              <button
                className="config_edit"
                onClick={() => setActive("Exterior")}
              >
                Edit
              </button>
            </div>
            <div className="config_summary_exterior_paint">
              <div className="config_summary_exterior_paint_picker">
                <div className="config_summary_exterior_paint_picker_left">
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
                  {interior === "Red" && (
                    <img src="/Assets2/Color=Red.png"></img>
                  )}
                </div>
                <span>{interior}</span>
              </div>
              <div className="config_summary_exterior_paint_price">
                <span>0 €</span>
              </div>
            </div>
            <div className="config_summary_exterior_paint">
              <div className="config_summary_exterior_paint_picker"></div>
              <div className="config_summary_exterior_paint_price"></div>
            </div>
          </div>
          <div className="config_summary_total">
            <p>Total</p>
            <p>120,000.12 €</p>
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
          <p>120,000.12 €</p>
          <button className="save_config_button" onClick={handleClick}>
            <span>Save your configuration</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
