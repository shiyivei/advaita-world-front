import { useEffect, useState } from "react";
import GenesisCollection from "../pages/GenesisCollection";
import Whitepaper from "../pages/Whitepaper";
import CakraWatch from "../pages/CakraWatch";
import Research from "../pages/Research";
import Deck from "../pages/Deck";
import NFTReborn from "../pages/NFTReborn";
import OmSatWatch from "../pages/OmSatWatch";
import LoginWithCode from "../pages/LoginWithCode";
import LoginWithPassword from "../pages/LoginWithPassword";
import Register from "../pages/Register";
import WhitepaperVersion from "../components/WhitePaperVersion";
import Moonbeam from "../moonbeam/Moonbeam";
import IOTEX from "../iotex/IPage";
import LoginSuccess from "../pages/LoginSuccess";

import App from "../App";

import {
  BrowserRouter, //相当于路由模式的history
  Routes,
  Route,
} from "react-router-dom";

const URLRouter = (props: any) => {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/cakrawatch"
            element={<CakraWatch />}
          ></Route>
          <Route
            path="/omsatwatch"
            element={<OmSatWatch />}
          ></Route>
          <Route
            path="/deck"
            element={<Deck />}
          ></Route>
          <Route
            path="/research"
            element={<Research />}
          ></Route>
          <Route
            path="/genesiscollection"
            element={<GenesisCollection />}
          ></Route>
          <Route
            path="/nftreborn"
            element={<NFTReborn />}
          ></Route>
          <Route
            path="/whitepaper"
            element={<Whitepaper />}
          ></Route>
          <Route
            path="/"
            element={<App />}
          ></Route>
          <Route
            path="/loginwithpassword"
            element={<LoginWithPassword />}
          ></Route>
          <Route
            path="/loginwithcode"
            element={<LoginWithCode />}
          ></Route>
          <Route
            path="/register"
            element={<Register />}
          ></Route>
          <Route
            path="/moonbeam"
            element={<Moonbeam />}
          ></Route>
          <Route
            path="/iotex"
            element={<IOTEX />}
          ></Route>
          <Route
            path="/loginsuccess"
            element={<LoginSuccess />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default URLRouter;
