import "./Common.css";
import Registration from "./Registration";
import { useNavigate } from "react-router-dom";
import LoginAvatar from "./imgFiles/img_avatar2.png";
// import { useHistory } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const nevigateToRegistration = () => {
    navigate("/registration");
  };

  const nevigateToDashboard = () => {
    navigate("/home");
  };

  return (
    <div className="login_page" style={{ padding: "30px 450px" }}>
      <h2>Login Form</h2>
      <div className="form">
        <form action="/action_page.php" method="post">
          <div className="imgcontainer">
            <img src={LoginAvatar} alt="Avatar" className="avatar" />
          </div>

          <div className="container_login">
            <label for="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <button type="submit" onClick={nevigateToDashboard}>
              Login
            </button>
            <label>
              <input type="checkbox" checked="checked" name="remember" />{" "}
              Remember me
            </label>
          </div>

          <div className="container_login">
            {/* <button type="button" className="cancelbtn">
            Don't have an account yet?
          </button>

          <button type="button" className="cancelbtn">
            Don't have an account yet?
          </button> */}

            <span className="psw-one">
              Don't have an account yet ?{" "}
              <a onClick={nevigateToRegistration} href="/registration">
                Register now
              </a>
            </span>

            <span className="psw">
              Forgot <a href="#">password?</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
