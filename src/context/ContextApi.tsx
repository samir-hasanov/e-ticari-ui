import React, { useContext, createContext, useState } from "react";

export interface IProps {
  children: React.ReactElement;
}

export interface MyContextData {
  token: string;
  setToken: (newToken: string) => void;
}

const MyContext = createContext<MyContextData | undefined>(undefined);

export function useContextFunction() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
}

const ContextApi: React.FC<IProps> = ({ children }) => {
  const [token, setToken] = useState("");

  const contextValue: MyContextData = {
    token,
    setToken,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default ContextApi;
