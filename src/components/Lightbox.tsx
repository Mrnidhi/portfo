import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Loader2, RefreshCw, AlertCircle } from 'lucide-react';

interface Media {
  type: 'image' | 'video';
  src: string;
  title: string;
}

interface LightboxProps {
  media: Media;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ media, onClose, onNext, onPrevious }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [errorMessage, setErrorMessage] = useState('Video not available');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrevious();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setErrorMessage('Video not available');
    
    // Reset iframe source to force reload
    if (iframeRef.current && media.type === 'video') {
      iframeRef.current.src = media.src;
    }
  }, [media.src]);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    setErrorMessage('Failed to load video. Please check your internet connection.');
  };

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    setIsLoading(true);
    setHasError(false);
    
    if (iframeRef.current && media.type === 'video') {
      iframeRef.current.src = media.src;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
      >
        <X size={32} />
      </button>

      <button
        onClick={onPrevious}
        className="absolute left-4 text-white hover:text-gray-300 transition-colors duration-300"
      >
        <ChevronLeft size={48} />
      </button>

      <div className="relative w-full max-w-6xl mx-4">
        <div className="aspect-video w-full">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Loader2 className="w-12 h-12 text-white animate-spin mb-4" />
              <p className="text-white text-sm">Loading video...</p>
            </div>
          )}
          {hasError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800">
              <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
              <p className="text-white text-xl mb-4">{errorMessage}</p>
              <button
                onClick={handleRetry}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Try Again</span>
              </button>
              {retryCount > 0 && (
                <p className="text-gray-400 text-sm mt-2">
                  If the issue persists, try:
                  <br />
                  1. Checking your internet connection
                  <br />
                  2. Refreshing the page
                  <br />
                  3. Using a different browser
                </p>
              )}
            </div>
          ) : media.type === 'image' ? (
            <img
              src={media.src}
              alt={media.title}
              className="w-full h-full object-contain"
              onLoad={handleLoad}
              onError={handleError}
            />
          ) : (
            <iframe
              ref={iframeRef}
              src={media.src}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              onLoad={handleLoad}
              onError={handleError}
            />
          )}
        </div>
        <h3 className="text-white text-center mt-4 text-xl font-semibold">
          {media.title}
        </h3>
      </div>

      <button
        onClick={onNext}
        className="absolute right-4 text-white hover:text-gray-300 transition-colors duration-300"
      >
        <ChevronRight size={48} />
      </button>
    </div>
  );
};

export default Lightbox; 