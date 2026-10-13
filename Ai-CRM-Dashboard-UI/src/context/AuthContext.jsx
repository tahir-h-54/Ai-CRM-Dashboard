import React from 'react'
import {createContext, useContext, useState, useEffect, useCallback} from 'react';

const AuthContext = createContext(null);

export function AuthProvider({children}){
  const [user,setUser] =useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const token = localStorage.getItem(TOKEN_KEY);
    if(!token) {
      setLoading(false);
      return;
    }
    authApi.me().then((res) =>setUser(res.user)).catch(()=>localStorage.removeItem(TOKEN_KEY)).finally(()=>setLoading(false));
  },[]);

  const persist = (res) => {
    localStorage.setItem(TOKEN_KEY,res.token);
    setUser(res.user);
    return res.user;
  };

  const login = useCallback(async (credentials) =>{
    const res = await authApi.login(credentials);
    return persist(res);
  },[]);

  const register =useCallback(async (data) =>{
    const res = await authApi.register(data);
    return persist(res);
  },[]);

  const logout = useCallback(()=>{
    localStorage.removeItem(TOKEN_KEY);
    setUser(null);
  },[]);

  const updateUser = useCallback((patch)=>{
    setUser((prev) => ({...prev, ...patch}));
  },[]);

  return(
    <AuthContext.Provider value={{ user, loading, login, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(){
  const ctx = useCallback(AuthContext);
  if(!ctx) throw new Error("useAuth must be used within as AuthProvider")
    return ctx;
}