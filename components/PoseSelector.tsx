/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

interface PoseSelectorProps {
  onSelectPose: (index: number) => void;
  poseInstructions: string[];
  currentPoseIndex: number;
  isLoading: boolean;
}

const PoseSelector: React.FC<PoseSelectorProps> = ({ onSelectPose, poseInstructions, currentPoseIndex, isLoading }) => {
  return (
    <div className="w-full p-4 rounded-xl bg-white border border-gray-200/80">
        <h3 className="text-sm font-bold tracking-wider text-gray-800 mb-3">Poses</h3>
        <div className="grid grid-cols-2 gap-2">
            {poseInstructions.map((pose, index) => (
                <button
                    key={pose}
                    onClick={() => onSelectPose(index)}
                    disabled={isLoading}
                    className={`w-full flex items-center justify-center text-center text-sm font-medium py-2 px-3 rounded-lg border transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                        index === currentPoseIndex 
                        ? 'bg-gray-800 text-white font-bold border-gray-800' 
                        : 'text-gray-700 bg-gray-100 hover:bg-gray-200 border-gray-200'
                    }`}
                    title={pose}
                >
                    <span className="font-mono text-xs mr-2 p-1 bg-black/10 rounded">{index+1}</span>
                    Base Model
                </button>
            ))}
        </div>
    </div>
  );
};

export default PoseSelector;