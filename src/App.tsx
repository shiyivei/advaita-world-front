import { Layout } from "antd";
import "./App.css";
import Navigation from "./pages/Navigation-Header";
import Watch from "./components/Watch";
import Login from "./components/Login";
import Tail from "./pages/Navigation-Tail";

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
            <Navigation />
          </div>
          <div className="Play">PLAY NOW</div>
          <div className="Watch">
            <Watch />
          </div>
          <div className="Login-Home">
            <Login />
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
