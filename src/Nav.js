import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <h1>React Router and API Call</h1>

      <div className="links">
        <Link to="/crypto">Crypto Currencies</Link>
        <Link to="/classic">Classic Currencies</Link>
        <Link to="/"> Home</Link>
      </div>
    </nav>
  );
};

export default Nav;
