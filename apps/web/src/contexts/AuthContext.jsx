import React, { createContext, useContext, useEffect, useState } from 'react';
import pb from '@/lib/pocketbaseClient';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(pb.authStore.record);

  useEffect(() => {
    const unsub = pb.authStore.onChange((_t, record) => setUser(record));
    return unsub;
  }, []);

  const login = (email, password) =>
    pb.collection('users').authWithPassword(email, password);

  const signup = async (email, password, name) => {
    await pb.collection('users').create({ email, password, passwordConfirm: password, name });
    return pb.collection('users').authWithPassword(email, password);
  };

  const logout = () => pb.authStore.clear();

  return (
    <AuthContext.Provider value={{ user, isAuthed: pb.authStore.isValid, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
