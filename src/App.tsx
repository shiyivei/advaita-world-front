import React from "react";
import { Layout } from "antd";
import "./App.css";
import URLRouter from "./router/URLRouter";
import advaita_world_logo from "./pages/statics/img/advaita-world-logo.png";
import Navigation_Header from "./pages/Navigation-Header";
import Navigation_Tail from "./pages/Navigation-Tail";
const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="App-Navigation-Header">
          <Navigation_Header />
        </div>
      </div>
      <div className="App-body">
        <div className="URLRouter">
          <img
            src={advaita_world_logo}
            alt="logo"
            className="Advaita_world_logo"
          />
        </div>
      </div>
      <div className="App-tail">
        <div className="App-Navigation-Tail">
          <Navigation_Tail />
        </div>
      </div>
    </div>
  );
}

export default App;
