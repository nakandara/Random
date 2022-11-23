import { createContext, useState } from "react";
export const userAuthContext = createContext({});

export const UserAuthContextProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const [trueLog, setTrueLog] = useState(false);

    return (
        <userAuthContext.Provider value={{ user, setUser, trueLog, setTrueLog }}>
            {children}
        </userAuthContext.Provider>
    );
}

