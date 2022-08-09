import React, { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./shared";
import { CarDetails, Configurator, Home, Login, Register } from "./views";

export const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  function onLogin() {
    setIsLoggedIn(!isLoggedIn);
  }
  return (
    <Layout onLogin={() => onLogin()}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Configurator" element={<Configurator />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Outlet />
    </Layout>
  );
};

export default App;
