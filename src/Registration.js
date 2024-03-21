import { useNavigate } from "react-router-dom";
import "./Common.css";

function Registration() {
  const navigate = useNavigate();

  const backToLogIn = () => {
    navigate("/");
  };
  return (
    <div className="login_page" style={{ padding: "30px 450px" }}>
      <h1>Sign Up</h1>
      <div className="form">
        <form
          action="/action_page.php"
          // style="border:1px solid #ccc"
        >
          <div class="container_login">
            <p>Please fill in this form to create an account.</p>
            <hr />

            <label for="fullName">
              <b>Full Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              name="fullName"
              required
            />

            <label for="number">
              <b>Number</b>
            </label>
            <input
              type="text"
              placeholder="Enter Number"
              name="number"
              required
            />

            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
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

            <label for="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              required
            />

            <label>
              <input
                type="checkbox"
                checked="checked"
                name="remember"
                // style="margin-bottom:15px"
              />
              Remember me
            </label>

            <p>
              By creating an account you agree to our{" "}
              <a
              // href="#"
              //   style="color:dodgerblue"
              >
                Terms & Privacy
              </a>
              .
            </p>

            <div class="clearfix">
              <button type="button" class="cancelbtn" onClick={backToLogIn}>
                Cancel
              </button>
              <button type="submit" class="signupbtn">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
