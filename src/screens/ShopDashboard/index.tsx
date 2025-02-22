import React from 'react';
import MadeOnZAPTBadge from '@/components/MadeOnZAPTBadge';

function ShopDashboard(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-red-600 p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Shop Dashboard</h1>
      </header>
      <main className="flex-grow p-6">
        <p>Welcome to your dashboard. Manage your shop profile, update product availability, and review orders.</p>
      </main>
      <footer className="p-4 text-center">
        <MadeOnZAPTBadge />
      </footer>
    </div>
  );
}

export default ShopDashboard;