import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Play, Video, Film, Camera, Mail, Phone, Linkedin, Github, ChevronUp, Instagram, Youtube, Palette } from 'lucide-react';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Hi, I'm <span className="text-blue-600">Srinidhi Gowda</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Creative Visual Storyteller specializing in Photography, Cinematography, and Video Editing
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          <p className="text-gray-600 text-lg">
            I'm a creative visual storyteller specializing in Photography, Cinematography, and Video Editing. 
            With extensive experience in crafting dynamic visual content—including event coverage, cinematic reels, 
            promotional videos, and targeted social media campaigns—I skillfully use tools like Adobe Premiere Pro, 
            After Effects, Photoshop, Media Encoder, and Canva to deliver compelling narratives.
          </p>
          <p className="text-gray-600 text-lg mt-4">
            Currently pursuing an MS in Data Analytics at San Jose State University, I blend technical expertise 
            with creativity, ensuring each visual project is impactful and memorable.
          </p>
        </div>
      </section>

      {/* Portfolio Sections */}
      <section id="portfolio" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Portfolio</h2>
          
          {/* Photography Gallery */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Photography</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Photo Card 1 */}
              <div className="group bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src="/images/photography/photo1.jpg" 
                    alt="Event Photography" 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Full Size</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">Event Coverage</h4>
                  <p className="text-gray-600 mt-2">College cultural fest highlights and moments</p>
                </div>
              </div>

              {/* Photo Card 2 */}
              <div className="group bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src="/images/photography/photo2.jpg" 
                    alt="Portrait Photography" 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Full Size</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">Portrait Series</h4>
                  <p className="text-gray-600 mt-2">Professional portrait sessions</p>
                </div>
              </div>

              {/* Photo Card 3 */}
              <div className="group bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src="/images/photography/photo3.jpg" 
                    alt="Landscape Photography" 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Full Size</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">Landscape Series</h4>
                  <p className="text-gray-600 mt-2">Scenic captures of natural beauty</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cinematography Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Cinematography</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* YouTube Video 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="relative pb-[56.25%]">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="animate-pulse flex space-x-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1"
                    title="Cinematic Reel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">Cinematic Reel</h4>
                  <p className="text-gray-600 mt-2">A showcase of cinematic shots and sequences</p>
                </div>
              </div>

              {/* YouTube Video 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="relative pb-[56.25%]">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="animate-pulse flex space-x-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
                    title="Documentary Style"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">Documentary Style</h4>
                  <p className="text-gray-600 mt-2">Capturing real moments with cinematic storytelling</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Editing Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Video Editing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Video Project 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="relative pb-[56.25%]">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="animate-pulse flex space-x-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID_3"
                    title="Promotional Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">Promotional Video</h4>
                  <p className="text-gray-600 mt-2">Engaging promotional content for businesses</p>
                </div>
              </div>

              {/* Video Project 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="relative pb-[56.25%]">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="animate-pulse flex space-x-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID_4"
                    title="Social Media Content"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">Social Media Content</h4>
                  <p className="text-gray-600 mt-2">Short-form content optimized for social platforms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900">Media Team Head</h3>
              <p className="text-gray-600">PES College | Feb 2021 – May 2024</p>
              <ul className="mt-4 text-gray-600 space-y-2">
                <li>• Led media team in capturing and producing college events</li>
                <li>• Created promotional content and managed social media presence</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900">Freelance Video Editor & Cinematographer</h3>
              <p className="text-gray-600">Apr 2021 – Nov 2024</p>
              <ul className="mt-4 text-gray-600 space-y-2">
                <li>• Produced engaging Instagram reels and cinematic videos</li>
                <li>• Created promotional content for various clients</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900">Content Creator & Collaborator</h3>
              <p className="text-gray-600">Independent Projects | Mar 2024 – Dec 2024</p>
              <ul className="mt-4 text-gray-600 space-y-2">
                <li>• Created targeted promotional videos for local businesses</li>
                <li>• Enhanced social media reach through strategic content</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <p className="text-gray-600 font-medium">Adobe Premiere Pro</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <p className="text-gray-600 font-medium">After Effects</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <p className="text-gray-600 font-medium">Photoshop</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <p className="text-gray-600 font-medium">Media Encoder</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <p className="text-gray-600 font-medium">Canva</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-gray-600" />
                <a href="mailto:srinidhigowda.jayaramegowda@sjsu.edu" className="text-gray-600 hover:text-blue-600">
                  srinidhigowda.jayaramegowda@sjsu.edu
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-gray-600" />
                <a href="tel:+16692437083" className="text-gray-600 hover:text-blue-600">
                  +1 (669)-243-7083
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Linkedin className="w-6 h-6 text-gray-600" />
                <a href="https://linkedin.com/in/srinidhi-gowda-73a308273" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                  linkedin.com/in/srinidhi-gowda-73a308273
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Github className="w-6 h-6 text-gray-600" />
                <a href="https://github.com/Mrnidhi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                  github.com/Mrnidhi
                </a>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} Srinidhi Gowda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;