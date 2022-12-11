import "./Randomness.css";
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
const randomness = new web3.eth.Contract(
  precompileAbi,
  precompileAddress
);

const helper = new web3.eth.Contract(
  helperAbi,
  helperAddress
);

console.log(
  "randomness,helper:",
  randomness,
  helper
);

// 查询状态

export default function Batch() {
  // 定义回调函数
  const [currentAddress, setCurrentAddress] =
    useState();
  const [
    xc20TokensAddress,
    setXc20TokensAddress,
  ] = useState();
  const [amount, setAmount] = useState();
  const [destination, setDestination] = useState(
    []
  );
  const [weight, setWeight] = useState();
  const [
    xc20TokensAddress2,
    setXc20TokensAddress2,
  ] = useState();
  const [amount2, setAmount2] = useState();
  const [destination2, setDestination2] =
    useState();
  const [weight2, setWeight2] = useState();
  const [cross, setCross] = useState(0);
  const [cross2, setCross2] = useState();
  const [
    destinationAddress,
    setDestinationAddress,
  ] = useState();
  const [
    destinationAddress2,
    setDestinationAddress2,
  ] = useState();

  const [error, setError] = useState("");

  const participate = async () => {
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

    const helper = new web3.eth.Contract(
      helperAbi,
      helperAddress
    );

    // 执行合约交易
    try {
      await helper.methods
        .participate()
        .send({
          from: currentAddress,
          value: 100000000000000,
          gas: "300000",
          gasPrice: null,
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
      window.confirm("transfer failed");
      console.log("transfer failed:", err);
    }
  };
  const startLottery = async () => {
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

    const helper = new web3.eth.Contract(
      helperAbi,
      helperAddress
    );

    // 执行合约交易
    try {
      await helper.methods
        .startLottery()
        .send({
          from: currentAddress,
          value: 200000000000000,
          gas: "300000",
          gasPrice: null,
        })
        .then(function (receipt: any) {
          console.log(
            "transfer receipt:",
            receipt
          );
          if (receipt.status) {
            window.confirm(
              "start lottery success!"
            );
          }
        });
    } catch (err: any) {
      setError(err.message);
      console.log("start lottery failed:", err);
    }
  };

  const pickWinner = async () => {
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

    const helper = new web3.eth.Contract(
      helperAbi,
      helperAddress
    );

    // 执行合约交易
    try {
      await helper.methods
        .fulfillRequest()
        .send({
          from: currentAddress,
        })
        .then(function (receipt: any) {
          console.log(
            "transfer receipt:",
            receipt
          );
          if (receipt.status) {
            window.confirm(
              "pick winner success!"
            );
          }
        });
    } catch (err: any) {
      setError(err.message);
      console.log("pick winner failed:", err);
    }
  };
  const increaseRequestFee = async () => {
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

    const helper = new web3.eth.Contract(
      helperAbi,
      helperAddress
    );

    // 执行合约交易
    try {
      await helper.methods
        .increaseRequestFee()
        .send({
          from: currentAddress,
          value: 100000000000000,
          gas: "300000",
          gasPrice: null,
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

  const participateHandler = async () => {
    participate();
  };
  const pickWinnerHandler = async () => {
    pickWinner();
  };
  const increaseRequestFeeHandler = async () => {
    increaseRequestFee();
  };
  const startLotteryHandler = async () => {
    startLottery();
  };

  return (
    <div className="Ra">
      <div className="RANDOMNESS">RANDOMNESS</div>
      <div className="Randomness">
        <button onClick={participateHandler}>
          Participate
        </button>

        <button onClick={startLotteryHandler}>
          Start Lottery
        </button>
        <button onClick={pickWinnerHandler}>
          Pick Winner
        </button>
        <button
          onClick={increaseRequestFeeHandler}
        >
          Increase Request Fee
        </button>
      </div>
    </div>
  );
}
