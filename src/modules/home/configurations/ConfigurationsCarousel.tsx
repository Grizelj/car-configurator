import {
  doc,
  query,
  collection,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { useRecoilRefresher_UNSTABLE, useRecoilState } from "recoil";
import { setCommentRange } from "typescript";
import { db } from "../../../firebase";
import { configuratorAtoms } from "../../../shared";

interface Vehicle {
  id: string;
  name: string;
  paint: string;
  wheel: string;
  interior: string;
  date: Date;
}

const ConfigurationsCarousel: React.FC = ({}) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>();
  const [menuOpen, setMenuOpen] = useState(Boolean);
  const [car, setCar] = useRecoilState(configuratorAtoms.setCar);
  const [paint, setPaint] = useRecoilState(configuratorAtoms.setPaint);
  const [wheel, setWheel] = useRecoilState(configuratorAtoms.setWheel);
  const [interior, setInterior] = useRecoilState(configuratorAtoms.setInterior);
  const navigate = useNavigate();
  const alert = useAlert();
  useEffect(() => {
    setListener();
  }, []);

  function setListener() {
    const q = query(collection(db, "vehicles"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const vehicles = querySnapshot.docs.map((item) =>
        item.data()
      ) as Vehicle[];

      setVehicles(vehicles);
    });
  }
  type ConfigurationsCarouselProps = {
    children: JSX.Element;
  };

  function ConfigurationsCarousel(props: ConfigurationsCarouselProps) {
    return <div>{props.children}</div>;
  }

  async function handleDelete(car) {
    if (car) {
      navigate("/home");
      await deleteDoc(doc(db, "vehicles", car.id));
      alert.show("Configuration has been deleted!");
      setMenuOpen(false);
    }
  }
  function editConfig(car) {
    navigate("/configurator");
    setMenuOpen(false);
    setCar(car.name);
    setPaint(car.paint);
    setWheel(car.wheel);
    setInterior(car.interior);
  }
  console.log(vehicles);
  return vehicles?.map((car) => (
    <div key={car.id}>
      <ConfigurationsCarousel>
        <>
          {car.name === "AUDI RS6 AVANT" &&
            car.paint === "Ultra Blue" &&
            car.wheel === "RS6One" && (
              <div className="renderCars">
                <div className="renderCars_img">
                  <img
                    className="configurationsImg"
                    src="/Assets2/View=Side, Color=Blue, Wheel Style=One.png"
                  />
                </div>
                <div className="renderCars_info">
                  <p>2022</p>
                  <h2>{car.name}</h2>
                  <p>{car.paint}</p>

                  <p>{car.date}</p>
                </div>
                <div className="configurations-hamburger">
                  <Hamburger
                    distance="sm"
                    label="Show menu"
                    toggled={menuOpen}
                    toggle={setMenuOpen}
                    onToggle={(toggled) => {
                      if (toggled) {
                        setMenuOpen(true);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  />
                  {menuOpen && (
                    <div className="configurations-menu">
                      <button onClick={() => editConfig(car)}>
                        Edit configuration
                      </button>
                      <button onClick={() => handleDelete(car)}>Delete</button>
                    </div>
                  )}
                </div>
              </div>
            )}

          {car.name === "AUDI RS6 AVANT" &&
            car.paint === "Ultra Blue" &&
            car.wheel === "RS6Two" &&
            car.id === car.id && (
              <div className="renderCars">
                <div className="renderCars_img">
                  <img
                    className="configurationsImg"
                    src="/Assets2/View=Side, Color=Blue, Wheel Style=Two.png"
                  />
                </div>
                <div className="renderCars_info">
                  <p>2022</p>
                  <h2>{car.name}</h2>
                  <p>{car.paint}</p>

                  <p>{car.date}</p>
                </div>
                <div className="configurations-hamburger">
                  <Hamburger
                    distance="sm"
                    label="Show menu"
                    toggled={menuOpen}
                    toggle={setMenuOpen}
                    onToggle={(toggled) => {
                      if (toggled) {
                        setMenuOpen(true);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  />
                  {menuOpen && (
                    <div className="configurations-menu">
                      <button onClick={() => editConfig(car.id)}>
                        Edit configuration
                      </button>
                      <button onClick={() => handleDelete(car.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

          {car.name === "AUDI RS6 AVANT" &&
            car.paint === "Black" &&
            car.wheel === "RS6One" &&
            car.id === car.id && (
              <div className="renderCars">
                <div className="renderCars_img">
                  <img
                    className="configurationsImg"
                    src="/Assets2/View=Side, Color=Black, Wheel Style=One.png"
                  />
                </div>
                <div className="renderCars_info">
                  <p>2022</p>
                  <h2>{car.name}</h2>
                  <p>{car.paint}</p>

                  <p>{car.date}</p>
                </div>
                <div className="configurations-hamburger">
                  <Hamburger
                    distance="sm"
                    label="Show menu"
                    toggled={menuOpen}
                    toggle={setMenuOpen}
                    onToggle={(toggled) => {
                      if (toggled) {
                        setMenuOpen(true);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  />
                  {menuOpen && (
                    <div className="configurations-menu">
                      <button onClick={() => editConfig(car.id)}>
                        Edit configuration
                      </button>
                      <button onClick={() => handleDelete(car.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

          {car.name === "AUDI RS6 AVANT" &&
            car.paint === "Black" &&
            car.wheel === "RS6Two" &&
            car.id === car.id && (
              <div className="renderCars">
                <div className="renderCars_img">
                  <img
                    className="configurationsImg"
                    src="/Assets2/View=Side, Color=Black, Wheel Style=Two.png"
                  />
                </div>
                <div className="renderCars_info">
                  <p>2022</p>
                  <h2>{car.name}</h2>
                  <p>{car.paint}</p>

                  <p>{car.date}</p>
                </div>
                <div className="configurations-hamburger">
                  <Hamburger
                    distance="sm"
                    label="Show menu"
                    toggled={menuOpen}
                    toggle={setMenuOpen}
                    onToggle={(toggled) => {
                      if (toggled) {
                        setMenuOpen(true);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  />
                  {menuOpen && (
                    <div className="configurations-menu">
                      <button onClick={() => editConfig(car.id)}>
                        Edit configuration
                      </button>
                      <button onClick={() => handleDelete(car.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

          {car.name === "AUDI RS6 AVANT" &&
            car.paint === "Polar White" &&
            car.wheel === "RS6Two" && (
              <div className="renderCars">
                <div className="renderCars_img">
                  <img
                    className="configurationsImg"
                    src="/Assets2/View=Side, Color=White, Wheel Style=One-1.png"
                  />
                </div>
                <div className="renderCars_info">
                  <p>2022</p>
                  <h2>{car.name}</h2>
                  <p>{car.paint}</p>

                  <p>{car.date}</p>
                </div>
                <div className="configurations-hamburger">
                  <Hamburger
                    distance="sm"
                    label="Show menu"
                    toggled={menuOpen}
                    toggle={setMenuOpen}
                    onToggle={(toggled) => {
                      if (toggled) {
                        setMenuOpen(true);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  />
                  {menuOpen && (
                    <div className="configurations-menu">
                      <button onClick={() => editConfig(car.id)}>
                        Edit configuration
                      </button>
                      <button onClick={() => handleDelete(car.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

          {car.name === "AUDI RS6 AVANT" &&
            car.paint === "Polar White" &&
            car.wheel === "RS6One" && (
              <div className="renderCars">
                <div className="renderCars_img">
                  <img
                    className="configurationsImg"
                    src="/Assets2/View=Side, Color=White, Wheel Style=Two-1.png"
                  />
                </div>
                <div className="renderCars_info">
                  <p>2022</p>
                  <h2>{car.name}</h2>
                  <p>{car.paint}</p>

                  <p>{car.date}</p>
                </div>
                <div className="configurations-hamburger">
                  <Hamburger
                    distance="sm"
                    label="Show menu"
                    toggled={menuOpen}
                    toggle={setMenuOpen}
                    onToggle={(toggled) => {
                      if (toggled) {
                        setMenuOpen(true);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  />
                  {menuOpen && (
                    <div className="configurations-menu">
                      <button onClick={() => editConfig(car.id)}>
                        Edit configuration
                      </button>
                      <button onClick={() => handleDelete(car.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

          {car.name === "AUDI RS5" &&
            car.paint === "Nardo Gay" &&
            car.wheel === "RS5One" && (
              <div className="renderCars">
                <div className="renderCars_img">
                  <img
                    className="configurationsImg"
                    src="/Assets2/View=Side, Color=Nardo Gay, Wheel Style=One.png"
                  />
                </div>
                <div className="renderCars_info">
                  <p>2022</p>
                  <h2>{car.name}</h2>
                  <p>{car.paint}</p>

                  <p>{car.date}</p>
                </div>
                <div className="configurations-hamburger">
                  <Hamburger
                    distance="sm"
                    label="Show menu"
                    toggled={menuOpen}
                    toggle={setMenuOpen}
                    onToggle={(toggled) => {
                      if (toggled) {
                        setMenuOpen(true);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  />
                  {menuOpen && (
                    <div className="configurations-menu">
                      <button onClick={() => editConfig(car.id)}>
                        Edit configuration
                      </button>
                      <button onClick={() => handleDelete(car.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

          {car.name === "AUDI RS5" &&
            car.paint === "Nardo Gay" &&
            car.wheel === "RS5Two" && (
              <div className="renderCars">
                <div className="renderCars_img">
                  <img
                    className="configurationsImg"
                    src="/Assets2/View=Side, Color=Nardo Gay, Wheel Style=Two.png"
                  />
                </div>
                <div className="renderCars_info">
                  <p>2022</p>
                  <h2>{car.name}</h2>
                  <p>{car.paint}</p>

                  <p>{car.date}</p>
                </div>
                <div className="configurations-hamburger">
                  <Hamburger
                    distance="sm"
                    label="Show menu"
                    toggled={menuOpen}
                    toggle={setMenuOpen}
                    onToggle={(toggled) => {
                      if (toggled) {
                        setMenuOpen(true);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  />
                  {menuOpen && (
                    <div className="configurations-menu">
                      <button onClick={() => editConfig(car.id)}>
                        Edit configuration
                      </button>
                      <button onClick={() => handleDelete(car.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

          {car.name === "AUDI RS5" &&
            car.paint === "Tango Red" &&
            car.wheel === "RS5One" && (
              <div className="renderCars">
                <div className="renderCars_img">
                  <img
                    className="configurationsImg"
                    src="/Assets2/View=Side, Color=Red, Wheel Style=One.png"
                  />
                </div>
                <div className="renderCars_info">
                  <p>2022</p>
                  <h2>{car.name}</h2>
                  <p>{car.paint}</p>

                  <p>{car.date}</p>
                </div>
                <div className="configurations-hamburger">
                  <Hamburger
                    distance="sm"
                    label="Show menu"
                    toggled={menuOpen}
                    toggle={setMenuOpen}
                    onToggle={(toggled) => {
                      if (toggled) {
                        setMenuOpen(true);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  />
                  {menuOpen && (
                    <div className="configurations-menu">
                      <button onClick={() => editConfig(car.id)}>
                        Edit configuration
                      </button>
                      <button onClick={() => handleDelete(car.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

          {car.name === "AUDI RS5" &&
            car.paint === "Tango Red" &&
            car.wheel === "RS5Two" && (
              <div className="renderCars">
                <div className="renderCars_img">
                  <img
                    className="configurationsImg"
                    src="/Assets2/View=Side, Color=Red, Wheel Style=Two.png"
                  />
                </div>
                <div className="renderCars_info">
                  <p>2022</p>
                  <h2>{car.name}</h2>
                  <p>{car.paint}</p>

                  <p>{car.date}</p>
                </div>
                <div className="configurations-hamburger">
                  <Hamburger
                    distance="sm"
                    label="Show menu"
                    toggled={menuOpen}
                    toggle={setMenuOpen}
                    onToggle={(toggled) => {
                      if (toggled) {
                        setMenuOpen(true);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  />
                  {menuOpen && (
                    <div className="configurations-menu">
                      <button onClick={() => editConfig(car.id)}>
                        Edit configuration
                      </button>
                      <button onClick={() => handleDelete(car.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

          {car.name === "AUDI RS5" &&
            car.paint === "Turbo Blue" &&
            car.wheel === "RS5One" && (
              <div className="renderCars">
                <div className="renderCars_img">
                  <img
                    className="configurationsImg"
                    src="/Assets2/View=Side, Color=Blue, Wheel Style=One-1.png"
                  />
                </div>
                <div className="renderCars_info">
                  <p>2022</p>
                  <h2>{car.name}</h2>
                  <p>{car.paint}</p>

                  <p>{car.date}</p>
                </div>
                <div className="configurations-hamburger">
                  <Hamburger
                    distance="sm"
                    label="Show menu"
                    toggled={menuOpen}
                    toggle={setMenuOpen}
                    onToggle={(toggled) => {
                      if (toggled) {
                        setMenuOpen(true);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  />
                  {menuOpen && (
                    <div className="configurations-menu">
                      <button onClick={() => editConfig(car.id)}>
                        Edit configuration
                      </button>
                      <button onClick={() => handleDelete(car.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

          {car.name === "AUDI RS5" &&
            car.paint === "Turbo Blue" &&
            car.wheel === "RS5Two" && (
              <div className="renderCars">
                <div className="renderCars_img">
                  <img
                    className="configurationsImg"
                    src="/Assets2/View=Side, Color=Blue, Wheel Style=Two-1.png"
                  />
                </div>
                <div className="renderCars_info">
                  <p>2022</p>
                  <h2>{car.name}</h2>
                  <p>{car.paint}</p>

                  <p>{car.date}</p>
                </div>
                <div className="configurations-hamburger">
                  <Hamburger
                    distance="sm"
                    label="Show menu"
                    toggled={menuOpen}
                    toggle={setMenuOpen}
                    onToggle={(toggled) => {
                      if (toggled) {
                        setMenuOpen(true);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  />
                  {menuOpen && (
                    <div className="configurations-menu">
                      <button onClick={() => editConfig(car.id)}>
                        Edit configuration
                      </button>
                      <button onClick={() => handleDelete(car.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

          {car.name === "AUDI E-TRON GT" &&
            car.paint === "Tactical Green" &&
            car.wheel === "e-tronOne" && (
              <div className="renderCars">
                <div className="renderCars_img">
                  <img
                    className="configurationsImg"
                    src="/Assets2/View=Side, Color=Green, Wheel Style=One.png"
                  />
                </div>
                <div className="renderCars_info">
                  <p>2022</p>
                  <h2>{car.name}</h2>
                  <p>{car.paint}</p>

                  <p>{car.date}</p>
                </div>
                <div className="configurations-hamburger">
                  <Hamburger
                    distance="sm"
                    label="Show menu"
                    toggled={menuOpen}
                    toggle={setMenuOpen}
                    onToggle={(toggled) => {
                      if (toggled) {
                        setMenuOpen(true);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  />
                  {menuOpen && (
                    <div className="configurations-menu">
                      <button onClick={() => editConfig(car.id)}>
                        Edit configuration
                      </button>
                      <button onClick={() => handleDelete(car.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

          {car.name === "AUDI E-TRON GT" &&
            car.paint === "Tactical Green" &&
            car.wheel === "e-tronTwo" && (
              <div className="renderCars">
                <div className="renderCars_img">
                  <img
                    className="configurationsImg"
                    src="/Assets2/View=Side, Color=Green, Wheel Style=Two.png"
                  />
                </div>
                <div className="renderCars_info">
                  <p>2022</p>
                  <h2>{car.name}</h2>
                  <p>{car.paint}</p>

                  <p>{car.date}</p>
                </div>
                <div className="configurations-hamburger">
                  <Hamburger
                    distance="sm"
                    label="Show menu"
                    toggled={menuOpen}
                    toggle={setMenuOpen}
                    onToggle={(toggled) => {
                      if (toggled) {
                        setMenuOpen(true);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  />
                  {menuOpen && (
                    <div className="configurations-menu">
                      <button onClick={() => editConfig(car.id)}>
                        Edit configuration
                      </button>
                      <button onClick={() => handleDelete(car.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

          {car.name === "AUDI E-TRON GT" &&
            car.paint === "Florett Silver" &&
            car.wheel === "e-tronOne" && (
              <div className="renderCars">
                <div className="renderCars_img">
                  <img
                    className="configurationsImg"
                    src="/Assets2/View=Side, Color=White, Wheel Style=One.png"
                  />
                </div>
                <div className="renderCars_info">
                  <p>2022</p>
                  <h2>{car.name}</h2>
                  <p>{car.paint}</p>

                  <p>{car.date}</p>
                </div>
                <div className="configurations-hamburger">
                  <Hamburger
                    distance="sm"
                    label="Show menu"
                    toggled={menuOpen}
                    toggle={setMenuOpen}
                    onToggle={(toggled) => {
                      if (toggled) {
                        setMenuOpen(true);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  />
                  {menuOpen && (
                    <div className="configurations-menu">
                      <button onClick={() => editConfig(car.id)}>
                        Edit configuration
                      </button>
                      <button onClick={() => handleDelete(car.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

          {car.name === "AUDI E-TRON GT" &&
            car.paint === "Florett Silver" &&
            car.wheel === "e-tronTwo" && (
              <div className="renderCars">
                <div className="renderCars_img">
                  <img
                    className="configurationsImg"
                    src="/Assets2/View=Side, Color=White, Wheel Style=Two.png"
                  />
                </div>
                <div className="renderCars_info">
                  <p>2022</p>
                  <h2>{car.name}</h2>
                  <p>{car.paint}</p>

                  <p>{car.date}</p>
                </div>
                <div className="configurations-hamburger">
                  <Hamburger
                    distance="sm"
                    label="Show menu"
                    toggled={menuOpen}
                    toggle={setMenuOpen}
                    onToggle={(toggled) => {
                      if (toggled) {
                        setMenuOpen(true);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  />
                  {menuOpen && (
                    <div className="configurations-menu">
                      <button onClick={() => editConfig(car.id)}>
                        Edit configuration
                      </button>
                      <button onClick={() => handleDelete(car.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
        </>
      </ConfigurationsCarousel>
    </div>
  ));
};

export default ConfigurationsCarousel;
