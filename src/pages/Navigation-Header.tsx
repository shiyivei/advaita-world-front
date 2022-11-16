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
            <Link
              style={{
                textDecoration: "none",
              }}
              to="genesiscollection"
            >
              GenesisCollection
            </Link>
          </li>
          <li className="Element">
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/element"
            >
              Research
            </Link>
          </li>
          <li className="Whitepaper">
            <a href="https://shiyiveis-organization.gitbook.io/advaita-paper/">
              Whitepaper
            </a>
          </li>
          <li className="ClaimSNS">
            <Link
              style={{ textDecoration: "none" }}
              to="claimsns"
            >
              Omsat Watch
            </Link>
          </li>
          <li className="AdvaitaDAO">
            <Link
              style={{ textDecoration: "none" }}
              to="advaitadao"
            >
              AdvaitaDAO
            </Link>
          </li>
          <li className="Deck">
            <Link
              style={{ textDecoration: "none" }}
              to="deck"
            >
              Deck
            </Link>
          </li>
          <li className="NFTReborn">
            <Link
              style={{ textDecoration: "none" }}
              to="nftreborn"
            >
              NFTReborn
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
