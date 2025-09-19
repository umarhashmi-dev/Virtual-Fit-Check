/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import FileUpload from './ui/file-upload';
import Spinner from './Spinner';
import { ArrowRightIcon, SparkleIcon } from './icons';

interface StartScreenProps {
  onFileSelect: (file: File | null) => void;
  onGenerate: () => void;
  isLoading: boolean;
  selectedFile: File | null;
}

const StartScreen: React.FC<StartScreenProps> = ({ onFileSelect, onGenerate, isLoading, selectedFile }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 w-full max-w-4xl mx-auto">
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-600 shadow-sm mb-6">
            <p>Free Forever, No Registration and no charges</p>
            <div className="bg-black text-white rounded-full p-0.5">
                <ArrowRightIcon className="w-4 h-4" />
            </div>
        </div>
      
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 tracking-tight">Virtual Fit Check</h1>
        <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
          Upload your photo, pick a garment, and see the magic happen. Your personal fitting room, powered by AI.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          A Tool by <a href="https://umarhashmi.dev" target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-600 hover:underline">Umar Hashmi</a>
        </p>
      </div>

      <div className="w-full max-w-xl bg-[#FBF8FF] rounded-2xl p-6">
        <div className="w-full h-64 bg-white rounded-xl mb-6">
            <FileUpload onFileSelect={onFileSelect} selectedFile={selectedFile} />
        </div>
        <button 
          onClick={onGenerate}
          disabled={!selectedFile || isLoading}
          className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold py-3 px-4 rounded-lg transition-all duration-200 ease-in-out border border-gray-300 hover:bg-gray-100 active:scale-95 disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed group"
        >
            {isLoading ? (
                <>
                    <Spinner />
                    <span>Generating...</span>
                </>
            ) : (
                <>
                    <span>Generate Magic Image</span>
                    <div className="relative">
                      <SparkleIcon className="w-6 h-6 text-purple-500" />
                      <span className="absolute -inset-2 bg-purple-400/50 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </div>
                </>
            )}
        </button>
      </div>

    </div>
  );
};

export default StartScreen;