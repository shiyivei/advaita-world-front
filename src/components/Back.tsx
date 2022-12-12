import React from "react";
import { useEffect } from "react";
import "./Components.css";
import { Link } from "react-router-dom";

export default function Back() {
  return (
    <div>
      <Link
        className="Login"
        style={{ textDecoration: "none" }}
        to="/"
      >
        BACK
      </Link>
    </div>
  );
}
