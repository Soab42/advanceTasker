import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white flex flex-col justify-center items-center relative">
      <NavBar />
      <HeroSection />
      <MainSection />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
