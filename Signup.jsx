import React, { useState } from "react";
import "./Signup.css";
const Signup = () => {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

  const handelRegister = (e) => {
    e.preventDefault();
    if (!username || !email || !phone || !password) {
      alert("Fill in all the details");
    } else {
      localStorage.setItem("username", username);
      console.log("The details are", username, email, phone, password);
      location.reload();
    }
  };
  return (
    <>
      <div className="signup_container">
        <div className="top_signup">
          <h1>Signup to Order</h1>
          <p>Already a member! Login here</p>
        </div>
        <div className="username">
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="emailid">
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="phone">
          <input
            type="number"
            placeholder="Enter Contact"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="password">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button id="signup_btn" onClick={(e) => handelRegister(e)}>
            Signup
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
