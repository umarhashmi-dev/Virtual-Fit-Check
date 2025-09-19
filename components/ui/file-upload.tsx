/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { FolderIcon, XIcon } from '../icons';

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  selectedFile: File | null;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, selectedFile }) => {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreview(null);
    }
  }, [selectedFile]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileSelect(acceptedFiles[0]);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpeg', '.jpg', '.png', '.webp', '.heic', '.heif', '.svg'] },
    multiple: false,
  });

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFileSelect(null);
  };

  return (
    <div
      {...getRootProps()}
      className={`w-full h-full p-4 border-2 border-dashed rounded-xl flex items-center justify-center text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-purple-500 bg-purple-50' : 'border-purple-200/80 hover:border-purple-400/80 bg-white'}`}
    >
      <input {...getInputProps()} />
      {preview && selectedFile ? (
        <div className="relative w-full h-full">
          <img src={preview} alt="Preview" className="w-full h-full object-contain rounded-lg" />
          <button
            onClick={handleClear}
            className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70"
            aria-label="Remove image"
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center text-gray-500">
          <FolderIcon className="w-16 h-16 mb-4 text-purple-300" />
          <p className="text-sm">
            Drag & drop <span className="font-semibold text-purple-600">choose file</span> to upload.
          </p>
          <p className="text-xs text-gray-400 mt-1">Image format: JPG, PNG, SVG, Max 5.0MB</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;