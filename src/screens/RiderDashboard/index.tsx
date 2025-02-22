import React from 'react';
import MadeOnZAPTBadge from '@/components/MadeOnZAPTBadge';

function RiderDashboard(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-yellow-600 p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Rider Dashboard</h1>
      </header>
      <main className="flex-grow p-6">
        <p>Welcome to your dashboard. Track your deliveries, update your location, and manage your rides.</p>
      </main>
      <footer className="p-4 text-center">
        <MadeOnZAPTBadge />
      </footer>
    </div>
  );
}

export default RiderDashboard;