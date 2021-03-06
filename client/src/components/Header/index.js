import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import "../Header/styles.css";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>KISS ANIME / キスアニメ </h1>
          <h4>FROM THE ASHES REBORN</h4>
        </Link>

        <nav className="text-center susi">
          {Auth.loggedIn() ? (
            <>
              <span id="menu">MENU</span>
              <div className="dropDownContent">
                <Link to="/profile">My Profile</Link>
                <Link to="/MyAnime">My Animes</Link>
                <a href="/" onClick={logout}>
                  Logout
                </a>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
