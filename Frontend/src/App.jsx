import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-white min-h-screen text-black">
      {/* Navbar */}
      <Navbar />
      {/* Banner */}
      <Banner/>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
