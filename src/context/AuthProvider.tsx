import React, { createContext } from 'react';

interface AuthContextProps {
  user: any;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const authData = { user: null }; // Replace with real authentication logic if needed

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;