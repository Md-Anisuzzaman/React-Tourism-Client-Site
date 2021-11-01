import React, { useContext } from 'react';
import { AuthContext } from "../Context-Api/AuthProvider"

const useAuth = () => {

    return useContext(AuthContext)
};

export default useAuth;