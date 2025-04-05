import React, { useState } from 'react';
import { X, Search, Filter, Download } from 'lucide-react';
import Lightbox from './Lightbox';

interface ProjectGalleryProps {
  onClose: () => void;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMedia, setSelectedMedia] = useState<{
    type: 'image' | 'video';
    src: string;
    title: string;
  } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = Array.from({ length: 16 }).map((_, index) => ({
    type: 'image' as const,
    src: `/images/photography/photo${index + 1}.${index < 2 ? 'jpg' : 'jpeg'}`,
    title: `Photo ${index + 1}`,
  }));

  const videos = Array.from({ length: 14 }).map((_, index) => ({
    type: 'video' as const,
    src: `/videos/video${index + 1}.mp4`,
    title: `Video ${index + 1}`,
  }));

  const filteredPhotos = photos.filter(photo =>
    photo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMediaClick = (media: typeof photos[0] | typeof videos[0], index: number) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const items = activeTab === 'photos' ? filteredPhotos : filteredVideos;
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setSelectedMedia(items[(currentIndex + 1) % items.length]);
  };

  const handlePrev = () => {
    const items = activeTab === 'photos' ? filteredPhotos : filteredVideos;
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setSelectedMedia(items[(currentIndex - 1 + items.length) % items.length]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-7xl h-[90vh] overflow-hidden relative">
        {/* Header */}
        <div className="border-b border-gray-200 p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'photos'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Photography
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'videos'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Videos
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto h-[calc(90vh-64px)]">
          {activeTab === 'photos' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => handleMediaClick(photo, index)}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2">
                      <span>View</span>
                      <Download size={16} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredVideos.map((video, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => handleMediaClick(video, index)}
                >
                  <div className="relative aspect-video">
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      preload="metadata"
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2">
                        <span>Play</span>
                        <Download size={16} />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800">{video.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Lightbox */}
        {selectedMedia && (
          <Lightbox
            media={selectedMedia}
            onClose={() => setSelectedMedia(null)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectGallery; 