import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userAuthContext } from '../context/UserAuthContext'

const ProtectedRoute = ({ children }) => {
  const [isLoginTopba, setIsLoginTopba] = useState(false);
  const contxasync = useContext(userAuthContext);


  let user = JSON.parse(localStorage.getItem("user"));


  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    let selectRoleuser = JSON.parse(localStorage.getItem("user"));
    if (!user && contxasync?.user) {
      user = contxasync.user;
      selectRoleuser = contxasync.user;
      setIsLoginTopba(true)
    }
    if (user) {
      setIsLoginTopba(true)
    }
  }, [contxasync?.user?.token])

  if (!user) {
    return <Navigate to="/login" />
  }
  return <Outlet />;


}

export default ProtectedRoute
