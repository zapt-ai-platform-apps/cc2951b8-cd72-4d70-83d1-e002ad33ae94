import React from 'react';
import MadeOnZAPTBadge from '@/components/MadeOnZAPTBadge';

function CustomerDashboard(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Customer Dashboard</h1>
      </header>
      <main className="flex-grow p-6">
        <p>Welcome to your dashboard. Here you can view your orders, update your profile, and explore exclusive deals.</p>
      </main>
      <footer className="p-4 text-center">
        <MadeOnZAPTBadge />
      </footer>
    </div>
  );
}

export default CustomerDashboard;