import React from 'react';
import { Auth as SupabaseAuth } from '@supabase/auth-ui-react';
import { supabase } from '@/supabaseClient';

function AuthScreen(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 p-4">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold">Sign in with ZAPT</h2>
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Visit ZAPT
        </a>
      </div>
      <div className="w-full max-w-md">
        <SupabaseAuth
          supabaseClient={supabase}
          providers={['google', 'facebook', 'apple']}
          magicLink={true}
          view="magic_link"
          appearance={{ theme: 'default' }}
        />
      </div>
    </div>
  );
}

export default AuthScreen;