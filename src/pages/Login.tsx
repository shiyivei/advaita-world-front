import React from "react";
import { useParams } from "react-router-dom";
import { redirect } from "react-router-dom";

const WP = () => {};

export default function Login() {
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
    <div>{/* <h1>Watch Page</h1> */}Login</div>
  );
}
