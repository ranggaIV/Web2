import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <p>Navbar</p>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button>About</button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
