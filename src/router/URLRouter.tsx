import { useEffect, useState } from "react";
import GenesisCollection from "../pages/GenesisCollection";
import Whitepaper from "../pages/Whitepaper";
import AdvaitaDAO from "../pages/AdvaitaDAO";
import Element from "../pages/Element";
import Deck from "../pages/Deck";
import NFTReborn from "../pages/NFTReborn";
import ClaimSNS from "../pages/ClaimSNS";
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
            path="/advaitadao"
            element={<AdvaitaDAO />}
          ></Route>
          <Route
            path="/claimsns"
            element={<ClaimSNS />}
          ></Route>
          <Route
            path="/deck"
            element={<Deck />}
          ></Route>
          <Route
            path="/element"
            element={<Element />}
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
