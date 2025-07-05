import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ background: "#222", padding: "1rem" }}>
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}
    >
      <li style={{ marginRight: "2rem" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          Home
        </Link>
      </li>
      <li style={{ marginRight: "2rem" }}>
        <Link to="/products" style={{ color: "#fff", textDecoration: "none" }}>
          Products
        </Link>
      </li>
      <li style={{ marginRight: "2rem" }}>
        <Link to="/sales" style={{ color: "#fff", textDecoration: "none" }}>
          Sales
        </Link>
      </li>
      <li>
        <Link to="/reports" style={{ color: "#fff", textDecoration: "none" }}>
          Reports
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;