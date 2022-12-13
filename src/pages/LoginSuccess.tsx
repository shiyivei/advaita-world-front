import React from "react";
import { useParams } from "react-router-dom";
import advaita_world_logo from "../pages/statics/img/backgroud-logo.png";
import Navigation_Header from "./Navigation-Header";
import Navigation_Tail from "./Navigation-Tail";
import ConnectWallet from "../components/Login";

import Navigation from "./Navigation-Header";
import BG from "../components/BG";
import Tail from "./Navigation-Tail";
import LoginSuccess from "../components/GetAsset";
import { Link } from "react-router-dom";
import home_logo9 from "../pages/statics/img/homepage/9.png";
import Back from "../components/Back";

export default function Element() {
  return (
    <div>
      <div className="App">
        <div className="Body">
          <div className="BG">
            <BG />
          </div>
          <div className="Navigation">
            <Link
              className="Logo-Home"
              style={{
                textDecoration: "none",
              }}
              to="/"
            >
              <img
                src={home_logo9}
                alt="logo"
                className="home_logo"
              />
            </Link>

            <div className="Navigation-Home">
              <Navigation />
            </div>
            <div className="Login-Home">
              <Back />
            </div>
          </div>
          <div className="Play">
            <LoginSuccess />
          </div>
        </div>
        <div className="Tail">
          <Tail />
        </div>
      </div>
    </div>
  );
}
