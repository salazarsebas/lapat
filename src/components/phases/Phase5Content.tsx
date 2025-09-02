import React from 'react';

export default function Phase5Content() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-blue-600 text-white text-xl font-bold h-12 w-12 rounded-full flex items-center justify-center">
          5
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Decentralized Sponsorship Network
        </h2>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
        <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">Objective</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Transform the sponsorship platform into a decentralized network where sponsors, developers, and users 
          can interact directly through smart contracts, creating a self-sustaining ecosystem for Stellar account activation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Decentralized Architecture</h3>
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-bold mb-3 text-gray-800 dark:text-gray-200">Core Components</h4>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-full mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 dark:text-gray-200">Smart Contracts</h5>
                    <p className="text-gray-700 dark:text-gray-300">
                      Soroban smart contracts to manage sponsorship funds, account creation, and reward distribution.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-full mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 dark:text-gray-200">Sponsorship Pools</h5>
                    <p className="text-gray-700 dark:text-gray-300">
                      Decentralized liquidity pools where sponsors can contribute funds for account activation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-full mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 dark:text-gray-200">DAO Governance</h5>
                    <p className="text-gray-700 dark:text-gray-300">
                      Decentralized Autonomous Organization for community-driven decision making on platform parameters.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-full mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 dark:text-gray-200">Reputation System</h5>
                    <p className="text-gray-700 dark:text-gray-300">
                      On-chain reputation tracking for sponsors, developers, and activated accounts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Tokenomics Model</h3>
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-bold mb-3 text-gray-800 dark:text-gray-200">LAPAT Token</h4>
              
              <div className="mb-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A utility token that powers the decentralized sponsorship network, providing incentives for all participants.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Token Utility</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>Governance voting</li>
                      <li>Staking for rewards</li>
                      <li>Access to premium features</li>
                      <li>Sponsor visibility boosting</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Distribution</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>Sponsors: 30%</li>
                      <li>Developers: 25%</li>
                      <li>Users: 20%</li>
                      <li>Treasury: 15%</li>
                      <li>Team: 10%</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <h4 className="text-lg font-bold mb-3 text-gray-800 dark:text-gray-200">Incentive Mechanisms</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <span className="font-semibold">Sponsor rewards:</span> Sponsors earn LAPAT tokens based on the number of accounts they activate and their longevity.
                </li>
                <li>
                  <span className="font-semibold">Developer incentives:</span> Developers integrating the platform receive tokens for each user onboarded.
                </li>
                <li>
                  <span className="font-semibold">User engagement:</span> Users earn tokens for completing onboarding, verifications, and maintaining active accounts.
                </li>
                <li>
                  <span className="font-semibold">Liquidity mining:</span> Additional rewards for providing liquidity to sponsorship pools.
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Ecosystem Expansion</h3>
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-800 p-2 rounded-full mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 dark:text-gray-200">Cross-Chain Integration</h5>
                    <p className="text-gray-700 dark:text-gray-300">
                      Expand beyond Stellar to support account activation on other blockchain networks.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-800 p-2 rounded-full mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 dark:text-gray-200">DeFi Integration</h5>
                    <p className="text-gray-700 dark:text-gray-300">
                      Connect with DeFi protocols to offer yield-generating opportunities for sponsorship funds.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-800 p-2 rounded-full mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 dark:text-gray-200">Developer Marketplace</h5>
                    <p className="text-gray-700 dark:text-gray-300">
                      Platform for developers to offer services and tools built on top of the sponsorship network.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-800 p-2 rounded-full mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 dark:text-gray-200">Community Grants</h5>
                    <p className="text-gray-700 dark:text-gray-300">
                      DAO-governed grants program to fund innovations that enhance the sponsorship ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Anti-Abuse Measures</h3>
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-100 dark:bg-red-800 p-2 rounded-full mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 dark:text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 dark:text-gray-200">Decentralized Identity</h5>
                    <p className="text-gray-700 dark:text-gray-300">
                      Self-sovereign identity solutions to prevent duplicate accounts while preserving privacy.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 dark:bg-red-800 p-2 rounded-full mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 dark:text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 dark:text-gray-200">Proof of Personhood</h5>
                    <p className="text-gray-700 dark:text-gray-300">
                      Integration with protocols that verify unique human users without revealing personal data.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 dark:bg-red-800 p-2 rounded-full mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 dark:text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 dark:text-gray-200">Time-locked Rewards</h5>
                    <p className="text-gray-700 dark:text-gray-300">
                      Vesting periods for rewards to discourage short-term exploitation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 dark:bg-red-800 p-2 rounded-full mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 dark:text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 dark:text-gray-200">On-chain Governance</h5>
                    <p className="text-gray-700 dark:text-gray-300">
                      Community voting on suspicious activities and parameter adjustments to combat emerging threats.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Phase KPIs</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-800 mb-3 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-center text-gray-800 dark:text-gray-200">DAO participation rate</h4>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 dark:bg-green-800 mb-3 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-center text-gray-800 dark:text-gray-200">Token distribution metrics</h4>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-100 dark:bg-yellow-800 mb-3 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 dark:text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h4 className="font-bold text-center text-gray-800 dark:text-gray-200">Cross-chain adoption</h4>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-800 mb-3 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold text-center text-gray-800 dark:text-gray-200">Ecosystem developer adoption</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg border border-gray-200 dark:border-gray-600 mt-8">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Long-Term Vision</h3>
        <div className="text-gray-700 dark:text-gray-300 space-y-4">
          <p>
            The ultimate goal of the Stellar Account Activation project is to create a self-sustaining, 
            decentralized ecosystem that removes friction from blockchain onboarding across multiple networks.
          </p>
          <p>
            By transitioning from a centralized service to a community-governed protocol, we ensure the 
            long-term viability of the platform while maintaining alignment with the core values of 
            blockchain technology: decentralization, transparency, and user empowerment.
          </p>
          <p>
            The LAPAT token and DAO structure will enable the community to continuously evolve the platform, 
            adapt to changing market conditions, and expand to new use cases beyond simple account activation.
          </p>
        </div>
      </div>
    </div>
  );
}
