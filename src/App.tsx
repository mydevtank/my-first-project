import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Welcome to MyApp
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A beautiful responsive navigation bar with mobile menu
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-200">
              Learn More
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-lg text-gray-600">
              We create amazing experiences with modern, responsive designs.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-lg text-gray-600">
              Delivering top-notch solutions for your business needs.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-lg text-gray-600">
              Get in touch with us today!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;