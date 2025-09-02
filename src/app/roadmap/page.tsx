"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import PhaseNavigation from "@/components/PhaseNavigation";
import PhaseContent from "@/components/PhaseContent";
import Image from "next/image";
import Link from "next/link";

export default function RoadmapPage() {
  const [activePhase, setActivePhase] = useState(1);

  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
              {/* Navigation Bar */}
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-white font-bold text-xl hover:text-blue-200 transition-colors animate-fadeIn">
                Lapat
              </Link>
            </div>
            <nav className="flex space-x-6 animate-fadeIn">
              <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/roadmap" className="text-blue-100 hover:text-white transition-colors">
                Roadmap
              </Link>
            </nav>
          </div>
        </div>
      </div>
      
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fadeIn">
            Stellar Account Activation Roadmap
          </h1>
          <div className="flex justify-center animate-fadeIn" style={{animationDelay: '0.3s'}}>
            <Image 
              src="/phases/phases-image.png"
              alt="Phases illustration" 
              width={520} 
              height={320} 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
        
        <PhaseNavigation activePhase={activePhase} onPhaseChange={setActivePhase} />
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 animate-fadeIn" style={{animationDelay: '0.3s'}}>
          <PhaseContent phaseNumber={activePhase} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
