import Navigation from "../pages/Navigation-Header";

import BG from "../components/BG";

import Tail from "../pages/Navigation-Tail";
import Upcoming from "../components/Upcoming";

export default function MPage() {
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
