import "./XTokens.css";
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
const xtokens = new web3.eth.Contract(
  precompileAbi,
  precompileAddress
);

const helper = new web3.eth.Contract(
  helperAbi,
  helperAddress
);

console.log("x-tokens,helper:", xtokens, helper);

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

  const transfer = async (
    currencyAddress: any,
    amount: any,
    destination: any,
    weight: any
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
        .transfer(
          currencyAddress,
          amount,
          destination,
          weight
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
            window.confirm("transfer success!");
          }
        });
    } catch (err: any) {
      setError(err.message);
      console.log("transfer failed:", err);
    }
  };
  const transfer_multi_assets = async (
    currencyAddress: any,
    amount: any,
    destination: any,
    weight: any
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
        .transfer_multi_assets(
          currencyAddress,
          amount,
          destination,
          weight
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

  const transferHandler = async () => {
    console.log("获得的参数类型是:", destination);

    let des = [Number(cross), [destination]];

    console.log("获得的参数类型是:", des);
    transfer(
      xc20TokensAddress,
      amount,
      des,
      weight
    );
  };
  const transferMultiAssetHandler = async () => {
    transfer_multi_assets(
      xc20TokensAddress2,
      amount2,
      destination2,
      weight2
    );
  };

  return (
    <div className="Xa">
      <div className="X-TOKENS">X-TOKENS</div>
      <div className="XTokens">
        <form>
          <input
            placeholder="XC20Token Address"
            type="text"
            onChange={(event: any) =>
              setXc20TokensAddress(
                event.target.value
              )
            }
            value={xc20TokensAddress}
          ></input>
          <input
            placeholder="amount"
            type="text"
            onChange={(event: any) =>
              setAmount(event.target.value)
            }
            value={amount}
          ></input>
          <input
            placeholder="cross"
            type="text"
            onChange={(event: any) =>
              setCross(event.target.value)
            }
            value={cross}
          ></input>
          <input
            placeholder="destination"
            type="text"
            onChange={(event: any) =>
              setDestination(event.target.value)
            }
            value={destination}
          ></input>
          <input
            placeholder="weight"
            type="text"
            onChange={(event: any) =>
              setWeight(event.target.value)
            }
            value={weight}
          ></input>
        </form>
        <button onClick={transferHandler}>
          Transfer
        </button>
        {/* <form>
          <input
            placeholder="XC20Token Address"
            type="text"
            onChange={(event: any) =>
              setXc20TokensAddress2(
                event.target.value
              )
            }
            value={xc20TokensAddress2}
          ></input>
          <input
            placeholder="amount"
            type="text"
            onChange={(event: any) =>
              setAmount2(event.target.value)
            }
            value={amount2}
          ></input>
          <input
            placeholder="cross"
            type="text"
            onChange={(event: any) =>
              setCross(event.target.value)
            }
            value={cross}
          ></input>

          <input
            placeholder="destination"
            type="text"
            onChange={(event: any) =>
              setDestination2(event.target.value)
            }
            value={destination2}
          ></input>
          <input
            placeholder="weight"
            type="text"
            onChange={(event: any) =>
              setWeight2(event.target.value)
            }
            value={weight2}
          ></input>
        </form>
        <button
          onClick={transferMultiAssetHandler}
        >
          Transfer Multi Asset
        </button> */}
      </div>
    </div>
  );
}
