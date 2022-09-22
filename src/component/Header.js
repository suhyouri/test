import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <li>
        <Link to="/">몸이라는 섬 : WMLAlive Archive</Link>
      </li>
    </header>
  );
}
