/** @jsxImportSource @emotion/react */
import "./Header.css";
import { Cross as Hamburger, Divide } from "hamburger-react";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firebase";

interface Props {
  onLogin: () => void;
}

export const Header: React.FC<Props> = ({ onLogin }) => {
  const [opened, setOpened] = useState(false);

  function handleLogout() {
    signOut(auth);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  });

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
              <button>My saved configurations</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
