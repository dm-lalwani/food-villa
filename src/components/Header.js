import { useState } from "react";
import Logo from "../assets/img/foodVilla.png";

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
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Cart</a>
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
