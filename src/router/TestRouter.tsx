import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";
import PageThree from "../pages/PageThree";

export default function TestRouter() {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/one"
            element={<PageOne />}
          ></Route>
          <Route
            path="/two"
            element={<PageTwo />}
          ></Route>
          <Route
            path="/three"
            element={<PageThree />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
