import React from "react";
import { useParams } from "react-router-dom";
import advaita_world_logo from "../pages/statics/img/backgroud-logo.png";
import Navigation_Header from "../pages/Navigation-Header";
import Navigation_Tail from "../pages/Navigation-Tail";
import ConnectWallet from "../components/Wallet";
export default function GenesisCollection() {
  //   const { imei, ts, nonce, api_key, signature } =
  //     useParams();

  //   // 存储手表
  //   const store_watch = async (imei: any) => {
  //     await iotex.store_watch(imei);
  //   };

  //   api
  //     .decrypt_signature(
  //       imei,
  //       ts,
  //       nonce,
  //       api_key,
  //       signature
  //     )
  //     .then(function (result) {
  //       if (result == true) {
  //         store_watch(imei);
  //       }
  //     });
  //   store_watch(imei);
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
