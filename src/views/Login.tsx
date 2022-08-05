import "./Css/register.css";

export const Login: React.FC = () => {
  return (
    <div className="register-screen">
      <div className="register-screen-info">
        <h2>Log in to car your configurator</h2>
      </div>
      <div className="register-screen-form">
        <h3>Login here</h3>
        <form>
          <input type="email" placeholder="email" />
          <br />
          <input type="password" placeholder="password" />
        </form>
        <br />
        <button className="register-button">Login</button>
      </div>
    </div>
  );
};
