import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
  return (
    <div>
      <main className="posts">
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/0930">설치</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">09/30</span>
          </footer>
        </section>
        {/* 1 */}
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/0923">발표자료</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">09/23</span>
          </footer>
        </section>
        {/* 2 */}
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/0912">
                한숨석
                <br />
                프로토타입
              </Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">09/12</span>
          </footer>
        </section>
        {/* 3 */}
        <section className="post"></section>
        {/* 4 */}
        <section className="post"></section>
        {/* 5 */}
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/0910">
                기대기(텐타클)
                <br />
                프로토타입
              </Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">09/10</span>
          </footer>
        </section>
        {/* 5. */}
        {/* <section className="post"></section> */}
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/0819">
                에어모터 & 모양
                <br />
                Air Motor & Air Shape
                <br />
                테스트
                <br />
                Test
              </Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">08/19</span>
          </footer>
        </section>
        {/* -----3. */}
        <section className="post">
          <header className="post__header">
            <li>Loading...</li>
            <li className="animation">
              <br />
              <li>|</li>
              <li>/|\</li>
              <li>//|\\</li>
              <li>///|\\\</li>
              <li>////|\\\\</li>
              <li>*</li>
              <li>|</li>
              <li>*</li>
              <li>|</li>
              <li>*</li>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">D-55</span>
          </footer>
        </section>
        {/* -----4. */}
        <section className="post"></section>
        {/* -----5. */}
        {/* <section className="post"></section> */}
        {/* -----6. */}
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/0803">
                초기 아이디어
                <br />
                기획
              </Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">08/03</span>
          </footer>
        </section>
        {/*  */}

        <section className="post"></section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/">멘토링기간</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">05/24~</span>
          </footer>
        </section>
      </main>
    </div>
  );
};

