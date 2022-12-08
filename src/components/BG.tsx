import home_logo8 from "../pages/statics/img/homepage/8.png";
import home_logo7 from "../pages/statics/img/homepage/7.png";
import home_logo6 from "../pages/statics/img/homepage/6.png";
import home_logo5 from "../pages/statics/img/homepage/5.png";
import home_logo4 from "../pages/statics/img/homepage/4.png";
import home_logo3 from "../pages/statics/img/homepage/3.png";
import home_logo2 from "../pages/statics/img/homepage/2.png";
import home_logo1 from "../pages/statics/img/homepage/1.png";

import "./Components.css";

export default function HomeLogo() {
  return (
    <>
      <div className="main-app">
        <div className="Arr">
          <img
            src={home_logo7}
            alt="logo"
            className="Logo7"
          />

          <img
            src={home_logo6}
            alt="logo"
            className="Logo6"
          />

          <img
            src={home_logo8}
            alt="logo"
            className="Logo8"
          />
        </div>
      </div>
    </>
  );
}
