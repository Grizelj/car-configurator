import "./Css/register.css";

export const Login: React.FC = () => {
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
            <input type="email" placeholder="email" name="name" />
            <label htmlFor="name" className="form_label">
              Name
            </label>
          </div>
          <br />
          <div className="form_input">
            <input type="password" placeholder="password" name="password" />
            <label htmlFor="password" className="form_label">
              Password
            </label>
          </div>
        </form>
        <br />
        <button className="register_button">Login</button>
      </div>
    </div>
  );
};
