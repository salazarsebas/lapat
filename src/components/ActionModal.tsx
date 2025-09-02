import React from 'react';

interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'developer' | 'sponsor';
}

export default function ActionModal({ isOpen, onClose, type }: ActionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 relative animate-slideInUp">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {type === 'developer' ? (
          <>
            <h3 className="text-xl font-bold mb-4">Get Started with Stellar Account Activation</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Stay tuned for more information!
            </p>
          </>
        ) : (
          <>
            <h3 className="text-xl font-bold mb-4">Become a Stellar Account Sponsor</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Thank you for your interest in becoming a sponsor! Please send an email to sebastian.salazar.solano@gmail.com
            </p>
          </>
        )}
      </div>
    </div>
  );
}
