import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header id="header">
      <h1>Proyecto Eli</h1>

      <nav>
        <ul>
          <li>
            <Link to={"/"}>Incio</Link>
          </li>

          <li>
            <Link to={"/contacteme"}>Contácteme</Link>
          </li>

          <li>
            <Link to={"/projects"}>Projectos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
