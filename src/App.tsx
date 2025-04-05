import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Photography from './components/Photography';
import Cinematography from './components/Cinematography';
import Posters from './components/Posters';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { ChevronUp } from 'lucide-react';

const App: React.FC = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Photography />
        <Posters />
        <Cinematography />
        <Skills />
        <Contact />
      </main>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
      >
        <ChevronUp size={24} />
      </button>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Srinidhi Gowda</h3>
              <p className="text-gray-400">
                Creative Visual Storyteller specializing in Photography, Cinematography, and Video Editing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#photography" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Photography
                  </a>
                </li>
                <li>
                  <a href="#cinematography" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Cinematography
                  </a>
                </li>
                <li>
                  <a href="#posters" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Posters
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Email: srinidhigowda@gmail.com</li>
                <li className="text-gray-400">Phone: +1 (234) 567-890</li>
                <li className="text-gray-400">Location: San Jose, CA</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Srinidhi Gowda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;