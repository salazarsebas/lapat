import React from 'react';

export default function Phase1Content() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-blue-600 text-white text-xl font-bold h-12 w-12 rounded-full flex items-center justify-center">
          1
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Stellar Account Activation (Mainnet) with Sponsorship
        </h2>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
        <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">Objective</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Activate new accounts on <strong>Stellar Mainnet</strong> by sending the <strong>minimum 1 XLM</strong> required 
          for the account to exist on the ledger. This XLM comes from <strong>sponsors</strong> who fund the service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Login Message</h3>
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 shadow-sm">
              <p className="text-gray-700 dark:text-gray-300 mb-2">Text visible to the user:</p>
              <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                &quot;Sponsored by TeresitaXLM&quot;
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                Must be dynamic: <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">Sponsored by {'{sponsorName}'}</code>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">User Flow (Beneficiary)</h3>
            <ol className="space-y-4 list-decimal list-outside pl-5">
              <li className="text-gray-700 dark:text-gray-300">
                The user generates their key pair <strong>locally</strong> (on the client) and retains the <em>secret key</em>.
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                Sends only the <strong>public key</strong> to the backend.
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                The backend validates that the account does not exist and executes the <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">CreateAccount</code> operation from the sponsoring wallet with <strong>startingBalance = 1 XLM</strong>.
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                The system confirms the activation and displays a thank-you banner to the sponsor.
              </li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Anti-Abuse Measures</h3>
            <ul className="space-y-2 list-disc list-outside pl-5">
              <li className="text-gray-700 dark:text-gray-300">
                One activated account per email address.
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                Email is validated via OTP (One-Time Password).
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                If an email has already activated an account, it cannot do so again.
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Sponsor Flow</h3>
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 shadow-sm">
              <h4 className="font-bold mb-2 text-gray-800 dark:text-gray-200">Application Method</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Interested sponsors should contact:
                <a 
                  href="mailto:sebastian.salazar.solano@gmail.com" 
                  className="block mt-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  sebastian.salazar.solano@gmail.com
                </a>
              </p>

              <h4 className="font-bold mb-2 text-gray-800 dark:text-gray-200">Sponsor Email Template</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">When sending the email, the sponsor must include:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
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

          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Sponsorship Methods</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <div className="flex items-center">
                  <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">XLM</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Direct on the Stellar network</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <div className="flex items-center">
                  <div className="bg-green-100 dark:bg-green-800 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">USDC</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Converted to XLM for account activation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Phase KPIs</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <h4 className="font-bold text-gray-800 dark:text-gray-200">Total activations</h4>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <h4 className="font-bold text-gray-800 dark:text-gray-200">Activations per sponsor</h4>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <h4 className="font-bold text-gray-800 dark:text-gray-200">Average cost per activation</h4>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <h4 className="font-bold text-gray-800 dark:text-gray-200">Active sponsors and contributed amounts</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
