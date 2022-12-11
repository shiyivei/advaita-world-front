import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "./Pages.css";
import Login from "../components/Login";

export default function Navigation_Header() {
  return (
    <div>
      <div className="Header-List">
        <ul className="Navigation-Header">
          <li className="GenesisCollection">
            <a href="https://advaitaworld.myshopify.com/?_ab=0&_fd=0&_sc=1">
              STORE
            </a>
          </li>
          <li className="Research">
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/research"
            >
              RESEARCH
            </Link>
          </li>
          <li className="Whitepaper">
            {/* <a href="https://advaita.gitbook.io/whitepaper/">
              WHITEPAPER
            </a> */}
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/whitepaper"
            >
              WHITEPAPER
            </Link>
          </li>
          <li className="OmSatWatch">
            <Link
              style={{ textDecoration: "none" }}
              to="/omsatwatch"
            >
              OMSAT
            </Link>
          </li>
          <li className="AdvaitaDAO">
            <Link
              style={{ textDecoration: "none" }}
              to="/cakrawatch"
            >
              CAKRA
            </Link>
          </li>
          <li className="GenesisCollection">
            <a href="https://drive.google.com/file/d/1CJy7n-h_KffLeSO9vB8TJm1YU5fOQmUP/view?usp=sharing">
              DECK
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
