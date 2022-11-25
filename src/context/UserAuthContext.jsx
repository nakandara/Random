import { createContext, useContext, useEffect, useState } from "react";
export const userAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState({});
  const [trueLog, setTrueLog] = useState(false);


  return (
    <userAuthContext.Provider value={{ user, token, setToken,setUser, trueLog, setTrueLog }}>
      {children}
    </userAuthContext.Provider>
  );
};

export function useUserAuth() {
  return useContext(userAuthContext);
}