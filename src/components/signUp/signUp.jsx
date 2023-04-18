import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../firebase";
import { useNavigate } from "react-router-dom";
import BaseComponent from "../base/base.component";
import "./signUp.css";

function SignUp() {
  const navigate = useNavigate();
  return (
    <>
      <div className="signup-wrapper-container">
        <div>
          <BaseComponent />
        </div>

        <div className="signup-container">
          <div className="signup-first-section">
            <span className="signup-head">Sign Up</span>
            <span className="signup-sub-section">
              Enter your E-mail and Password to Register
            </span>
          </div>
          <div className="signup-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.target);
                const userName = data.get("userName");
                const password = data.get("password");
                e.target.reset();
                createUserWithEmailAndPassword(auth, userName, password)
                  .then((userDetails) => {
                    console.log(userDetails.user);
                    console.log("User Account Created Succesfully");
                    alert(
                      "Your account has been created successfully. Please login to Continue"
                    );
                    navigate("/login");
                  })
                  .catch((error) => {
                    console.log(error.code);
                    console.log(error.message);
                    alert(error.message);
                  });
              }}
            >
              <input type="text" name="userName" placeholder="Enter your e-mail"/>
              <br />
              <input type="password" name="password" placeholder="Set your password"/>
              <br />
              <button
                className="signup-form-button"
              >
                Create Account
              </button>
            </form>
            <div className="signup-form-signup">
              <span
                onClick={() => {
                  navigate("/login");
                }}
              >
                Already have an Account? Login here
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
