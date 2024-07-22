import React from "react";
import { NavLink } from "react-router-dom";
export default function Mynavbar() {
  return (
    <ul>
      <li>
        <NavLink className="nav-bar-link" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className="nav-bar-link" to="/about">About</NavLink>
      </li>
    </ul>
  );
}
