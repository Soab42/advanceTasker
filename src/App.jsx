import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white flex flex-col justify-center items-center">
      <NavBar />
      <HeroSection />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
