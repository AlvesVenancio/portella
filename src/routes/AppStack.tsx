import React, { useContext } from "react";



import { AuthContext } from "../contexts/AuthContext";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";

const AppStack = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? <AuthRoutes/> : <AppRoutes/>
  
}

export default AppStack;