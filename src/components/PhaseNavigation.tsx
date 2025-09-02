import React from 'react';

interface PhaseNavigationProps {
  activePhase: number;
  onPhaseChange: (phase: number) => void;
}

export default function PhaseNavigation({ activePhase, onPhaseChange }: PhaseNavigationProps) {
  const phases = [1, 2, 3, 4, 5];
  
  return (
    <div className="mb-8 animate-fadeIn" style={{animationDelay: '0.2s'}}>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-0">
          Project Phases
        </h2>
        <div className="flex space-x-2">
          {phases.map((phase) => (
            <button
              key={phase}
              onClick={() => onPhaseChange(phase)}
              className={`px-4 py-2 rounded-full transition-all ${
                activePhase === phase
                  ? "bg-blue-600 text-white shadow-md transform scale-110"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30"
              }`}
            >
              {phase}
            </button>
          ))}
        </div>
      </div>
      
      <div className="relative">
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 transition-all duration-500 ease-in-out"
            style={{ width: `${(activePhase / 5) * 100}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between mt-2">
          {phases.map((phase) => (
            <div 
              key={phase}
              className={`text-sm font-medium ${
                phase <= activePhase ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"
              }`}
            >
              Phase {phase}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
