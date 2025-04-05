import React, { useState } from 'react';
import { Video, Maximize2 } from 'lucide-react';
import Lightbox from './Lightbox';

interface Video {
  id: number;
  src: string;
  title: string;
  category: string;
  thumbnail: string;
}

const Cinematography: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loadingErrors, setLoadingErrors] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const videos: Video[] = [
    { 
      id: 1, 
      src: 'https://player.vimeo.com/video/1072700168?h=f8bcd08d19', 
      title: 'Bird Capture', 
      category: 'cinematic',
      thumbnail: '/images/thumbnails/video1.jpg'
    },
    { 
      id: 2, 
      src: 'https://player.vimeo.com/video/1072700174?h=2ea0fb956a', 
      title: 'Lola Cute Reel', 
      category: 'cinematic',
      thumbnail: '/images/thumbnails/video2.jpg'
    },
    { 
      id: 3, 
      src: 'https://player.vimeo.com/video/1072700186?h=cc8418b575', 
      title: 'Jnana Cauvery College Event', 
      category: 'event',
      thumbnail: '/images/thumbnails/video3.jpg'
    },
    { 
      id: 4, 
      src: 'https://player.vimeo.com/video/1072700193?h=dfbf09124e', 
      title: 'Jnana Cauvery Logo Launch', 
      category: 'event',
      thumbnail: '/images/thumbnails/video4.jpg'
    },
    { 
      id: 5, 
      src: 'https://player.vimeo.com/video/1072700200?h=0218dd1018', 
      title: 'PESCO Bike Stunt Event', 
      category: 'event',
      thumbnail: '/images/thumbnails/video5.jpg'
    },
    { 
      id: 6, 
      src: 'https://player.vimeo.com/video/1072700205?h=ee89663249', 
      title: 'PES Electrical Department', 
      category: 'promotional',
      thumbnail: '/images/thumbnails/video6.jpg'
    },
    { 
      id: 7, 
      src: 'https://player.vimeo.com/video/1072700213?h=3f82b593cd', 
      title: 'Ethnic Day Event', 
      category: 'event',
      thumbnail: '/images/thumbnails/video7.jpg'
    },
    { 
      id: 8, 
      src: 'https://player.vimeo.com/video/1072700220?h=38f2e053f5', 
      title: 'Kings Coffee Promotional', 
      category: 'promotional',
      thumbnail: '/images/thumbnails/video8.jpg'
    },
    { 
      id: 9, 
      src: 'https://player.vimeo.com/video/1072700260?h=096324d4bd', 
      title: 'Jnana Cauvery Logo', 
      category: 'promotional',
      thumbnail: '/images/thumbnails/video9.jpg'
    },
    { 
      id: 10, 
      src: 'https://player.vimeo.com/video/1072700265?h=822b06e344', 
      title: 'Coorg Cinematic Reel', 
      category: 'cinematic',
      thumbnail: '/images/thumbnails/video10.jpg'
    },
    { 
      id: 11, 
      src: 'https://player.vimeo.com/video/1072700279?h=645af8094b', 
      title: 'Promotional Video', 
      category: 'promotional',
      thumbnail: '/images/thumbnails/video11.jpg'
    },
    { 
      id: 12, 
      src: 'https://player.vimeo.com/video/1072700291?h=73ea988df6', 
      title: 'Pre-Wedding Video Palace', 
      category: 'cinematic',
      thumbnail: '/images/thumbnails/video12.jpg'
    },
    { 
      id: 13, 
      src: 'https://player.vimeo.com/video/1072700300?h=9f6d796a5e', 
      title: 'Pre-Wedding Video Beach', 
      category: 'cinematic',
      thumbnail: '/images/thumbnails/video13.jpg'
    },
    { 
      id: 14, 
      src: 'https://player.vimeo.com/video/1072700308?h=5b766692eb', 
      title: 'Documentary Video', 
      category: 'documentary',
      thumbnail: '/images/thumbnails/video14.jpg'
    },
    { 
      id: 15, 
      src: 'https://player.vimeo.com/video/1072700316?h=768ad89167', 
      title: 'PESCO Event Video Frames', 
      category: 'event',
      thumbnail: '/images/thumbnails/video15.jpg'
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'cinematic', name: 'Cinematic' },
    { id: 'documentary', name: 'Documentary' },
    { id: 'event', name: 'Event' },
    { id: 'promotional', name: 'Promotional' }
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
    <section id="cinematography" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Cinematography</h2>
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
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
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

export default Cinematography; 