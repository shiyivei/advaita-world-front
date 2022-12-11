import "./moonbeam.css";
import { useEffect, useState } from "react";
import BG from "../components/BG";

import detectEthereumProvider from "@metamask/detect-provider";
import Batch from "./batch/Index";
import CallPermit from "../moonbeam/callpermit/Index";
import XTokens from "../moonbeam/xtokens/Index";
import Randomness from "../moonbeam/randomness/Index";

const configureNetwork = async () => {
  // 通过接口获得provider
  const provider: any =
    await detectEthereumProvider({
      mustBeMetaMask: true,
    });

  if (provider) {
    window.confirm("Wallet has been connected!");
    try {
      const accounts = await provider.request({
        method: "eth_requestAccounts",
      });

      console.log("accounts are:", accounts);

      await provider.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x507", // Moonbase Alpha's chainId is 1287, which is 0x507 in hex
            chainName: "Moonbase Alpha",
            nativeCurrency: {
              name: "DEV",
              symbol: "DEV",
              decimals: 18,
            },
            rpcUrls: [
              "https://rpc.api.moonbase.moonbeam.network",
            ],
            blockExplorerUrls: [
              "https://moonbase.moonscan.io/",
            ],
          },
        ],
      });
    } catch (e) {
      console.error(e);
    }
    provider.on(
      "accountsChanged",
      (accounts: any) => {
        if (accounts.length === 0) {
          // MetaMask is locked or the user doesn't have any connected accounts

          alert("Please connect to MetaMask");
        } else {
          console.log(
            "current accounts are:",
            accounts
          );
        }
      }
    );

    provider.on("chainChanged", () => {
      // MetaMask recommends reloading the page unless you have good reason not to
      window.location.reload();
    });

    const chainId = await provider.request({
      method: "eth_chainId",
    });
    // Moonbase Alpha's chainId is 1287, which is 0x507 in hex
    if (chainId === "0x507") {
      console.log("wallet connected:", chainId);
    }
  } else {
    alert("Please install or reload metamask");
    console.error(
      "Please install or reload metamask"
    );
  }
};

// 定义组件，参数适使用副作用
const CurrentAddress = ({
  currentAddress,
  setCurrentAddress,
}: {
  currentAddress: any;
  setCurrentAddress: any;
}) => {
  // 使用异步函数获取资源请求结果，并更新参数
  const getCurrentAddress = async () => {
    const provider: any =
      await detectEthereumProvider({
        mustBeMetaMask: true,
      });

    if (provider) {
      try {
        const current_account =
          await provider.request({
            method: "eth_requestAccounts",
          });

        setCurrentAddress(current_account);

        console.log(
          " current accounts are:",
          current_account
        );
      } catch (e) {
        console.error(e);
      }
    } else {
      alert("Please install or reload metamask");
    }

    provider.on(
      "accountsChanged",
      (account: any) => {
        if (account.length === 0) {
          // MetaMask is locked or the user doesn't have any connected accounts

          alert("Please connect to MetaMask");
        } else {
          setCurrentAddress(account);
          console.log(
            "current accounts are:",
            account
          );
        }
      }
    );
  };

  //
  useEffect(() => {
    getCurrentAddress();
  }, []);

  return (
    <>
      <div>
        <div>
          Current Address : {currentAddress}
        </div>
      </div>
    </>
  );
};

export default function MPage() {
  const [currentAddress, setCurrentAddress] =
    useState([]);

  const handleConnection = () => {
    configureNetwork();
  };

  return (
    <div>
      <div className="App">
        <div className="Body">
          <div className="BG">
            <BG />
          </div>
          <div className="HeadLine">
            PRECOMPILE & XCM CALL EXAMPLES
          </div>
          <div className="ConnectWallet-BG">
            <button
              className="ConnectWallet"
              onClick={handleConnection}
            >
              Connect Wallet
            </button>
            <div className="Address">
              <CurrentAddress
                currentAddress={currentAddress}
                setCurrentAddress={
                  setCurrentAddress
                }
              />
            </div>
          </div>
          <div className="Precompiles">
            <div className="batch">
              <Batch />
            </div>
            <div className="callpermit">
              <CallPermit />
            </div>
            <div className="xtokens">
              <XTokens />
            </div>
            <div className="randomness">
              <Randomness />
            </div>

            <div className="readmore">
              more ... coming soon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
