import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const loadUser = async () => {
      try {
        const stored = await AsyncStorage.getItem("user");
        if (stored) setUser(JSON.parse(stored));
      } catch (err) {
        console.error("Erro ao carregar usuário:", err);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

 
  const login = async (email, password) => {
    try {
      const stored = await AsyncStorage.getItem("user");
      if (!stored) throw new Error("Nenhum usuário cadastrado.");

      const parsed = JSON.parse(stored);
      if (parsed.email === email && parsed.password === password) {
        setUser(parsed);
        return true;
      } else {
        throw new Error("Email ou senha incorretos.");
      }
    } catch (err) {
      console.error("Erro no login:", err);
      throw err;
    }
  };

 
  const logout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      setUser(null);
      setLoading(false); 
    } catch (err) {
      console.error("Erro ao deslogar:", err);
      setLoading(false);
    }
  };

 
  const register = async (data) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(data));
      setUser(data);
    } catch (err) {
      console.error("Erro ao cadastrar:", err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        register,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
