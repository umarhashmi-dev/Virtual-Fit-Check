/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useMemo } from 'react';
import StartScreen from './components/StartScreen';
import Canvas from './components/Canvas';
import OutfitStack from './components/OutfitStack';
import Wardrobe from './components/WardrobeCarousel';
import PoseSelector from './components/PoseSelector';
import { generateModelImage, generateVirtualTryOnImage, generatePoseVariation } from './services/geminiService';
import { getFriendlyErrorMessage } from './lib/utils';
import type { OutfitLayer, WardrobeItem } from './types';
import { defaultWardrobe } from './wardrobe';
import Header from './components/Header';
import ServicesSection from './components/ServicesSection';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Disclaimer from './pages/Disclaimer';
import Sitemap from './pages/Sitemap';
import CookieConsent from './components/CookieConsent';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';


type AppState = 'start' | 'editor';
export type Page = 'landing' | 'privacy' | 'terms' | 'disclaimer' | 'sitemap' | 'about' | 'contact';


const POSE_INSTRUCTIONS = [
  "Standing, facing forward",
  "Slightly turned, 3/4 view",
  "Side profile view",
  "Walking towards camera",
];

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('start');
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [outfitHistory, setOutfitHistory] = useState<OutfitLayer[]>([]);
  const [currentPoseIndex, setCurrentPoseIndex] = useState(0);

  const currentOutfitLayer = useMemo(() => outfitHistory.length > 0 ? outfitHistory[outfitHistory.length - 1] : null, [outfitHistory]);

  const displayImageUrl = useMemo(() => {
    if (!currentOutfitLayer) return null;
    const poseInstruction = POSE_INSTRUCTIONS[currentPoseIndex];
    return currentOutfitLayer.poseImages[poseInstruction] || Object.values(currentOutfitLayer.poseImages)[0];
  }, [currentOutfitLayer, currentPoseIndex]);


  const handleStartOver = () => {
    setAppState('start');
    setCurrentPage('landing');
    setOutfitHistory([]);
    setCurrentPoseIndex(0);
    setError(null);
    setIsLoading(false);
    setSelectedFile(null);
  };

  const handleGenerateClick = async () => {
    if (!selectedFile || isLoading) return;
    setIsLoading(true);
    setLoadingMessage('Creating your fashion model...');
    setError(null);

    try {
      const modelImageUrl = await generateModelImage(selectedFile);
      const initialLayer: OutfitLayer = {
        garment: null,
        poseImages: {
          [POSE_INSTRUCTIONS[0]]: modelImageUrl,
        }
      };
      setOutfitHistory([initialLayer]);
      setAppState('editor');
    } catch (err) {
      setError(getFriendlyErrorMessage(err, "Failed to create model image"));
    } finally {
      setIsLoading(false);
      setLoadingMessage('');
    }
  };
  
  const handleGarmentSelect = async (garmentFile: File, garmentInfo: WardrobeItem) => {
    if (isLoading || !currentOutfitLayer) return;

    setIsLoading(true);
    setLoadingMessage(`Adding ${garmentInfo.name} to your outfit...`);
    setError(null);
    
    const baseImageUrl = Object.values(currentOutfitLayer.poseImages)[0];

    try {
        const tryOnImageUrl = await generateVirtualTryOnImage(baseImageUrl, garmentFile);
        
        const newLayer: OutfitLayer = {
            garment: garmentInfo,
            poseImages: {
                [POSE_INSTRUCTIONS[0]]: tryOnImageUrl,
            },
        };
        setOutfitHistory(prev => [...prev, newLayer]);
        setCurrentPoseIndex(0);
    } catch(err) {
        setError(getFriendlyErrorMessage(err, "Failed to apply garment"));
    } finally {
        setIsLoading(false);
        setLoadingMessage('');
    }
  };

  const handleSelectPose = async (poseIndex: number) => {
    if (isLoading || !currentOutfitLayer || currentPoseIndex === poseIndex) return;

    const poseInstruction = POSE_INSTRUCTIONS[poseIndex];
    
    if (currentOutfitLayer.poseImages[poseInstruction]) {
        setCurrentPoseIndex(poseIndex);
        return;
    }

    setIsLoading(true);
    setLoadingMessage(`Changing pose to: ${poseInstruction}...`);
    setError(null);

    const baseImageUrl = Object.values(currentOutfitLayer.poseImages)[0];

    try {
        const newPoseImageUrl = await generatePoseVariation(baseImageUrl, poseInstruction);
        setOutfitHistory(prev => {
            const newHistory = [...prev];
            const lastLayer = newHistory[newHistory.length - 1];
            lastLayer.poseImages[poseInstruction] = newPoseImageUrl;
            return newHistory;
        });
        setCurrentPoseIndex(poseIndex);
    } catch (err) {
        setError(getFriendlyErrorMessage(err, "Failed to change pose"));
    } finally {
        setIsLoading(false);
        setLoadingMessage('');
    }
  };

  const renderCurrentPage = () => {
    switch(currentPage) {
        case 'privacy': return <PrivacyPolicy />;
        case 'terms': return <TermsOfService />;
        case 'disclaimer': return <Disclaimer />;
        case 'sitemap': return <Sitemap onNavigate={setCurrentPage} />;
        case 'about': return <AboutUs />;
        case 'contact': return <ContactUs />;
        case 'landing':
        default:
            return (
                <>
                    <div className="h-[calc(100vh-68px)] flex items-center justify-center">
                        <StartScreen
                            onFileSelect={setSelectedFile}
                            onGenerate={handleGenerateClick}
                            isLoading={isLoading}
                            selectedFile={selectedFile}
                        />
                    </div>
                    <ServicesSection />
                    <BlogSection />
                    <FAQSection />
                    <TestimonialsSection />
                </>
            );
    }
  };

  return (
    <div className={`w-screen ${appState === 'start' ? 'min-h-screen' : 'h-screen'} flex flex-col bg-white text-gray-800 overflow-x-hidden`}>
      <Header onLogoClick={handleStartOver} onNavigate={setCurrentPage} />
      
      {appState === 'start' ? (
        <>
            <main className="flex-grow">
                {renderCurrentPage()}
            </main>
            <Footer onNavigate={setCurrentPage} />
        </>
      ) : (
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 overflow-hidden">
            <div className="lg:col-span-2 h-full flex items-center justify-center">
                <Canvas 
                    displayImageUrl={displayImageUrl}
                    isLoading={isLoading}
                    loadingMessage={loadingMessage}
                />
            </div>
            <div className="h-full flex flex-col gap-4 overflow-y-auto pr-2">
                <OutfitStack outfitStack={outfitHistory} />
                <PoseSelector 
                    onSelectPose={handleSelectPose} 
                    poseInstructions={POSE_INSTRUCTIONS} 
                    currentPoseIndex={currentPoseIndex} 
                    isLoading={isLoading} 
                />
                <Wardrobe 
                    wardrobe={defaultWardrobe} 
                    onGarmentSelect={handleGarmentSelect} 
                    isLoading={isLoading}
                />
                 {error && (
                    <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        <p><strong>Error:</strong> {error}</p>
                    </div>
                )}
            </div>
        </main>
      )}
      <CookieConsent />
    </div>
  );
};

export default App;
