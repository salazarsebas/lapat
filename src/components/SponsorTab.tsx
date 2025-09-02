import React from 'react';

interface SponsorTabProps {
  onBecomeSponsor: () => void;
}

export default function SponsorTab({ onBecomeSponsor }: SponsorTabProps) {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Amplify Your Brand in the Stellar Ecosystem</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            By becoming a sponsor, your brand will be prominently displayed to thousands of new Stellar users at their 
            moment of highest engagement. Support the ecosystem while gaining valuable exposure to a targeted audience.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold mb-2">Benefits for Sponsors:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Brand visibility to new Stellar users</li>
              <li>Support ecosystem growth</li>
              <li>Detailed analytics on activations</li>
              <li>Customizable sponsorship levels</li>
              <li>Tax-deductible contributions (in eligible jurisdictions)</li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p className="mb-4">
            Interested in becoming a sponsor? Contact us to discuss sponsorship opportunities:
          </p>
          <a 
            href="mailto:sebastian.salazar.solano@gmail.com" 
            className="flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            sebastian.salazar.solano@gmail.com
          </a>
          
          <h3 className="text-xl font-semibold mt-6 mb-4">Sponsorship Methods</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">XLM Sponsorship</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Direct contribution of XLM to the sponsorship pool</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
              <div className="flex items-center">
                <div className="bg-green-100 dark:bg-green-800 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">USDC Sponsorship</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Contribute USDC which we convert to XLM as needed</p>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Sponsor Email Template</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">When sending the email, please include:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-gray-600 dark:text-gray-400">
            <li>Legal company name</li>
            <li>Public name/brand (to be displayed at login)</li>
            <li>Logo (SVG or PNG format)</li>
            <li>Optional tagline (max. 60 characters)</li>
            <li>Sponsorship amount (in XLM or USDC)</li>
            <li>Company URL</li>
            <li>Billing information (if applicable)</li>
            <li>Technical contact (name, email, phone)</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <button 
          onClick={onBecomeSponsor}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg font-medium transition-colors"
        >
          Become a Sponsor
        </button>
      </div>
    </div>
  );
}
