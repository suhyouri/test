import React from "react";
import { Link } from "react-router-dom";

export default function Day0923() {
  return (
    // <div>
    <main className="pages" id="_0923">
      <section className="page">
        <li>
          <Link to="/0910">
            발표자료
            <br />
            PPT
          </Link>
        </li>
        <br />
        {/* <div className="airmotor"></div> */}
        <img
          width="800px"
          height="auto"
          src="assets/img/installation.png"
          alt="airmotor"
        />
        <br />
        <p></p>
      </section>
    </main>
    // </div>
  );
}
