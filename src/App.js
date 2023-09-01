import "./App.css";
import Navbar from "./navbar";
import Mission from "./missions";
import About from "./about";
import Footer from "./footer";
import Gallery from "./gallery";
import MissionsComponent from "./Components/Missions/MissionsComponent";
import Hero from "./Components/Home/Hero";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <MissionsComponent />
      <Mission />
      <Footer />
    </div>
  );
}

export default App;
