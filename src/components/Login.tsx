import "./Components.css";
import { Link } from "react-router-dom";

export default function RegisterOrLogin() {
  return (
    <div>
      <Link
        className="Login"
        style={{ textDecoration: "none" }}
        to="/loginwithcode"
      >
        LOGIN
      </Link>
    </div>
  );
}
