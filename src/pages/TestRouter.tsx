import { Link } from "react-router-dom";
import React from "react";

export default function TestRouter() {
  return (
    <div className="Test-Arrange">
      <ul>
        <li className="PageOne">
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/one"
          >
            PageOne
          </Link>
        </li>
        <li className="PageTwo">
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/two"
          >
            PageTwo
          </Link>
        </li>
        <li className="PageThree">
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/three"
          >
            PageThree
          </Link>
        </li>
      </ul>
    </div>
  );
}
