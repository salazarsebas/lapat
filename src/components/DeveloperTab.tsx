import React from 'react';

interface DeveloperTabProps {
  onGetStarted: () => void;
}

export default function DeveloperTab({ onGetStarted }: DeveloperTabProps) {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Launch Your dApp Without Friction</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The 1 XLM minimum balance requirement creates a significant barrier for new users. 
            Our service eliminates this friction by connecting your application with sponsors 
            who cover this cost, allowing your users to onboard seamlessly.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold mb-2">Benefits for Developers:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Zero-friction user onboarding</li>
              <li>Increased conversion rates</li>
              <li>No implementation costs</li>
              <li>Simple API integration</li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 bg-gray-100 dark:bg-gray-700 p-6 rounded-xl">
          <h4 className="font-mono text-sm mb-2 text-gray-500 dark:text-gray-400">Simple Integration</h4>
          <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
            <pre>{`// Generate key pair locally
const pair = StellarSdk.Keypair.random();

// Send only the public key to our service
const response = await fetch('https://api.stellarstarter.com/activate', {
  method: 'POST',
  body: JSON.stringify({ publicKey: pair.publicKey() }),
  headers: { 'Content-Type': 'application/json' }
});

// Account is now active and ready to use!
const result = await response.json();
console.log("Account activated:", result.account);`}</pre>
          </div>
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">
            View API Documentation
          </button>
        </div>
      </div>
      
      <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
        <h3 className="text-2xl font-bold mb-6">How It Works for Developers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-100 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">1</span>
            </div>
            <h4 className="font-bold mb-2">Generate Keys Locally</h4>
            <p className="text-gray-600 dark:text-gray-400">Your user generates their Stellar key pair locally, ensuring their secret key never leaves their device.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-100 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">2</span>
            </div>
            <h4 className="font-bold mb-2">Submit Public Key</h4>
            <p className="text-gray-600 dark:text-gray-400">Send only the public key to our backend through a simple API call.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-100 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">3</span>
            </div>
            <h4 className="font-bold mb-2">Account Activated</h4>
            <p className="text-gray-600 dark:text-gray-400">We validate and execute the CreateAccount operation with 1 XLM from our sponsor pool.</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button 
            onClick={onGetStarted}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg font-medium transition-colors"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}
