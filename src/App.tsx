import React from "react";
import { Layout } from "antd";
import "./App.css";
import advaita_world_logo from "./pages/statics/img/advaita-world-logo.png";
import Navigation_Header from "./pages/Navigation-Header";
import Navigation_Tail from "./pages/Navigation-Tail";
import ConnectWallet from "./components/Wallet";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="App-Navigation-Header">
          <div className="Column">
            <Navigation_Header />
          </div>
          <div className="Login">
            <ConnectWallet />
          </div>
        </div>
      </div>
      <div className="App-body">
        <img
          src={advaita_world_logo}
          alt="logo"
          className="Advaita_world_logo"
        />
        <div className="URLRouter">
          {/* <nav>
            <Link to="/">首页</Link>
            <span> | </span>
            <Link to="/about">关于</Link>
            <span> | </span>
            <Link to="/join">加入</Link>
            <span> | </span>
            <hr />
          </nav> */}
        </div>
      </div>
      <div className="App-tail">
        <div className="App-Navigation-Tail">
          <Navigation_Tail />
        </div>
      </div>
    </div>
  );
}

export default App;
