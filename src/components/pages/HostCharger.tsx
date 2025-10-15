import React from 'react';
import Providers from '@/components/Providers';

export const HostCharger: React.FC = () => {
  const navigateHome = () => {
    window.location.href = '/';
  };

  return (
    <Providers>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-primary text-primary-foreground py-12 relative">
          <div className="container mx-auto px-6">
            <button
              onClick={navigateHome}
              className="absolute left-6 top-6 text-white hover:bg-white/20 px-4 py-2 rounded"
            >
              ← Back to Home
            </button>
            <div className="flex items-center justify-center mb-4">
              <h1 className="text-4xl font-bold">Host EV Chargers</h1>
            </div>
            <p className="text-center text-xl opacity-90">
              Transform your property into a revenue-generating EV charging destination
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Become a Charging Host</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Zero-cost installation, maintenance included, and revenue sharing.
            </p>
            <p className="text-muted-foreground">
              This page is currently being converted to Astro. The full host charger 
              functionality from the original React Router version will be restored shortly.
            </p>
          </div>
        </div>
      </div>
    </Providers>
  );
};

export default HostCharger;