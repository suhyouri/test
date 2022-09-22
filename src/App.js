import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import About from './component/About';
import Home from './component/Home';
import EmptyPage from './component/EmptyPage'
import Day0819 from './component/Day0819';
import Day0803 from './component/Day0803';
import Day0910 from './component/Day0910';
import Day0912 from './component/Day0912';
import Day0923 from './component/Day0923';
import Header from './component/Header';


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            {/* <Route path="/" element={<App />}></Route> */}
            <Route path="/" element={<Home />} />
            <Route path="/about" component={About} />
            <Route path="*" element={<EmptyPage />} />
            <Route path="/0819" element={<Day0819 />} />
            <Route path="/0803" element={<Day0803 />} />
            <Route path="/0912" element={<Day0912 />} />
            <Route path="/0910" element={<Day0910 />} />
            <Route path="/0923" element={<Day0923 />} />
          </Routes>
          <footer>
            <a href="mailto:suhyouri@gmail.com" className="nav__link">
              © Suh Youri 2022
            </a>
          </footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;