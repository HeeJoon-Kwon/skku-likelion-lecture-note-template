import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src="/likelion_logo.png" alt="SKKU Logo" className="logo" />
      </Link>

      <h2>HeeJoon-Kwon의 강의 노트</h2>

      <nav>
        <ul>
          <li>
            <Link to="/">메인</Link>
          </li>
          <li>
            <Link to="/notes">강의 노트</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
