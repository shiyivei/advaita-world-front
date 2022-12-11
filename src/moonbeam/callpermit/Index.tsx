import "./CallPermit.css";
import React from "react";

import { useState, useEffect } from "react";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";

// 引入合约地址和合约ABI
import precompileAddress from "./Address";
import helperAddress from "./HelperAddress";
import precompileAbi from "./Abi";
import helperAbi from "./HelperAbi";

// RPC端点
const providerRPC = {
  development: "http://localhost:9933",
  moonbase:
    //     "https://rpc.api.moonbase.moonbeam.network",
    "https://rpc.testnet.moonbeam.network",
};

// web3 实例
const web3 = new Web3(providerRPC.moonbase); //Change to correct network

// 获取合约实例实例
const callPermit = new web3.eth.Contract(
  precompileAbi,
  precompileAddress
);

const helper = new web3.eth.Contract(
  helperAbi,
  helperAddress
);

console.log(
  "callPermit,helper:",
  callPermit,
  helper
);

// 查询状态

export default function Batch() {
  // 定义回调函数
  const [currentAddress, setCurrentAddress] =
    useState();
  const [to, setTo] = useState();
  const [value, setValue] = useState();
  const [data, setData] = useState();
  const [deadline, setDeadline] = useState();
  const [v, setV] = useState();
  const [r, setR] = useState();
  const [s, setS] = useState();

  const [error, setError] = useState("");

  const dispatch = async (
    to: any,
    value: any,
    data: any,
    deadline: any,
    v: any,
    r: any,
    s: any
  ) => {
    setError("");
    connectWallet();
    // 检查插件钱包
    const provider: any =
      await detectEthereumProvider({
        mustBeMetaMask: true,
      });

    // 获取web3实例
    const web3 = new Web3(provider);
    // 获取合约实例实例
    const precompileContract =
      new web3.eth.Contract(
        precompileAbi,
        precompileAddress
      );

    // 执行合约交易
    try {
      await precompileContract.methods
        .dispatch(
          currentAddress,
          to,
          value,
          data,
          100000,
          deadline,
          v,
          r,
          s
        )
        .send({
          from: currentAddress,
        })
        .then(function (receipt: any) {
          console.log(
            "transfer receipt:",
            receipt
          );
          if (receipt.status) {
            window.confirm("dispatch success!");
          }
        });
    } catch (err: any) {
      setError(err.message);
      console.log("dispatch failed:", err);
    }
  };

  // 连接钱包更新地址
  const connectWallet = async () => {
    const provider: any =
      await detectEthereumProvider({
        mustBeMetaMask: true,
      });

    // 获取账户
    if (provider) {
      try {
        const current_account =
          await provider.request({
            method: "eth_requestAccounts",
          });

        console.log(
          "--------------- current accounts are:",
          current_account[0]
        );

        setCurrentAddress(current_account[0]);
      } catch (e) {
        console.log("No account");
        console.error(e);
      }
    } else {
      alert("Please install or reload metamask");
    }

    // 监听账户变化
    provider.on(
      "accountsChanged",
      (account: any) => {
        if (account.length === 0) {
          alert("Please connect to MetaMask");
        } else {
          setCurrentAddress(account);
          console.log(
            "---------------changed current accounts are:",
            account
          );
        }
      }
    );
  };

  const dispatchHandler = async () => {
    console.log(
      "获取到的表单参数:",
      to,
      value,
      data,
      deadline,
      v,
      r,
      s
    );

    dispatch(to, value, data, deadline, v, r, s);
  };

  return (
    <div className="Ca">
      <div className="callPermit">CALLPERMIT</div>
      <div className="Dispatch">
        <form>
          <input
            placeholder="to"
            type="text"
            onChange={(event: any) =>
              setTo(event.target.value)
            }
            value={to}
          ></input>
          <input
            placeholder="value"
            type="text"
            onChange={(event: any) =>
              setValue(event.target.value)
            }
            value={value}
          ></input>
          <input
            placeholder="data"
            type="text"
            onChange={(event: any) =>
              setData(event.target.value)
            }
            value={data}
          ></input>
          <input
            placeholder="deadline"
            type="text"
            onChange={(event: any) =>
              setDeadline(event.target.value)
            }
            value={deadline}
          ></input>
          <input
            placeholder="v"
            type="text"
            onChange={(event: any) =>
              setV(event.target.value)
            }
            value={v}
          ></input>
          <input
            placeholder="r"
            type="text"
            onChange={(event: any) =>
              setR(event.target.value)
            }
            value={r}
          ></input>
          <input
            placeholder="s"
            type="text"
            onChange={(event: any) =>
              setS(event.target.value)
            }
            value={s}
          ></input>
        </form>
        <button onClick={dispatchHandler}>
          Dispatch
        </button>
      </div>
    </div>
  );
}
