import React from 'react';

export default function Phase2Content() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-blue-600 text-white text-xl font-bold h-12 w-12 rounded-full flex items-center justify-center">
          2
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Professional Sponsor Form and Blockchain Advertising Network
        </h2>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
        <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">Objective</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Expand the relationship with sponsors by offering a more professional process and value-added options:
        </p>
        <ol className="mt-4 list-decimal list-outside pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Digital form</strong> for sponsor applications.</li>
          <li>Maintain the email contact channel.</li>
          <li><strong>Specialized blockchain advertising network</strong>, managed by us as an agency, to offer exposure in blockchain applications, tools, and user communities.</li>
        </ol>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Sponsor Flow</h3>
            
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 shadow-sm mb-6">
              <h4 className="text-lg font-bold mb-3 text-gray-800 dark:text-gray-200">1. Contact Methods</h4>
              
              <div className="mb-4 pl-4 border-l-2 border-blue-500">
                <h5 className="font-bold text-gray-800 dark:text-gray-200">Professional web form:</h5>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Fields: legal name, public name/brand, logo, optional tagline, sponsorship amount (XLM/USDC), URL, billing information, technical contact, and advertising interest area.</li>
                  <li>Field validation, email confirmation, and secure data storage.</li>
                </ul>
              </div>
              
              <div className="pl-4 border-l-2 border-blue-500">
                <h5 className="font-bold text-gray-800 dark:text-gray-200">Email:</h5>
                <p className="text-gray-700 dark:text-gray-300">
                  Maintains the same flow as Phase 1 for sponsors preferring direct communication.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-bold mb-3 text-gray-800 dark:text-gray-200">2. Sponsorship Options</h4>
              
              <div className="mb-4 pl-4 border-l-2 border-blue-500">
                <h5 className="font-bold text-gray-800 dark:text-gray-200">Account activation sponsorship</h5>
                <p className="text-gray-700 dark:text-gray-300">Same as Phase 1.</p>
              </div>
              
              <div className="pl-4 border-l-2 border-green-500">
                <h5 className="font-bold text-gray-800 dark:text-gray-200">Blockchain advertising:</h5>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Sponsors can advertise their products or services with the following structure:
                </p>
                
                <div className="mb-2">
                  <h6 className="font-semibold text-gray-800 dark:text-gray-200">Targeting:</h6>
                  <p className="text-gray-700 dark:text-gray-300">
                    Active users in blockchain ecosystems (e.g., Soroban developers, wallet users, educational projects).
                  </p>
                </div>
                
                <div>
                  <h6 className="font-semibold text-gray-800 dark:text-gray-200">Advertising formats:</h6>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Banner on app login (dynamic based on sponsor).</li>
                    <li>Placements within a dApp or wallet marketplace.</li>
                    <li>Ads targeting specific communities (e.g., Soroban tools, Move libraries, audit services).</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Agency Role</h3>
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded-full mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200">Advertising management</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Act as intermediaries between sponsors and advertising spaces in blockchain applications.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded-full mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200">Optimization</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Identify the best spaces and communities for the sponsor&apos;s product/service, ensuring relevance and investment efficiency.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded-full mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200">Metrics reporting</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Provide data on reach, impressions, and conversions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">End-User Flow (Beneficiary)</h3>
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 shadow-sm">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Upon registration and account activation, users see the &quot;Sponsored by {'{company}'}&quot; banner.
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  In additional spaces (within or outside the app), users may see relevant blockchain-targeted ads.
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Anti-Abuse Measures</h3>
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 shadow-sm">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Maintains the policy of <strong>one activated account per email validated with OTP</strong>.
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  For sponsors: Brand verification and minimum validation to prevent spam/fraudulent ads.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Phase KPIs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-800 mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-center text-gray-800 dark:text-gray-200">Number of sponsors acquired via form vs. email</h4>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-800 mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-center text-gray-800 dark:text-gray-200">Revenue from traditional sponsorships vs. blockchain advertising</h4>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-800 mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 dark:text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <h4 className="font-bold text-center text-gray-800 dark:text-gray-200">CTR (Click-Through Rate) and conversion metrics for the ad network</h4>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-800 mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <h4 className="font-bold text-center text-gray-800 dark:text-gray-200">Sponsor satisfaction (short post-campaign surveys)</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
