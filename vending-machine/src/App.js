import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from './Sardines';
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <h1>This is a vending machine please chose your items</h1>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/soda" element={<Soda />}/>
          <Route path="/chips" element={<Chips />}/>
          <Route path="/sardines" element={<Sardines />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
