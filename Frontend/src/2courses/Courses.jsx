import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'

const Courses = () => {
  return (
    <>
      <div className="bg-white min-h-screen text-black">
        <Navbar />
        <div className="mt-16 mb-8 px-6">
          <Course />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Courses
