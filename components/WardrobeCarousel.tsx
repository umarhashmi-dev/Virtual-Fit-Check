/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import type { WardrobeItem } from '../types';
import { UploadCloudIcon } from './icons';

interface WardrobeProps {
  onGarmentSelect: (garmentFile: File, garmentInfo: WardrobeItem) => void;
  isLoading: boolean;
  wardrobe: WardrobeItem[];
}

const urlToFile = (url: string, filename: string): Promise<File> => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.setAttribute('crossOrigin', 'anonymous');

        image.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = image.naturalWidth;
            canvas.height = image.naturalHeight;

            const ctx = canvas.getContext('2d');
            if (!ctx) {
                return reject(new Error('Could not get canvas context.'));
            }
            ctx.drawImage(image, 0, 0);

            canvas.toBlob((blob) => {
                if (!blob) {
                    return reject(new Error('Canvas toBlob failed.'));
                }
                const mimeType = blob.type || 'image/png';
                const file = new File([blob], filename, { type: mimeType });
                resolve(file);
            }, 'image/png');
        };

        image.onerror = (error) => {
            reject(new Error(`Could not load image from URL. Error: ${error}`));
        };

        image.src = url;
    });
};

const Wardrobe: React.FC<WardrobeProps> = ({ onGarmentSelect, isLoading, wardrobe }) => {
    const [error, setError] = useState<string | null>(null);

    const handleGarmentClick = async (item: WardrobeItem) => {
        if (isLoading) return;
        setError(null);
        try {
            const file = await urlToFile(item.url, item.name);
            onGarmentSelect(file, item);
        } catch (err) {
            const detailedError = `Failed to load wardrobe item.`;
            setError(detailedError);
            console.error(err);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (!file.type.startsWith('image/')) {
                setError('Please select an image file.');
                return;
            }
            const customGarmentInfo: WardrobeItem = {
                id: `custom-${Date.now()}`,
                name: file.name,
                url: URL.createObjectURL(file),
            };
            onGarmentSelect(file, customGarmentInfo);
        }
    };

  return (
    <div className="w-full p-4 rounded-xl bg-white border border-gray-200/80">
        <div className="grid grid-cols-2 gap-3">
            {wardrobe.map((item) => (
                <button
                key={item.id}
                onClick={() => handleGarmentClick(item)}
                disabled={isLoading}
                className="relative aspect-[4/5] bg-gray-50 border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 group disabled:opacity-50 disabled:cursor-not-allowed hover:border-gray-300 flex flex-col items-center justify-center p-2"
                aria-label={`Select ${item.name}`}
                >
                    <img src={item.url} alt={item.name} className="flex-grow w-full h-0 object-contain" />
                    <p className="flex-shrink-0 text-gray-700 text-xs font-semibold mt-2">{item.name}</p>
                </button>
            ))}
            <label htmlFor="custom-garment-upload" className={`relative aspect-[4/5] border border-gray-200 rounded-lg flex flex-col items-center justify-center text-gray-500 transition-colors ${isLoading ? 'cursor-not-allowed bg-gray-100' : 'hover:border-gray-300 hover:text-gray-600 cursor-pointer bg-gray-50'}`}>
                <UploadCloudIcon className="w-8 h-8 mb-2 text-gray-400"/>
                <span className="text-sm text-center font-semibold">Upload</span>
                <input id="custom-garment-upload" type="file" className="hidden" accept="image/png, image/jpeg, image/webp, image/avif, image/heic, image/heif" onChange={handleFileChange} disabled={isLoading}/>
            </label>
        </div>
        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </div>
  );
};

export default Wardrobe;