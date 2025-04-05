import React, { useState } from 'react';
import { Image, Maximize2 } from 'lucide-react';
import Lightbox from './Lightbox';

interface Photo {
  id: number;
  src: string;
  title: string;
}

const Photography: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loadingErrors, setLoadingErrors] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const photos: Photo[] = [
    { id: 1, src: 'https://drive.google.com/uc?export=view&id=1RDnSun2OKFMCnvL8R5c9EFldRE1awsYd', title: 'Photo 1' },
    { id: 2, src: 'https://drive.google.com/uc?export=view&id=1R1D0pOgf0lLY_D79mvW5xYcSHUuCofGX', title: 'Photo 2' },
    { id: 3, src: 'https://drive.google.com/uc?export=view&id=1R2TOJ8pNNfKYEN0MSQ1pUF_CNmed-4d6', title: 'Photo 3' },
    { id: 4, src: 'https://drive.google.com/uc?export=view&id=1Qh3cUl0kccKFEecqSPi_C88jhOIBbRQY', title: 'Photo 4' },
    { id: 5, src: 'https://drive.google.com/uc?export=view&id=1RWYyMB7FKTmrePZuCtL9H1T5UYC72Q9S', title: 'Photo 5' },
    { id: 6, src: 'https://drive.google.com/uc?export=view&id=1QW5uAeCXt2QGHU-Yv7TdCdN4YAfaSkqe', title: 'Photo 6' },
    { id: 7, src: 'https://drive.google.com/uc?export=view&id=1QNTiH4YyuZGpgXyZaXCi2mUrSr75lxLk', title: 'Photo 7' },
    { id: 8, src: 'https://drive.google.com/uc?export=view&id=1QfdvZz6cw6-BX3gImx73ozls-FA4jaJH', title: 'Photo 8' },
    { id: 9, src: 'https://drive.google.com/uc?export=view&id=1QvptH7GEFuYs9579x66wgE4aTndrtgwB', title: 'Photo 9' },
    { id: 10, src: 'https://drive.google.com/uc?export=view&id=1RKj3vX6PpecVd1NfAdHZmpr74r4TCjeb', title: 'Photo 10' },
    { id: 11, src: 'https://drive.google.com/uc?export=view&id=1QKm96SE7qjpYJTcDZZUES384F8A99cNE', title: 'Photo 11' },
    { id: 12, src: 'https://drive.google.com/uc?export=view&id=1RMWTJaNR60NbG8S15wBH2r7WikTOgMpa', title: 'Photo 12' },
    { id: 13, src: 'https://drive.google.com/uc?export=view&id=1QYKJRHUyShrfwgHnuM21cEuwd4gccMnX', title: 'Photo 13' },
    { id: 14, src: 'https://drive.google.com/uc?export=view&id=1QUlWySKAF_S3p3V_9nrAy5R3jZDseKbh', title: 'Photo 14' },
    { id: 15, src: 'https://drive.google.com/uc?export=view&id=1R97Uj7DPblwnb5k28bYxaSD2aM3DIde3', title: 'Photo 15' },
    { id: 16, src: 'https://drive.google.com/uc?export=view&id=1Qika9tOCNwbzOYFPF-ABftWIra6Z8zob', title: 'Photo 16' },
    { id: 17, src: 'https://drive.google.com/uc?export=view&id=1RKheUiGQEiyQJOtqI-tqDQcTwdp77bCA', title: 'Photo 17' },
    { id: 18, src: 'https://drive.google.com/uc?export=view&id=1R3G40PkRbTdX05TOYtNTnhVt3e52XyU2', title: 'Photo 18' }
  ];

  const displayedPhotos = showAll ? photos : photos.slice(0, 3);

  const handlePhotoClick = (photo: Photo) => {
    const index = photos.findIndex(p => p.id === photo.id);
    setCurrentIndex(index);
    setSelectedPhoto(photo);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(nextIndex);
    setSelectedPhoto(photos[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(prevIndex);
    setSelectedPhoto(photos[prevIndex]);
  };

  const handlePhotoError = (photoId: number, event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const photo = photos.find(p => p.id === photoId);
    const target = event.target as HTMLImageElement;
    console.error('Failed to load photo:', {
      photoId,
      title: photo?.title,
      src: photo?.src,
      error: {
        type: event.type,
        currentSrc: target.currentSrc,
        naturalWidth: target.naturalWidth,
        naturalHeight: target.naturalHeight
      }
    });
    setLoadingErrors(prev => new Set(prev).add(photoId));
  };

  return (
    <section id="photography" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Photography</h2>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPhotos.map(photo => (
            <div
              key={photo.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => handlePhotoClick(photo)}
            >
              {loadingErrors.has(photo.id) ? (
                <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center p-4">
                  <Image className="w-12 h-12 text-gray-400 mb-2" />
                  <span className="text-gray-500 text-center">Unable to load photo</span>
                  <span className="text-gray-400 text-sm mt-1">Please try again later</span>
                </div>
              ) : (
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => handlePhotoError(photo.id, e)}
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white font-semibold">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {!showAll && photos.length > 3 && (
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
        {selectedPhoto && !loadingErrors.has(selectedPhoto.id) && (
          <Lightbox
            media={{
              type: 'image',
              src: selectedPhoto.src,
              title: selectedPhoto.title
            }}
            onClose={() => setSelectedPhoto(null)}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
      </div>
    </section>
  );
};

export default Photography; 