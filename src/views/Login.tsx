import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { auth } from "../firebase";
import { configuratorAtoms } from "../shared";
import "./Css/register.css";

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [user, setUser] = useRecoilState(configuratorAtoms.setUser);

  const navigate = useNavigate();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !password) {
      console.log("error");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        navigate("/home");
        const user = userCredential.user;
        setUser(user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error login");
      });
  }

  return (
    <div className="register_screen">
      <div className="register_screen_info">
        <h2>Start working on your car configurations and login here.</h2>
        <div className="register_screen_img"></div>
      </div>

      <div className="register_screen_form">
        <h3>Login here</h3>
        <form>
          <div className="form_input">
            <input
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              type="email"
              name="name"
            />
            <label htmlFor="name" className="form_label">
              Name
            </label>
          </div>
          <br />
          <div className="form_input">
            <input
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              type="password"
              name="password"
            />
            <label htmlFor="password" className="form_label">
              Password
            </label>
          </div>
        </form>
        <br />
        <button className="register_button" onClick={handleLogin}>
          Login
        </button>
        <p>
          If you don't have an account, register{" "}
          <Link to="/Register">here.</Link>
        </p>
      </div>
    </div>
  );
};
