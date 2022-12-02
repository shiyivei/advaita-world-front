import React from "react";
import { useEffect } from "react";
import "./Components.css";
import { Link } from "react-router-dom";

export default function RegisterOrLogin() {
  const checkWalletIsConnected = () => {};
  const connectWalletHandler = () => {};

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  const connectWalletButton = () => {
    return (
      <>
        <Link
          style={{ textDecoration: "none" }}
          to="/loginwithcode"
        >
          <button
            onClick={connectWalletHandler}
            className="cta-button"
          >
            Register or Login
          </button>
        </Link>
      </>
    );
  };

  return (
    <div className="main-app">
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
