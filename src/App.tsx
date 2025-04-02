import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Play, Video, Film, Camera, Mail, Phone, Linkedin, Github, ChevronUp, Instagram, Youtube, Palette } from 'lucide-react';
import Projects from './pages/Projects';

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center">
        <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
          <div className="text-xl font-bold">VisualCraft</div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-purple-500 transition-colors">About</a>
            <a href="#services" className="hover:text-purple-500 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-purple-500 transition-colors">Portfolio</a>
            <a href="#testimonials" className="hover:text-purple-500 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Srinidhi Gowda
              <span className="block text-2xl md:text-3xl text-purple-500 mt-2">
                Video Editor & Content Creator
              </span>
            </h1>
            <p className="text-gray-400 mb-8">Crafting Engaging Visual Stories</p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              View My Work
            </button>
          </div>
          <div className="md:w-1/2 relative mt-8 md:mt-0">
            <div className="relative w-64 h-64 mx-auto">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Creative Workspace"
                className="rounded-full object-cover w-full h-full"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-600 rounded-lg rotate-12 flex items-center justify-center">
                <Video className="w-10 h-10" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-600 rounded-lg -rotate-12 flex items-center justify-center">
                <Film className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto text-center">
            As a passionate video editor and content creator, I specialize in crafting compelling visual narratives 
            that captivate audiences. With extensive experience in event videography, social media campaigns, 
            and promotional content development, I bring stories to life through creative editing and strategic content planning.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <Video className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Video Editing</h3>
              <p className="text-gray-400">Professional editing with Adobe Premiere Pro, After Effects, and Media Encoder</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <Camera className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Event Videography</h3>
              <p className="text-gray-400">Capturing and editing memorable moments from college events and special occasions</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <Palette className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Content Creation</h3>
              <p className="text-gray-400">Engaging social media content, promotional videos, and marketing materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="College Event"
                  className="w-full h-full object-cover group-hover:opacity-50 transition-opacity"
                />
              </div>
              <h3 className="text-xl font-bold mt-4">College Events Showcase</h3>
              <p className="text-gray-400">Event coverage and promotional video</p>
            </div>
            <div className="relative group">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img 
                  src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Social Media Campaign"
                  className="w-full h-full object-cover group-hover:opacity-50 transition-opacity"
                />
              </div>
              <h3 className="text-xl font-bold mt-4">Instagram Campaign</h3>
              <p className="text-gray-400">Social media marketing content</p>
            </div>
            <div className="relative group">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Commercial Project"
                  className="w-full h-full object-cover group-hover:opacity-50 transition-opacity"
                />
              </div>
              <h3 className="text-xl font-bold mt-4">Commercial Project</h3>
              <p className="text-gray-400">Brand promotional video</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-400 mb-4">"Srinidhi's video editing skills transformed our event coverage into a compelling story. Highly recommended!"</p>
              <p className="font-bold">- PES College Events Team</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-400 mb-4">"Outstanding work on our social media campaign. The engagement rates exceeded our expectations."</p>
              <p className="font-bold">- Local Business Owner</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-400 mb-4">"Professional, creative, and delivers high-quality content consistently. A pleasure to work with!"</p>
              <p className="font-bold">- Marketing Agency Client</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Let's Create Something Amazing</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between mb-8">
              <a href="mailto:srinidhigowda.jayaramegowda@sjsu.edu" className="flex items-center text-gray-400 hover:text-purple-500 mb-4 md:mb-0">
                <Mail className="w-6 h-6 mr-2" />
                srinidhigowda.jayaramegowda@sjsu.edu
              </a>
              <a href="tel:+16692437083" className="flex items-center text-gray-400 hover:text-purple-500">
                <Phone className="w-6 h-6 mr-2" />
                +1 (669)-243-7083
              </a>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="https://linkedin.com/in/srinidhi-gowda-73a308273" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="https://github.com/Mrnidhi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
                <Github className="w-8 h-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Youtube className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      <a href="#" className="fixed bottom-8 right-8 bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition-colors">
        <ChevronUp className="w-6 h-6" />
      </a>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;