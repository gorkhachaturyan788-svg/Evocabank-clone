import React from 'react';
import Slider from '../components/Slider';
import BiometricSection from '../components/BiometricSection';
import EvocaCardSlider from '../components/EvocaCardSlider';
import EvocaSection from '../components/EvocaSection';
import EvocaCalculator from '../components/EvocaCalculator'; 
import OnlineBankingBanner from '../components/OnlineBankingBanner';
import PartnersSlider from '../components/PartnersSlider'; // <--- Գործընկերների սլայդերը

const Home = () => {
  return (
    <main className="w-full flex flex-col bg-white">
      <Slider />

      <BiometricSection />

      <EvocaCardSlider />

      <EvocaSection />

      <EvocaCalculator />

      <OnlineBankingBanner />

      {/* Գործընկերների սլայդեր */}
      <PartnersSlider />
    </main>
  );
};

export default Home;