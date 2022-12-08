import { useParams } from "react-router-dom";
import advaita_world_logo from "../pages/statics/img/backgroud-logo.png";
import Navigation_Header from "./Navigation-Header";
import Navigation_Tail from "./Navigation-Tail";
import ConnectWallet from "../components/Login";
import TestRouter from "./TestRouter";

import Navigation from "../pages/Navigation-Header";
import BG from "../components/BG";
import Tail from "../pages/Navigation-Tail";
import Upcoming from "../components/Upcoming";
export default function OMSATWATCH() {
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
          <div className="Play">
            <Upcoming />
          </div>
        </div>
        <div className="Tail">
          <Tail />
        </div>
      </div>
    </div>
  );
}
