import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import { auth } from "./firebase";
import { Layout } from "./shared";
import { CarPicker, Configurator, Home, Login, Register } from "./views";

export const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  function onLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  const navigate = useNavigate();

  function handleLogout() {
    signOut(auth);
    navigate("/login");
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
      } else {
      }
    });
  });

  return (
    <RecoilRoot>
      <Layout onLogin={() => onLogin()}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Configurator" element={<Configurator />} />
          <Route path="/CarPicker" element={<CarPicker />} />
        </Routes>
        <Outlet />
      </Layout>
    </RecoilRoot>
  );
};

export default App;
