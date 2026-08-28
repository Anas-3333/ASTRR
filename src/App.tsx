import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import SafetyShoes from "./components/SafetyShoes";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="min-h-screen bg-black">

      {/* Header stays on every page */}
      <Header />
      
      {/* ONLY the matching page appears here */}
      <Routes>

        <Route
          path="/"
          element={<Hero />}
        />

        <Route
          path="/Contact"
          element={<Contact />}
        />

        <Route
          path="/Profile"
          element={<Profile />}
        />

        <Route
          path="/SafetyShoes"
          element={<SafetyShoes />}
        />

      </Routes>

    </div>
  );
}

export default App;