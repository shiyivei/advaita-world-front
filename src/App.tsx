import { Layout } from "antd";
import "./App.css";
import Navigation from "./pages/Navigation-Header";
import Watch from "./components/Watch";
import Login from "./components/Login";
import Tail from "./pages/Navigation-Tail";
import { Link } from "react-router-dom";
import home_logo9 from "./pages/statics/img/homepage/9.png";

import BG from "./components/HomeBG";
function App() {
  return (
    <>
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
              <Login />
            </div>
          </div>
          <div className="Play">PLAY NOW</div>
          <div className="Watch">
            <Watch />
          </div>
        </div>
        <div className="Tail">
          <Tail />
        </div>
      </div>
    </>
  );
}

export default App;
