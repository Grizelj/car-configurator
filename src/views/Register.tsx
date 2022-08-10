import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import "./Css/register.css";

export const Register: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [regEmail, setRegEmail] = useState<string>();
  const [regPassword, setRegPassword] = useState<string>();

  function handleSubmit(f: React.FormEvent) {
    f.preventDefault();

    if (!email || !password) {
      console.log("error");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error");
        // ..
      });

    console.log("dadadada");
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
    <div className="register_screen">
      <div className="register_screen_info">
        <h2>Start working on your car configurations and register here.</h2>
        <div className="register_screen_img"></div>
      </div>

      <div className="register_screen_form">
        <h3>Register here</h3>
        <form>
          <div className="form_input">
            <input
              value={regEmail}
              onChange={(f) => setRegEmail(f.currentTarget.value)}
              type="email"
              name="email"
            />
            <label htmlFor="email" className="form_label">
              Email
            </label>
          </div>
          <br />
          <div className="form_input">
            <input
              value={regPassword}
              onChange={(f) => setRegPassword(f.currentTarget.value)}
              type="password"
              name="password"
            />
            <label htmlFor="password" className="form_label">
              Password
            </label>
          </div>
        </form>
        <br />
        <button className="register_button" onClick={handleSubmit}>
          Register
        </button>
        <p>
          Already have an account? Login <a href="#">here.</a>
        </p>
      </div>
    </div>
  );
};
