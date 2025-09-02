import React from 'react';

export default function MetricsSection() {
  return (
    <div className="mt-16 animate-fadeIn" style={{animationDelay: '0.6s'}}>
      <h2 className="text-2xl font-bold text-center mb-8">Real-Time Impact Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg text-center animate-slideInUp hover:shadow-xl transition-all" style={{animationDelay: '0.7s'}}>
          <div className="text-3xl font-bold mb-1 animate-pulse-slow">10,000+</div>
          <div className="text-sm uppercase tracking-wider">Total Activations</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg text-center animate-slideInUp hover:shadow-xl transition-all" style={{animationDelay: '0.8s'}}>
          <div className="text-3xl font-bold mb-1 animate-pulse-slow">15+</div>
          <div className="text-sm uppercase tracking-wider">Active Sponsors</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg text-center animate-slideInUp hover:shadow-xl transition-all" style={{animationDelay: '0.9s'}}>
          <div className="text-3xl font-bold mb-1 animate-pulse-slow">$0.40</div>
          <div className="text-sm uppercase tracking-wider">Avg Cost/Activation</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg text-center animate-slideInUp hover:shadow-xl transition-all" style={{animationDelay: '1s'}}>
          <div className="text-3xl font-bold mb-1 animate-pulse-slow">10,000 XLM</div>
          <div className="text-sm uppercase tracking-wider">Total Contributed</div>
        </div>
      </div>
    </div>
  );
}
