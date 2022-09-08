import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/buttons">Buttons</Link>
      <br />
      <Link to="/inputs">Inputs</Link>
    </nav>
  );
}