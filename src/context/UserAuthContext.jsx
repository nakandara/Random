import { createContext, useContext, useEffect, useState } from "react";
export const userAuthContext = createContext();

export const UserAuthContextProvider = (props) => {
  const [user, setUser] = useState("");
  const [trueLog, setTrueLog] = useState(false);

  return (
    <userAuthContext.Provider value={{ user, setUser, trueLog, setTrueLog }}>
      {props.children}
    </userAuthContext.Provider>
  );
};
