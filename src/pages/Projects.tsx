import React, { useState } from 'react';
import { Play } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  type: 'video' | 'photo';
  thumbnail: string;
  url: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "College Events Showcase",
    description: "Event coverage and promotional video",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "#"
  },
  {
    id: 2,
    title: "Instagram Campaign",
    description: "Social media marketing content",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "#"
  },
  {
    id: 3,
    title: "Commercial Project",
    description: "Brand promotional video",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "#"
  },
  {
    id: 4,
    title: "Event Photography",
    description: "College cultural fest coverage",
    type: "photo",
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "#"
  },
  {
    id: 5,
    title: "Product Shots",
    description: "E-commerce product photography",
    type: "photo",
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "#"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'video' | 'photo'>('all');

  const filteredProjects = projects.filter(project => 
    filter === 'all' ? true : project.type === filter
  );

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
        
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'all' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('video')}
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'video' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Videos
          </button>
          <button
            onClick={() => setFilter('photo')}
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'photo' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Photos
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="relative group">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img 
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:opacity-50 transition-opacity"
                />
              </div>
              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <span className="inline-block mt-2 text-sm text-purple-500 capitalize">
                {project.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}