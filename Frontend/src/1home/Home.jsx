import React from 'react';

// --- ADD THESE IMPORTS ---
// You need to import the components you want to use.
// The '../' goes up one directory from 'home' to 'src',
// and then 'components/' goes into the components folder.
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Freebook from '../components/Freebook';
import Footer from '../components/Footer';
// -------------------------

const Home = () => {
  return (
    <>
      <div className="bg-white min-h-screen text-black">
        {/* Navbar */}
        <Navbar />
        {/* Banner */}
        <Banner />
        {/* Cards of free book*/}
        <Freebook />
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;