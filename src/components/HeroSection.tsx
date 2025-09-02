import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  sponsorName: string;
  onTabChange: (tab: string) => void;
}

export default function HeroSection({ sponsorName, onTabChange }: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden bg-blue-600 dark:bg-blue-800">
      {/* Navigation Bar */}
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-white font-bold text-xl hover:text-blue-200 transition-colors animate-fadeIn">
                Lapat
              </Link>
            </div>
            <nav className="flex space-x-6 animate-fadeIn">
              <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/roadmap" className="text-blue-100 hover:text-white transition-colors">
                Roadmap
              </Link>
            </nav>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 opacity-20">
        <Image 
          src="/globe.svg" 
          alt="Background pattern" 
          fill 
          className="object-cover opacity-10"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight animate-fadeIn">
            <span className="block">Unlock the Stellar Network</span>
            <span className="block text-blue-200">Zero Friction Account Activation</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-blue-100 sm:text-xl md:mt-5 md:max-w-3xl animate-fadeIn" style={{animationDelay: '0.2s'}}>
            Bridging sponsors and developers to eliminate the #1 onboarding barrier in the Stellar ecosystem.
            <span className="block mt-2 font-semibold">Proudly sponsored by {sponsorName}</span>
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-col sm:flex-row animate-slideInUp" style={{animationDelay: '0.4s'}}>
            <button 
              onClick={() => onTabChange("developers")} 
              className="rounded-md bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all hover:scale-105"
            >
              For Developers
            </button>
            <button 
              onClick={() => onTabChange("sponsors")} 
              className="rounded-md bg-blue-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all hover:scale-105"
            >
              Become a Sponsor
            </button>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#f9fafb" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}
