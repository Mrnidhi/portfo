import React from 'react';
import { Camera, Video, Film } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25"></div>
            <img
              src="/images/profile.jpg"
              alt="Srinidhi Gowda"
              className="relative rounded-lg shadow-xl w-full h-auto"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-gray-600 text-lg mb-6">
              I'm a creative visual storyteller specializing in Photography, Cinematography, and Video Editing. 
              With extensive experience in crafting dynamic visual content—including event coverage, cinematic reels, 
              promotional videos, and targeted social media campaigns—I skillfully use tools like Adobe Premiere Pro, 
              After Effects, Photoshop, Media Encoder, and Canva to deliver compelling narratives.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Currently pursuing an MS in Data Analytics at San Jose State University, I blend technical expertise 
              with creativity, ensuring each visual project is impactful and memorable.
            </p>

            {/* Expertise */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <Camera className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Photography</h3>
                <p className="text-sm text-gray-600">Event & Portrait</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <Film className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Cinematography</h3>
                <p className="text-sm text-gray-600">Cinematic & Documentary</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <Video className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Video Editing</h3>
                <p className="text-sm text-gray-600">Post-Production</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-center"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 