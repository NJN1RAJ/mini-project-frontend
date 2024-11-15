import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div
        className="h-full"
        style={{
          background: "linear-gradient(135deg, #005c97, #363795)", // Bright gradient background
        }}
      >
        <Navbar />

        <div className="flex justify-center items-center mt-10">
          <HeroSection />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
