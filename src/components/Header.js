import { useState } from "react";
import Logo from "../assets/img/foodVilla.png";
import { Link, useNavigate } from "react-router-dom";
import useOnline from "../utils/useOnline";

const HeaderLogo = () => (
  <div className="">
    <a href="/">
      <img
        className="w-20"
        // src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
        src={Logo}
        alt="logo"
      ></img>
    </a>
  </div>
);

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const isOnline = useOnline();

  return (
    <header
      className="shadow-xl fixed top-0 left-0 w-full bg-white"
      id="navBarId"
    >
      <div className="container">
        <div className="flex justify-between">
          <HeaderLogo />
          <div className="flex items-center">
            <ul className="flex">
              <li className="px-3">Online Status: {isOnline ? "✅" : "🔴"}</li>
              <li className="px-3">
                <Link to="/">Home</Link>
              </li>
              <li className="px-3">
                <Link to="/about">About</Link>
              </li>
              <li className="px-3">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="px-3">
                <Link to="#">Cart</Link>
              </li>
              <li className="px-3">
                <Link to="/instamart">Grocery</Link>
              </li>
            </ul>
            {isLogin ? (
              <button className="px-3" onClick={() => setIsLogin(false)}>
                Logout
              </button>
            ) : (
              <button
                className="px-3"
                onClick={() => {
                  setIsLogin(true);
                  navigate("/login");
                }}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
