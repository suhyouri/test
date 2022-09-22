import React from "react";
import { Link } from "react-router-dom";

export default function Day0912() {
  return (
    // <div>
    <main className="pages" id="_0912">
      <section className="page">
        <li>
          <Link to="/0912">
            한숨석
            <br />
            프로토타입
          </Link>
        </li>
        <br />
        <div className="airmotor"></div>
        <img
          width="500px"
          height="auto"
          src="assets/img/sighrock_2.PNG"
          alt="sighrock"
        />
        <br />
        <p>500 lumen</p>
      </section>
    </main>
    // </div>
  );
}
