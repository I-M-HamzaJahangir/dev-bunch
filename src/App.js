import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import MobileNav from "./components/MobileNav/MobileNav";
import Navbar from "./components/Nabar/Navbar";
import Popular from "./components/Popular/Popular";
import Recommended from "./components/Recommended/Recommended";
import SelectPanels from "./components/ServicePanel/SelectPanels";

function App() {
  return (
    <div className="App">
      <header className="">
        <Navbar />
        <MobileNav />
      </header>
      <main>
        <Hero />
        <SelectPanels />
        <Popular />
        <Recommended />
      </main>
      <Footer />
    </div>
  );
}

export default App;
