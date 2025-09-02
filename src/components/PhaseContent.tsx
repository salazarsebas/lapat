import React from 'react';
import dynamic from 'next/dynamic';

// Use dynamic imports to avoid module not found errors during build
const Phase1Content = dynamic(() => import('./phases/Phase1Content'));
const Phase2Content = dynamic(() => import('./phases/Phase2Content'));
const Phase3Content = dynamic(() => import('./phases/Phase3Content'));
const Phase4Content = dynamic(() => import('./phases/Phase4Content'));
const Phase5Content = dynamic(() => import('./phases/Phase5Content'));

interface PhaseContentProps {
  phaseNumber: number;
}

export default function PhaseContent({ phaseNumber }: PhaseContentProps) {
  // Render the appropriate phase content based on the phaseNumber
  switch (phaseNumber) {
    case 1:
      return <Phase1Content />;
    case 2:
      return <Phase2Content />;
    case 3:
      return <Phase3Content />;
    case 4:
      return <Phase4Content />;
    case 5:
      return <Phase5Content />;
    default:
      return <div>Invalid phase number</div>;
  }
}
