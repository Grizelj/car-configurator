/** @jsxImportSource @emotion/react */
import "./Header.css";
import { Cross as Hamburger, Divide } from "hamburger-react";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const [opened, setOpened] = useState(false);

  const navigate = useNavigate();
  function handleLogOut() {
    signOut(auth);
    navigate("/Login");
    setOpened(false);
  }
  function mySavedConfig() {
    navigate("/home");
    setOpened(false);
  }

  function checker() {
    if (window.location.pathname == "/CarPicker") {
      <button className="navbar-button" onClick={() => navigate("/CarPicker")}>
        Configure a car
      </button>;
    } else {
    }
  }

  return (
    <header className="navbar">
      <a href="https://prototyp.digital/" className="navbar-icon"></a>

      <div className="navbar-right">
        <button
          className="navbar-button"
          onClick={() => navigate("/CarPicker")}
        >
          Configure a car
        </button>
        <div className="navbar-hamburger">
          <Hamburger
            distance="sm"
            label="Show menu"
            toggled={opened}
            toggle={setOpened}
            onToggle={(toggled) => {
              if (toggled) {
                setOpened(true);
              } else {
                setOpened(false);
              }
            }}
          />
          {opened && (
            <div className="navbar-menu">
              <button onClick={() => mySavedConfig()}>
                My saved configurations
              </button>
              <button onClick={() => handleLogOut()}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
