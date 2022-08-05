import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "../firebase";
import "./Css/register.css";

export const Register: React.FC = () => {
  return (
    <div className="register-screen">
      <div className="register-screen-info">
        <h2>Register into car your configurator</h2>
      </div>
      <div className="register-screen-form">
        <h3>Register here</h3>
        <form>
          <input type="email" placeholder="email" />
          <br />
          <input type="password" placeholder="password" />
        </form>
        <br />
        <button className="register-button">Register</button>
      </div>
    </div>
  );
};
