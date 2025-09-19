/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import Spinner from './Spinner';
import { AnimatePresence, motion } from 'framer-motion';
import { DownloadCloudIcon } from './icons';

interface CanvasProps {
  displayImageUrl: string | null;
  isLoading: boolean;
  loadingMessage: string;
}

const Canvas: React.FC<CanvasProps> = ({ displayImageUrl, isLoading, loadingMessage }) => {
  
  const handleDownload = () => {
    if (!displayImageUrl) return;
    const link = document.createElement('a');
    link.href = displayImageUrl;
    link.download = `fit-check-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full h-full flex items-center justify-center relative group p-4 bg-[#FBF8FF] rounded-2xl">
      {displayImageUrl && (
        <button 
            onClick={handleDownload}
            className="absolute top-4 right-4 z-30 p-2 rounded-lg bg-white/50 border border-black/10 backdrop-blur-sm transition-colors hover:bg-white/80"
            aria-label="Download image"
            title="Download image"
        >
            <DownloadCloudIcon className="w-6 h-6 text-gray-800" />
        </button>
      )}

      <div className="relative w-full h-full flex items-center justify-center">
        {displayImageUrl ? (
          <img
            key={displayImageUrl}
            src={displayImageUrl}
            alt="Virtual try-on model"
            className="max-w-full max-h-full object-contain transition-opacity duration-500 animate-fade-in rounded-lg"
          />
        ) : (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <Spinner />
              <p className="text-md text-gray-600 mt-4">Loading Model...</p>
            </div>
        )}
        
        <AnimatePresence>
          {isLoading && (
              <motion.div
                  className="absolute inset-0 bg-white/70 backdrop-blur-md flex flex-col items-center justify-center z-20 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
              >
                  <Spinner />
                  {loadingMessage && (
                      <p className="text-lg text-gray-800 mt-4 text-center px-4">{loadingMessage}</p>
                  )}
              </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Canvas;