import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import SeniorsConnect from "./containers/SeniorsConnect";
import Header from "./components/header/Header";
import { StyleProvider } from "./contexts/StyleContext";  // ✅ Import StyleProvider

function App() {
  return (
    <StyleProvider>  {/* ✅ Wrap everything in StyleProvider */}
      <Router>
        <Header />  {/* ✅ Keeps navbar on every page */}
        <Routes>
          <Route path="/" element={<Main />} />  {/* ✅ Homepage */}
          <Route path="/seniors-connect" element={<SeniorsConnect />} />  {/* ✅ Case Study Page */}
        </Routes>
      </Router>
    </StyleProvider>
  );
}

export default App;

