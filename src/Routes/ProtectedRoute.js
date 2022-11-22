import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { userAuthContext } from '../context/UserAuthContext'

const ProtectedRoute = ({ children }) => {

    const { user, setUser } = useContext(userAuthContext);

    if (!user) {
        return <Navigate to="/" />
    }
    return children;


}

export default ProtectedRoute
