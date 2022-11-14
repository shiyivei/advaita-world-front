import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "./Pages.css";
import twitter from "./statics/img/twitter.png";
import discord from "./statics/img/discord.png";
import telegram from "./statics/img/telegram.png";
import youtube from "./statics/img/youtube.png";
import medium from "./statics/img/medium.png";

export default function Navigation_Tail() {
  return (
    <div>
      <div className="Tail-List">
        <ul className="Navigation-Tail">
          <li>
            <a href="https://twitter.com/AdvaitaWorld">
              <img
                src={twitter}
                alt="logo"
                className="Twitter"
              />
            </a>
          </li>
          <li>
            <a href="https://discord.gg/bNhksbBf">
              <img
                src={discord}
                alt="logo"
                className="Discord"
              />
            </a>
          </li>
          <li>
            <a href="https://t.me/gE3gTPQVGsA0ZjE1">
              <img
                src={telegram}
                alt="logo"
                className="Telegram"
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/AdvaitaWorld">
              <img
                src={youtube}
                alt="logo"
                className="Youtube"
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/AdvaitaWorld">
              <img
                src={medium}
                alt="logo"
                className="Medium"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
