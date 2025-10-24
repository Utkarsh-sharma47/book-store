import React from 'react';

// --- ADD THESE IMPORTS ---
// You need to import the components you want to use.
// The '../' goes up one directory from 'home' to 'src',
// and then 'components/' goes into the components folder.
import Banner from '../components/Banner';
import Freebook from '../components/Freebook';
import Footer from '../components/Footer';
// -------------------------

const Home = () => {
  return (
    <>
      <div className="bg-white dark:bg-slate-900 min-h-screen text-black dark:text-white transition-colors duration-300">
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