import Header from "./components/Header";
import Slider from "./components/Slider";
import BiometricSection from "./components/BiometricSection";
import EvocaSection from "./components/EvocaSection";
import EvocaCardSlider from "./components/EvocaCardSlider";
import EvocaCalculator from "./components/EvocaCalculator";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="w-full">
        <Slider />
        <BiometricSection />
        <EvocaSection/>
        <EvocaCardSlider/>
        <EvocaCalculator/>
      </main>
    </div>
  );
}