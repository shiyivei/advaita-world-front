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
            <img
              src={twitter}
              alt="logo"
              className="Twitter"
            />
          </li>
          <li>
            <img
              src={discord}
              alt="logo"
              className="Discord"
            />
          </li>
          <li>
            <img
              src={telegram}
              alt="logo"
              className="Telegram"
            />
          </li>
          <li>
            <img
              src={youtube}
              alt="logo"
              className="Youtube"
            />
          </li>
          <li>
            <img
              src={medium}
              alt="logo"
              className="Medium"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
