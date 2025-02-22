import React, { useContext } from 'react';
import { AuthContext } from './context/AuthProvider';
import MadeOnZAPTBadge from './components/MadeOnZAPTBadge';

function App(): JSX.Element {
  const authContext = useContext(AuthContext);
  const user = authContext ? authContext.user : null;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white shadow-lg">
        <h1 className="text-5xl font-extrabold mb-2 text-center animate-pulse">MotoConnect</h1>
        <p className="text-xl text-center">Connecting Motorcycle Riders with Local Shops</p>
      </header>
      <main className="flex-grow bg-gray-50 p-6 flex flex-col items-center justify-center">
        {!user ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Welcome to MotoConnect</h2>
            <p className="mb-6 text-lg">
              Discover exclusive deals from your favorite local shops and get your motorcycle delivery on the move!
            </p>
            <button
              onClick={() => window.location.href = '/auth'}
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-300"
            >
              Get Started
            </button>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-white rounded shadow hover:shadow-lg transition">
                <img src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxMHx8dmlicmFudCUyMHNob3AlMjBpbnRlcmlvciUyMHdpdGglMjBtb2Rlcm4lMjBkZXNpZ258ZW58MHx8fHwxNzQwMjUyMTMwfDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Shop Promotion"
                  data-image-request="vibrant shop interior with modern design"
                  className="w-full h-40 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-bold">Exclusive Shop Deals</h3>
                <p className="text-gray-700">Find the best offers around you.</p>
              </div>
              <div className="p-4 bg-white rounded shadow hover:shadow-lg transition">
                <img src="https://images.unsplash.com/photo-1558979159-2b18a4070a87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw1fHxkeW5hbWljJTIwbW90b3JjeWNsZSUyMHJpZGVyJTIwb24lMjB0aGUlMjBtb3ZlfGVufDB8fHx8MTc0MDI1MjEzMHww&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Rider Promo"
                  data-image-request="dynamic motorcycle rider on the move"
                  className="w-full h-40 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-bold">For Riders</h3>
                <p className="text-gray-700">Join our network and earn on every delivery.</p>
              </div>
              <div className="p-4 bg-white rounded shadow hover:shadow-lg transition">
                <img src="https://images.unsplash.com/photo-1512591290618-904e04936827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw4fHxkZWxpdmVyeSUyMG1vdG9yY3ljbGUlMjB3aXRoJTIwcGFja2FnZXMlMjBpbiUyMHVyYmFuJTIwc2V0dGluZ3xlbnwwfHx8fDE3NDAyNTIxMzF8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Delivery Service"
                  data-image-request="delivery motorcycle with packages in urban setting"
                  className="w-full h-40 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-bold">Fast Delivery</h3>
                <p className="text-gray-700">Experience speedy service every time.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
            <p className="mb-6 text-lg">Navigate to your dashboard to view your personalized content.</p>
            <div className="flex space-x-4 justify-center">
              <a href="/customer-dashboard" className="cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
                Customer Dashboard
              </a>
              <a href="/rider-dashboard" className="cursor-pointer bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
                Rider Dashboard
              </a>
              <a href="/shop-dashboard" className="cursor-pointer bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
                Shop Dashboard
              </a>
            </div>
          </div>
        )}
      </main>
      <footer className="p-4 bg-gray-200 text-center">
        <MadeOnZAPTBadge />
      </footer>
    </div>
  );
}

export default App;