import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <div style={{ minHeight: "100vh", background: "#f5f5f5" }}>
    <Navbar />
    <header style={{ background: "#333", color: "#fff", padding: "1rem" }}>
      <h1>Easymob</h1>
    </header>
    <main style={{ padding: "2rem" }}>{children}</main>
    <footer
      style={{
        background: "#333",
        color: "#fff",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      &copy; 2025 Easymob. All rights reserved.
    </footer>
  </div>
);

export default Layout;