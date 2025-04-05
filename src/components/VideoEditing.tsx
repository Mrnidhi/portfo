import React, { useState } from 'react';
import { Video, Maximize2 } from 'lucide-react';
import Lightbox from './Lightbox';

interface Video {
  id: number;
  src: string;
  title: string;
  category: string;
}

const VideoEditing: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loadingErrors, setLoadingErrors] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const videos: Video[] = [
    { id: 1, src: '/videos/video11.mp4', title: 'Color Grading Project', category: 'color' },
    { id: 2, src: '/videos/video12.mp4', title: 'Motion Graphics Integration', category: 'motion' },
    { id: 3, src: '/videos/video13.mp4', title: 'VFX Compositing', category: 'vfx' },
    { id: 4, src: '/videos/video14.mp4', title: 'Audio Editing & Sound Design', category: 'audio' }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'color', name: 'Color Grading' },
    { id: 'motion', name: 'Motion Graphics' },
    { id: 'vfx', name: 'Visual Effects' },
    { id: 'audio', name: 'Audio Editing' }
  ];

  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  const displayedVideos = showAll ? filteredVideos : filteredVideos.slice(0, 3);

  const handleVideoClick = (video: Video) => {
    const index = videos.findIndex(v => v.id === video.id);
    setCurrentIndex(index);
    setSelectedVideo(video);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(nextIndex);
    setSelectedVideo(videos[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
    setCurrentIndex(prevIndex);
    setSelectedVideo(videos[prevIndex]);
  };

  const handleVideoError = (videoId: number) => {
    console.error(`Failed to load video: video${videoId}`);
    setLoadingErrors(prev => new Set(prev).add(videoId));
  };

  return (
    <section id="video-editing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Editing</h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setShowAll(false);
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedVideos.map(video => (
            <div
              key={video.id}
              className="group relative aspect-[16/9] overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleVideoClick(video)}
            >
              {loadingErrors.has(video.id) ? (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Video not available</span>
                </div>
              ) : (
                <video
                  src={video.src}
                  className="absolute inset-0 w-full h-full object-cover"
                  poster={`/images/thumbnails/video${video.id}.jpg`}
                  onError={() => handleVideoError(video.id)}
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white font-semibold">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {!showAll && filteredVideos.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              View All
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedVideo && !loadingErrors.has(selectedVideo.id) && (
        <Lightbox
          media={{
            type: 'video',
            src: selectedVideo.src,
            title: selectedVideo.title
          }}
          onClose={() => setSelectedVideo(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </section>
  );
};

export default VideoEditing; 