import { useEffect, useState } from "react";
import GenesisCollection from "../pages/GenesisCollection";
import Whitepaper from "../pages/Whitepaper";
import CakraWatch from "../pages/CakraWatch";
import Research from "../pages/Research";
import Deck from "../pages/Deck";
import NFTReborn from "../pages/NFTReborn";
import OmSatWatch from "../pages/OmSatWatch";
import Login from "../pages/Login";

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
            path="/login"
            element={<Login />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default URLRouter;
