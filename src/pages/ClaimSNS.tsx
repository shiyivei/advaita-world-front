import React from "react";
import { useParams } from "react-router-dom";
import advaita_world_logo from "../pages/statics/img/backgroud-logo.png";
import Navigation_Header from "../pages/Navigation-Header";
import Navigation_Tail from "../pages/Navigation-Tail";
import ConnectWallet from "../components/Wallet";
import TestRouter from "./TestRouter";

export default function ClaimSNS() {
  return (
    <div className="App">
      <div className="App-body">
        <div className="Test-Style">
          <div className="Test-Content">
            测试文案
          </div>
          <button className="Test-Button">
            测试按钮
          </button>
          <input
            className="Test-Input"
            placeholder="enter your content"
          ></input>
          <img
            src={advaita_world_logo}
            alt="logo"
            className="Advaita"
          />
          <TestRouter />
        </div>
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
