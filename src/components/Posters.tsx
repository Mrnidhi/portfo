import React, { useState } from 'react';
import { Image, Maximize2 } from 'lucide-react';
import Lightbox from './Lightbox';

interface Poster {
  id: number;
  src: string;
  title: string;
}

const Posters: React.FC = () => {
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loadingErrors, setLoadingErrors] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const posters: Poster[] = [
    { id: 1, src: 'https://drive.google.com/uc?export=view&id=1TY4pTWWu2hDVF35VCNO8E3KJ98HuzKvF', title: 'Poster 1' },
    { id: 2, src: 'https://drive.google.com/uc?export=view&id=1ShNJb3fuLmV1E7-xrNBpw4Ms0laL3B_G', title: 'Poster 2' },
    { id: 3, src: 'https://drive.google.com/uc?export=view&id=1SmLyTYzAzbykGmAuObzswJkW3Mfetcxg', title: 'Poster 3' },
    { id: 4, src: 'https://drive.google.com/uc?export=view&id=1SX-oULqD55nGNLEpY--P49ARVOfAK1vM', title: 'Poster 4' },
    { id: 5, src: 'https://drive.google.com/uc?export=view&id=1Tdzk7eGm-klR-K5X5_-FlV-wPrS3_M3G', title: 'Poster 5' },
    { id: 6, src: 'https://drive.google.com/uc?export=view&id=1U0WllD2X_Wm9GQ1r-IhTahujTb_ySUkn', title: 'Poster 6' },
    { id: 7, src: 'https://drive.google.com/uc?export=view&id=1SXgXXwqugtfOuvmKWa1v1-ofJU1OG8Zo', title: 'Poster 7' },
    { id: 8, src: 'https://drive.google.com/uc?export=view&id=1St5ROAmf3XYhjO9naTLnNpoFJEknA8s2', title: 'Poster 8' },
    { id: 9, src: 'https://drive.google.com/uc?export=view&id=1TsE59PsJxg3arXGM71Ji174nkXJ_Riyz', title: 'Poster 9' },
    { id: 10, src: 'https://drive.google.com/uc?export=view&id=1TVJcttjpBRDSYmSlvRjbOUqogivvpBT3', title: 'Poster 10' },
    { id: 11, src: 'https://drive.google.com/uc?export=view&id=1SmP5MrzUA9aI2yMwHxztDN1DAWc5eIht', title: 'Poster 11' },
    { id: 12, src: 'https://drive.google.com/uc?export=view&id=1SR14ylOCK2zb6qOVnY0Jw6cAUVQ_GL4f', title: 'Poster 12' },
    { id: 13, src: 'https://drive.google.com/uc?export=view&id=1ShJNDbHtve-JnNDLkr4Na8gThy_8jTf-', title: 'Poster 13' },
    { id: 14, src: 'https://drive.google.com/uc?export=view&id=1Ss_2BA2KlumOmOOq9hvOK_aZqLm7DTd5', title: 'Poster 14' },
    { id: 15, src: 'https://drive.google.com/uc?export=view&id=1SHTwZtq1h9-Xla42m5m5FTQn2mmhvkpl', title: 'Poster 15' },
    { id: 16, src: 'https://drive.google.com/uc?export=view&id=1TgbNjSjkj6eIARCpk2FATwKQx0SIPoJ-', title: 'Poster 16' },
    { id: 17, src: 'https://drive.google.com/uc?export=view&id=1Tr_hMpKC5ShksyZ8UYsw4BzXbEy4IhR0', title: 'Poster 17' },
    { id: 18, src: 'https://drive.google.com/uc?export=view&id=1T55fOoH3KWzfus3RJr42La7sp-K2A7Qr', title: 'Poster 18' },
    { id: 19, src: 'https://drive.google.com/uc?export=view&id=1THGBanNmuK7LAhpUrejKVIzmk2KTzWVw', title: 'Poster 19' },
    { id: 20, src: 'https://drive.google.com/uc?export=view&id=1Tj9NJnxsfthMEhroe4QtySuxuW9im9wy', title: 'Poster 20' },
    { id: 21, src: 'https://drive.google.com/uc?export=view&id=1TgHj1BfX50nJE935evou4hNv7qH91aWG', title: 'Poster 21' },
    { id: 22, src: 'https://drive.google.com/uc?export=view&id=1TfP1KdLwsEjWkB4XyEtI6kjx8uS_Q3lV', title: 'Poster 22' },
    { id: 23, src: 'https://drive.google.com/uc?export=view&id=1TZtzwQtfd6nnXccxOPyeXsED86MzkE6u', title: 'Poster 23' },
    { id: 24, src: 'https://drive.google.com/uc?export=view&id=1SY6ghjTI6vho5PZX9LXulHQp5S9C_gzi', title: 'Poster 24' },
    { id: 25, src: 'https://drive.google.com/uc?export=view&id=1TdHnamcr4GqUfIZqilejpOGBdZ7Exu5Z', title: 'Poster 25' },
    { id: 26, src: 'https://drive.google.com/uc?export=view&id=1Ttt6xz7-rJRgUx4hnSqg6T4npefAmgI5', title: 'Poster 26' },
    { id: 27, src: 'https://drive.google.com/uc?export=view&id=1T6dq7BXiq865BIa7HP2cviLb4SZ5A2qH', title: 'Poster 27' }
  ];

  const displayedPosters = showAll ? posters : posters.slice(0, 3);

  const handlePosterClick = (poster: Poster) => {
    const index = posters.findIndex(p => p.id === poster.id);
    setCurrentIndex(index);
    setSelectedPoster(poster);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % posters.length;
    setCurrentIndex(nextIndex);
    setSelectedPoster(posters[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + posters.length) % posters.length;
    setCurrentIndex(prevIndex);
    setSelectedPoster(posters[prevIndex]);
  };

  const handlePosterError = (posterId: number, error: Error) => {
    const poster = posters.find(p => p.id === posterId);
    console.error('Failed to load poster:', {
      posterId,
      title: poster?.title,
      src: poster?.src,
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack
      }
    });
    setLoadingErrors(prev => new Set(prev).add(posterId));
  };

  return (
    <section id="posters" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Poster Designs</h2>
        </div>

        {/* Poster Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosters.map(poster => (
            <div
              key={poster.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => handlePosterClick(poster)}
            >
              {loadingErrors.has(poster.id) ? (
                <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center p-4">
                  <Image className="w-12 h-12 text-gray-400 mb-2" />
                  <span className="text-gray-500 text-center">Unable to load poster</span>
                  <span className="text-gray-400 text-sm mt-1">Please try again later</span>
                </div>
              ) : (
                <img
                  src={poster.src}
                  alt={poster.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => handlePosterError(poster.id, e as unknown as Error)}
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white font-semibold">{poster.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {!showAll && posters.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              View All
            </button>
          </div>
        )}

        {/* Lightbox */}
        {selectedPoster && !loadingErrors.has(selectedPoster.id) && (
          <Lightbox
            media={{
              type: 'image',
              src: selectedPoster.src,
              title: selectedPoster.title
            }}
            onClose={() => setSelectedPoster(null)}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
      </div>
    </section>
  );
};

export default Posters; 