import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

function App() {
  return (
    <>
      <div className=" bg-blue-200 h-full">
        <Navbar />

        <div className="flex justify-center items-center mt-10">
          <HeroSection />
        </div>
      </div>
    </>
  );
}

export default App;
