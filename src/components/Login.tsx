import React from "react";
import { useEffect } from "react";
import "./Components.css";
import { Link } from "react-router-dom";

export default function RegisterOrLogin() {
  return (
    <div className="main-app">
      <Link
        style={{ textDecoration: "none" }}
        to="/loginwithcode"
      >
        LOGIN
      </Link>
    </div>
  );
}
