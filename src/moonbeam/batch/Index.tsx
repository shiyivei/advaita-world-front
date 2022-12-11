import "./Batch.css";
import React from "react";

import { useState, useEffect } from "react";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";

// 引入合约地址和合约ABI
import batchAddress from "./Address";
import callBatchAddress from "./HelperAddress";
import batchAbi from "./Abi";
import callBatchAbi from "./HelperAbi";

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
const batch = new web3.eth.Contract(
  batchAbi,
  batchAddress
);

const callBatch = new web3.eth.Contract(
  callBatchAbi,
  callBatchAddress
);

console.log("batch,helper:", batch, callBatch);

// 查询状态

export default function Batch() {
  // 定义回调函数
  const [currentAddress, setCurrentAddress] =
    useState();
  const [to1, setTo1] = useState("");
  const [to2, setTo2] = useState("");
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();

  const [error, setError] = useState("");

  const changeTo1 = (e: any) => {
    console.log(e.target, "changeVal");
    setTo1(e.target.value);
  };
  const changeTo2 = (e: any) => {
    console.log(e.target, "changeVal");
    setTo2(e.target.value);
  };
  const changeValue1 = (e: any) => {
    console.log(e.target, "changeVal");
    setValue1(e.target.value);
  };
  const changeValue2 = (e: any) => {
    console.log(e.target, "changeVal");
    setValue2(e.target.value);
  };

  const multiTransfer = async (
    to: any,
    value: any
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
    const batch = new web3.eth.Contract(
      batchAbi,
      batchAddress
    );

    // 执行合约交易
    try {
      await batch.methods
        .batchAll(to, value, [], [])
        .send({
          from: currentAddress,
        })
        .then(function (receipt: any) {
          console.log(
            "transfer receipt:",
            receipt
          );
          if (receipt.status) {
            window.confirm("transfer success!");
          }
        });
    } catch (err: any) {
      setError(err.message);
      console.log("multi transfer failed:", err);
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

  const multiTransferHandler = async () => {
    // let to: Array<string> = [
    //   "0x4bbd2A03A0aD7449EB273f4385cE25E9D2c8D8fE",
    //   "0x0a38c354d9Bc0D792c68eFF44001AF1B9bD21BB2",
    // ];

    // let value: Array<number> = [100000, 100000];

    const to: any = [];
    const value: any = [];

    to.push(to1, to2);
    value.push(value1, value2);
    console.log(to, value);
    multiTransfer(to, value);
  };

  return (
    <div className="Ba">
      <div className="Batch">BATCH</div>
      <div className="Transfer">
        <input
          placeholder="value"
          type="text"
          value={value1}
          onChange={changeValue1}
        ></input>
        <input
          placeholder="to"
          type="text"
          value={to1}
          onChange={changeTo1}
        ></input>
        <input
          placeholder="value"
          type="text"
          value={value2}
          onChange={changeValue2}
        ></input>
        <input
          placeholder="to"
          type="text"
          value={to2}
          onChange={changeTo2}
        ></input>
        <button onClick={multiTransferHandler}>
          Multi Transfer
        </button>
      </div>
    </div>
  );
}
