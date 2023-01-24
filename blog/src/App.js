import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChatScreen from "./pages/ChatScreen";
import Articles from "./components/Articles";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<Articles />} />
        <Route path="/ChatScreen" element={<ChatScreen />} />
      </Routes>
    </>
  );
}
export default App;
