import {
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const SignIn = () => {
  const handleClickShowPassword = () =>
    setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // Validation
  const [showPassword, setShowPassword] =
    React.useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [EmailErrorMsg, setEmailErrorMsg] =
    useState("");
  const [PasswordErrorMsg, setPasswordErrorMsg] =
    useState("");
  const [showEmailError, setShowEmailError] =
    useState(false);
  const [
    showPasswordError,
    setShowPasswordError,
  ] = useState(false);

  const handleEmail = (e) => {
    console.log("output", e.target.value);

    if (e.target.name == "Email") {
      setEmail(e.target.value);
      setEmailErrorMsg("");
      setShowEmailError(false);
    }
    if (e.target.value == "") {
      setShowEmailError(true);
      setEmailErrorMsg(
        "Email address is required"
      );
    }
    if (
      Email.length > 0 &&
      !/\S+@\S+\.\S+/.test(Email)
    ) {
      setShowEmailError(true);
      setEmailErrorMsg(
        "Email address format is invalid."
      );
    }
  };

  const handlePassword = (e) => {
    console.log("output", e.target.value);
    if (e.target.name == "Password") {
      setPassword(e.target.value);
      setPasswordErrorMsg("");
      setShowPasswordError(false);
    }
    if (e.target.value == "") {
      setShowPasswordError(true);
      setPasswordErrorMsg("Password is required");
    }
    if (
      e.target.value.length < 8 &&
      e.target.value.length > 0
    ) {
      setShowPasswordError(true);
      setPasswordErrorMsg(
        "Password must be alteast 8 characters"
      );
    }
  };
  const handleSignIn = (e) => {
    console.log("enable", e.target.value);
  };
  return (
    <>
      {/* <div className="Navbar"> */}
      <div className="img-box">
        <img src="./images/Mactassos-logo_white.png" />
      </div>
      {/* </div> */}
      <div className="signin_container">
        <h1 className="signin_heading">
          Sign In
        </h1>
        <form className="form_box">
          <div className="email-box">
            <TextField
              id="standard-basic"
              label="Email address"
              name="Email"
              variant="standard"
              onChange={handleEmail}
              sx={{
                width: "63ch",
                marginBottom: "2rem",
                "& .MuiInputLabel-root.Mui-focused":
                  {
                    color: "black",
                  },
              }}
            />
            {showEmailError == true ? (
              <p className="error-Etext">
                {EmailErrorMsg}
              </p>
            ) : null}
          </div>
          <div className="password-box">
            <FormControl
              sx={{
                m: 1,
                width: "63ch",
                "& .MuiInputLabel-root.Mui-focused":
                  {
                    color: "black",
                  },
              }}
              variant="standard"
            >
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                name="Password"
                onChange={handlePassword}
                id="standard-adornment-password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={
                        handleClickShowPassword
                      }
                      onMouseDown={
                        handleMouseDownPassword
                      }
                    >
                      {showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {showPasswordError == true ? (
              <p className="error-Ptext">
                {PasswordErrorMsg}
              </p>
            ) : null}
          </div>
        </form>
        <div className="F-box">
          <Link
            to="./ForgotPassword"
            className="F-password"
          >
            Forgot password
          </Link>
        </div>
        <div className="terma_condation_section">
          By signing in, you have read and agree
          to our
          <a>
            Vista General Terms and Conditions.
          </a>{" "}
          For more details on how we use the
          information we collect about you, please
          read our <br />
          <a>Vista Privacy and Cookie Policy.</a>
        </div>
        <div className="Btn-section">
          <div className="sign_btn">
            <Link to="./Home">
              <button
                className={
                  Password == ""
                    ? "disable-btn"
                    : "enable-btn"
                }
                onClick={handleSignIn}
                disabled={!Password}
              >
                Sign In
              </button>
            </Link>
          </div>
          <p>or</p>
          <div className="Create-btn-box">
            <Link to="./Create_account">
              <button className="Create-btn">
                Create an account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
