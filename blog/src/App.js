import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Home from "./pages/Home";
import ChatScreen from "./pages/ChatScreen";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/chat" element={<ChatScreen />} />
      </Routes>
    </>
  );
}
export default App;
