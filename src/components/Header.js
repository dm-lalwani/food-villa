import { useState } from "react";
import Logo from "../assets/img/foodVilla.png";
import { Link } from "react-router-dom";

const Title = () => (
  <div className="nav-logo">
    <a href="/">
      <img
        // src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
        src={Logo}
        alt="logo"
      ></img>
    </a>
  </div>
);

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="navbar">
      <Title />
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="#">Cart</Link>
      </div>
      {isLogin ? (
        <button onClick={() => setIsLogin(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLogin(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
