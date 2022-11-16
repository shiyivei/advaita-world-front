import React from "react";
import { Layout } from "antd";
import "./App.css";
import advaita_world_logo from "./pages/statics/img/backgroud-logo.png";
import Navigation_Header from "./pages/Navigation-Header";
import Navigation_Tail from "./pages/Navigation-Tail";
import { Link } from "react-router-dom";
import ConnectWallet from "./components/Wallet";

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
          className="Advaita-Logo"
        />
        {/* <div className="Video">
          <video
            src="https://youtu.be/YdCYT3LL3dw"
            controls
          ></video>
        </div> */}

        <div className="URLRouter"></div>
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
