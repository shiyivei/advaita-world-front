import { useParams } from "react-router-dom";
import advaita_world_logo from "../pages/statics/img/backgroud-logo.png";
import Navigation_Header from "./Navigation-Header";
import Navigation_Tail from "./Navigation-Tail";
import ConnectWallet from "../components/Wallet";
import TestRouter from "./TestRouter";
import React, {
  useState,
  useEffect,
} from "react";

export default function ClaimSNS() {
  const [message, setMessage] = useState("test");

  useEffect(() => {
    console.log(mail);
  });

  const [mail, setMail] = useState([]);

  const handChangeValue = (e: any) => {
    setMail(e.target.value);
  };

  return (
    <div>
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
    </div>
  );
}
