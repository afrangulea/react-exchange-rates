import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <h1>React Router and API Call</h1>

      <div className="links">
        <Link to="react-exchange-rates/crypto">Crypto Currencies</Link>
        <Link to="react-exchange-rates/classic">Classic Currencies</Link>
        <Link to="react-exchange-rates/"> Home</Link>
      </div>
    </nav>
  );
};

export default Nav;
