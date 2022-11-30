import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "./Pages.css";

export default function Navigation_Header() {
  return (
    <div>
      <div className="Header-List">
        <ul className="Navigation-Header">
          <li className="GenesisCollection">
            <a href="https://advaitaworld.myshopify.com/?_ab=0&_fd=0&_sc=1">
              Omsat Store
            </a>
          </li>
          <li className="Research">
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/research"
            >
              Research
            </Link>
          </li>
          <li className="Whitepaper">
            <a href="https://advaita.gitbook.io/whitepaper/">
              Whitepaper
            </a>
          </li>
          <li className="OmSatWatch">
            <Link
              style={{ textDecoration: "none" }}
              to="/omsatwatch"
            >
              Omsat Watch
            </Link>
          </li>
          <li className="AdvaitaDAO">
            <Link
              style={{ textDecoration: "none" }}
              to="/cakrawatch"
            >
              Cakra Watch
            </Link>
          </li>
          <li className="GenesisCollection">
            <a href="https://drive.google.com/file/d/1CJy7n-h_KffLeSO9vB8TJm1YU5fOQmUP/view?usp=sharing">
              Deck
            </a>
          </li>
          {/* <li className="NFTReborn">
            <Link
              style={{ textDecoration: "none" }}
              to="nftreborn"
            >
              NFTReborn
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
