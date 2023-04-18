import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useContext } from "react";
import authContext from "../../context/auth";
import BaseComponent from "../base/base.component";
import "./login.css";

export default function Login() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [authState, setAuthState] = useContext(authContext);
  useEffect(() => {
    if (authState) {
      navigate("/home");
    }
  }, [authState]);

  return (
    <>
    <div className="login-wrapper-container">
      <div>
        <BaseComponent />
      </div>
      
        <div className="login-container">
          <div className="login-first-section">
            <span className="login-head">Login Here</span>
            <span className="login-sub-section">
              Enter your credentials to Login
            </span>
          </div>
          <div className="login-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.target);
                const userName = data.get("userName");
                const password = data.get("password");
                signInWithEmailAndPassword(auth, userName, password)
                  .then((userdetails) => {
                    localStorage.setItem("isLoggedIn", JSON.stringify(auth));
                    console.log("User Logged In");
                    setAuthState(auth);
                  })
                  .catch(() => {
                    console.log("User Is Invalid");
                    alert(
                      "Incorrect UserName and/or Password. Please Try Again"
                    );
                  });
              }}
            >
              <input type="text" name="userName" placeholder="Enter your registered e-mail" />
              <br />
              <input type="password" name="password" placeholder="Enter Password" />
              <br />
              <button className="login-form-button">Login</button>
              <br />
              <br />
            </form>
            <div className="login-form-signup">
              <span
                onClick={() => {
                  navigate("/signup");
                }}
              >
                New to Flipkart? Create an account
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
