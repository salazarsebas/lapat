"use client";

import { useState } from "react";

// Import components
import HeroSection from "../components/HeroSection";
import TabNavigation from "../components/TabNavigation";
import DeveloperTab from "../components/DeveloperTab";
import SponsorTab from "../components/SponsorTab";
import HowItWorksTab from "../components/HowItWorksTab";
import MetricsSection from "../components/MetricsSection";
import ActionModal from "../components/ActionModal";
import Footer from "../components/Footer";

export default function Home() {
  // This would be dynamic in a real application
  const sponsorName = "TeresitaXLM";
  const [activeTab, setActiveTab] = useState("developers");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'developer' | 'sponsor'>('developer');

  const handleGetStarted = () => {
    setModalType('developer');
    setShowModal(true);
  };

  const handleBecomeSponsor = () => {
    setModalType('sponsor');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <HeroSection 
        sponsorName={sponsorName} 
        onTabChange={setActiveTab} 
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <TabNavigation 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          {activeTab === "developers" && (
            <DeveloperTab onGetStarted={handleGetStarted} />
          )}
          
          {activeTab === "sponsors" && (
            <SponsorTab onBecomeSponsor={handleBecomeSponsor} />
          )}
          
          {activeTab === "how" && (
            <HowItWorksTab />
          )}
        </div>
        
        <MetricsSection />
      </main>
      
      <Footer />
      
      {showModal && (
        <ActionModal 
          isOpen={showModal}
          onClose={handleCloseModal}
          type={modalType}
        />
      )}
    </div>
  );
}
