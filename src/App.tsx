import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import SafetyShoes from "./components/SafetyShoes";
import MilitaryShoe from "./components/MilitaryShoe";
// import Production from "./components/Production";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <Header />

      {/* LANDING PAGE */}
      <main>

        {/* 01 */}
        <Hero />

        {/* 02 */}
        <Profile />

        {/* 03 */}
        <SafetyShoes />

        {/* 04 */}
        <MilitaryShoe />

        {/* 05 */}
        {/* <Production /> */}

        {/* 06 */}
        <Contact />

      </main>

      {/* FOOTER */}
      {/* <Footer /> */}

    </div>
  );
}

export default App;