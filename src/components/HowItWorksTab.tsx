import React from 'react';

export default function HowItWorksTab() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">The Complete Process</h3>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-800"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            <div className="relative pl-14">
              <div className="absolute left-0 top-1 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Developer Integration</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Developers integrate our simple API into their dApp. When a new user needs an account,
                the dApp generates a Stellar keypair locally and sends only the public key to our service.
              </p>
            </div>
            
            <div className="relative pl-14">
              <div className="absolute left-0 top-1 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Validation & Security</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Our service validates the request, checking for abuse patterns and ensuring the account
                doesn&apos;t already exist. We use email verification to prevent spam and maintain a high-quality
                user base for sponsors.
              </p>
            </div>
            
            <div className="relative pl-14">
              <div className="absolute left-0 top-1 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Sponsor Selection</h4>
              <p className="text-gray-700 dark:text-gray-300">
                The system selects a sponsor from the pool based on their contribution amount and
                display frequency settings. The sponsor&apos;s brand is displayed to the user during the
                activation process.
              </p>
            </div>
            
            <div className="relative pl-14">
              <div className="absolute left-0 top-1 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">4</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Account Creation</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Our service submits a CreateAccount operation to the Stellar network, funding the
                new account with the minimum 1 XLM balance from the sponsor&apos;s pool. The transaction
                is signed by our service&apos;s key.
              </p>
            </div>
            
            <div className="relative pl-14">
              <div className="absolute left-0 top-1 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">5</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Confirmation & Analytics</h4>
              <p className="text-gray-700 dark:text-gray-300">
                The service confirms successful account creation and returns the account details to the
                dApp. Analytics are recorded for the sponsor dashboard, tracking activations, user retention,
                and other key metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 mt-8">
        <h4 className="font-bold text-lg mb-4">Anti-Abuse Measures</h4>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>One activated account per email address</li>
          <li>Email validation via OTP (One-Time Password)</li>
          <li>Rate limiting and IP monitoring</li>
          <li>If an email has already activated an account, it cannot do so again</li>
          <li>Suspicious pattern detection and blocking</li>
          <li>Regular audits of activation patterns</li>
        </ul>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border border-blue-200 dark:border-blue-800 mt-8">
        <h4 className="font-bold text-lg mb-4 text-blue-700 dark:text-blue-300">Service Benefits</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold mb-2">For Users</h5>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Zero-cost entry to the Stellar ecosystem</li>
              <li>Seamless onboarding experience</li>
              <li>No technical knowledge required</li>
              <li>Immediate account activation</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">For the Ecosystem</h5>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Reduced barrier to entry</li>
              <li>Increased user adoption</li>
              <li>More active accounts and transactions</li>
              <li>Greater network utility and value</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
