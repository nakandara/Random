import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { userAuthContext } from '../context/UserAuthContext'

const ProtectedRoute = ({ children }) => {

    const { user, setUser } = useContext(userAuthContext);


    useEffect(() => {
        const role = localStorage.getItem('user')
        console.log(role);
        setUser(role)
    }, [user]);

  
    return (
        <div>
           
        </div>
    );
}

export default ProtectedRoute
