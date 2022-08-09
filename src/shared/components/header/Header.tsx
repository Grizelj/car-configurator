/** @jsxImportSource @emotion/react */
import "./Header.css";
import { Cross as Hamburger, Divide } from "hamburger-react";
import { useState } from "react";

interface Props {
  onLogin: () => void;
}

export const Header: React.FC<Props> = ({ onLogin }) => {
  const [opened, setOpened] = useState(false);
  return (
    <header className="navbar">
      <a href="https://prototyp.digital/" className="navbar-icon"></a>

      <div className="navbar-right">
        <button className="navbar-button">Configure a car</button>
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
              <a href="#">My saved configurations</a>
              <a href="#">Logout</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
