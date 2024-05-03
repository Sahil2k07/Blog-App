import React, { createContext, useState } from "react";

interface UserData {
  name: string | undefined;
  email: string | undefined;
  otp: string | undefined;
  password: string | undefined;
}

interface ContextProps {
  children: React.ReactNode;
}

export interface AuthContextType {
  userData: UserData;
  setUserData: (data: UserData) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: ContextProps) => {
  const [userData, setUserData] = useState<UserData>({
    name: undefined,
    email: undefined,
    otp: undefined,
    password: undefined,
  });

  const state = {
    userData,
    setUserData,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
