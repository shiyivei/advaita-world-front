import React from "react";
import { useEffect } from "react";
import "./Components.css";
import { Link } from "react-router-dom";
import home_logo10 from "../pages/statics/img/homepage/10.png";
import home_logo11 from "../pages/statics/img/homepage/11.png";

export default function Version() {
  return (
    <div className="main-app">
      <div className="Watch">
        <img
          src={home_logo10}
          alt="logo"
          className="Logo10"
        />
        <img
          src={home_logo11}
          alt="logo"
          className="Logo11"
        />
      </div>
    </div>
  );
}
