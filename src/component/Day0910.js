import React from "react";
import { Link } from "react-router-dom";

export default function Day0910() {
  return (
    // <div>
    <main className="pages" id="_0910">
      <section className="page">
        <li>
          <Link to="/0910">
            기대기(텐타클)
            <br />
            프로토타입
          </Link>
        </li>
        <br />
        <div className="airmotor"></div>
        <img
          width="250px"
          height="auto"
          src="assets/img/monster_1.png"
          alt="airmotor"
        />
        <img
          width="250px"
          height="auto"
          src="assets/img/monster_1.png"
          alt="airmotor"
        />
        <img
          width="250px"
          height="auto"
          src="assets/img/monster_1.png"
          alt="airmotor"
        />
        <img
          width="150px"
          height="auto"
          src="assets/img/bone.PNG"
          alt="airmotor"
        />
        <br />
        <p></p>
      </section>
    </main>
    // </div>
  );
}
