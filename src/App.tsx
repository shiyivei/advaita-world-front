import { Layout } from "antd";
import "./App.css";
import advaita_world_logo from "./pages/statics/img/backgroud-logo.png";
import art_adt_combination from "./pages/statics/img/art-adt-combination.png";
import Navigation_Header from "./pages/Navigation-Header";
import Navigation_Tail from "./pages/Navigation-Tail";
import ConnectWallet from "./components/RegisterOrLogin";
import { Link } from "react-router-dom";
import React, {
  useState,
  useEffect,
} from "react";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <img
          src={advaita_world_logo}
          alt="logo"
          className="Advaita-Logo"
        />
        <div className="Main-content">
          精彩内容，即将呈现
        </div>
        {/* <img
        src={art_adt_combination}
        alt="logo"
        className="Advaita-Coin"
      /> */}

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
