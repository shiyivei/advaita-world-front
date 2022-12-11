import React from "react";
import { useParams } from "react-router-dom";
import { redirect } from "react-router-dom";
import home_logo8 from "../pages/statics/img/homepage/8.png";
import home_logo7 from "../pages/statics/img/homepage/7.png";
import home_logo6 from "../pages/statics/img/homepage/6.png";

import Navigation from "../pages/Navigation-Header";

import BG from "../components/BG";

import Tail from "../pages/Navigation-Tail";

export default function Whitepaper() {
  return (
    <div>
      <div className="App">
        <div className="Body">
          <div className="BG">
            <BG />
          </div>
          <div className="Navigation">
            <Navigation />
          </div>
          <div className="ChooseVersion">
            <button className="EN">
              <a href="https://advaita.gitbook.io/whitepaper-english/">
                ENGLISH
              </a>
            </button>
            <button className="CN">
              <a href="https://advaita.gitbook.io/whitepaper/">
                中文
              </a>
            </button>
          </div>
        </div>
        <div className="Tail">
          <Tail />
        </div>
      </div>
    </div>
  );
}
