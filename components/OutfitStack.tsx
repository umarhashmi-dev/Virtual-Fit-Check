/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { OutfitLayer } from '../types';
import { AnimatePresence, motion } from 'framer-motion';

interface OutfitStackProps {
  outfitStack: OutfitLayer[];
}

const OutfitStack: React.FC<OutfitStackProps> = ({ outfitStack }) => {
  return (
    <div className="w-full p-4 rounded-xl bg-white border border-gray-200/80">
      <h2 className="text-sm font-bold tracking-wider text-gray-800 mb-3">Outfit Layers</h2>
      <div className="space-y-2">
        <AnimatePresence initial={false}>
          {outfitStack.map((layer, index) => (
            <motion.div
              key={layer.garment?.id || 'base'}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex items-center justify-between bg-white p-2 rounded-lg border border-gray-200"
            >
              <div className="flex items-center overflow-hidden">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 mr-3 text-sm font-semibold text-gray-700 bg-gray-100 border border-gray-200 rounded-md">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-gray-700 truncate text-sm" title={layer.garment?.name}>
                    {layer.garment ? layer.garment.name : 'Base Model'}
                  </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {outfitStack.length === 1 && (
            <p className="text-center text-xs text-gray-500 pt-2 px-2">Your layered items will appear here. Select an item from the wardrobe below.</p>
        )}
      </div>
    </div>
  );
};

export default OutfitStack;