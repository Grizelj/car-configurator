import Hamburger from "hamburger-react";
import { useState } from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { configuratorAtoms } from "../../../shared";

type Props = {
  id: string;
  carData: {
    name: string;
    paint: string;
    wheel: string;
    interior: string;
    date: Date;
  };
  handleDelete: (
    carData: {
      name: string;
      paint: string;
      wheel: string;
      date: Date;
    },
    id: string
  ) => void;
  editConfig: (
    carData: {
      name: string;
      paint: string;
      wheel: string;
      date: Date;
    },
    id: string
  ) => void;
};

const ConfigurationDisplay = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);
  const [car, setCar] = useRecoilState(configuratorAtoms.setCar);
  const [paint, setPaint] = useRecoilState(configuratorAtoms.setPaint);
  const [wheel, setWheel] = useRecoilState(configuratorAtoms.setWheel);
  const [interior, setInterior] = useRecoilState(configuratorAtoms.setInterior);
  const [carEditToId, setCarEditToId] = useRecoilState(
    configuratorAtoms.setCarEditToId
  );
  const [user, setUser] = useRecoilState(configuratorAtoms.setUser);
  const { carData, id, handleDelete, editConfig } = props;
  const navigate = useNavigate();
  const alert = useAlert();

  type ConfigurationsCarouselProps = {
    children: JSX.Element;
  };

  function ConfigurationsCarousel(props: ConfigurationsCarouselProps) {
    return <div>{props.children}</div>;
  }

  return (
    <div key={id}>
      <ConfigurationsCarousel>
        <div className="renderCars">
          <div className="renderCars_img">
            <img
              className="configurationsImg"
              src={`/Assets3/View=Side, Color=${carData.paint}, Wheel Style=${carData.wheel}.png`}
            />
          </div>
          <div className="renderCars_info">
            <p>2022</p>
            <h2>{carData.name}</h2>
            <p>{carData.paint}</p>
            <p>
              Created{" "}
              {carData.date.toDate().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
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
                <button
                  onClick={() => {
                    editConfig(carData, id);
                    setMenuOpen(false);
                    setCarEditToId(id);
                    setCar(carData.name);
                    setPaint(carData.paint);
                    setWheel(carData.wheel);
                    setInterior(carData.interior);
                  }}
                >
                  Edit configuration
                </button>
                <button onClick={() => handleDelete(carData, id)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </ConfigurationsCarousel>
    </div>
  );
};

export default ConfigurationDisplay;
