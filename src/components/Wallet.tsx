import React from "react";
import { useEffect } from "react";
import "./Components.css";

export default function ConnectWallet() {
  const checkWalletIsConnected = () => {};
  const connectWalletHandler = () => {};

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  const connectWalletButton = () => {
    return (
      <button
        onClick={connectWalletHandler}
        className="cta-button connect-wallet-button"
      >
        Login
      </button>
    );
  };

  return (
    <div className="main-app">
      {/* <h1>Scrappy Squirrels Tutorial</h1> */}
      <div>{connectWalletButton()}</div>
    </div>
  );

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
}
