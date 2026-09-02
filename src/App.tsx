import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import SafetyShoes from "./components/SafetyShoes";
import MilitaryShoe from "./components/MilitaryShoe";
import HeroWeServe from "./components/HeroWeServe";
import Production from "./components/Production";
import Contact from "./components/Contact";
// import HeroesWeServe from "./components/HeroWeServe";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="w-full bg-black">

      <Header />

      <Hero />

      <HeroWeServe />

      <Profile />

      <SafetyShoes />
      
      <MilitaryShoe />

      <Production />

      <Contact />

      <Footer />

    </main>
  );
}

export default App;