import Navigation from "../pages/Navigation-Header";

import BG from "../components/BG";

import Tail from "../pages/Navigation-Tail";
import { Link } from "react-router-dom";
import home_logo9 from "../pages/statics/img/homepage/9.png";
import Back from "../components/Back";

export default function Whitepaper() {
  return (
    <div>
      <div className="App">
        <div className="Body">
          <div className="BG">
            <BG />
          </div>
          <div className="Navigation">
            <Link
              className="Logo-Home"
              style={{
                textDecoration: "none",
              }}
              to="/"
            >
              <img
                src={home_logo9}
                alt="logo"
                className="home_logo"
              />
            </Link>

            <div className="Navigation-Home">
              <Navigation />
            </div>
            <div className="Login-Home">
              <Back />
            </div>
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
