import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [userdata, setUserData] = useState();
  const [isloggedIn, setIsLoggedIn] = useState();
  useEffect(() => {
    const userdata = localStorage.getItem("username");
    setUserData(userdata);
    if (userdata) {
      setIsLoggedIn(true);
    }
  }, []);
  const handelLogout = () => {
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <>
      <div className="nav_container">
        <div className="top_menu_nav">
          <ul className="top_ul_nav">
            <li>Contact</li>
            <li>About</li>
            <li>
              <input type="text" id="search_nav" />
            </li>

            {!isloggedIn ? (
              <>
                {" "}
                <li>Login</li>
                <li>
                  <Link to={"/signup"} className="linkSignup">
                    SignUp
                  </Link>{" "}
                </li>
              </>
            ) : (
              <>
                <li>
                  Welcome, <strong>{userdata}</strong>
                  <li>
                    <Link className="linkSignup" onClick={handelLogout}>
                      Logout
                    </Link>
                  </li>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="menu_nav">
          <ul className="ul_nav">
            <li>Home</li>
            <li>Frozen Food</li>
            <li>Dairy</li>
            <li>Fresh Vegetables</li>
            <li>Fruits</li>
            <li>Vegitables</li>
            <li>
              <input type="text" id="search_nav" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
