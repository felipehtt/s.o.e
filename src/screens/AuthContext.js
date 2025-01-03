import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(() => {

        const token = localStorage.getItem("ADM");
        return !!token;
        
    });

    const login = (token) => {
        localStorage.setItem('ADM', token);
        setIsAuthenticated(true);
        
    };

    const logout = () => {
        localStorage.removeItem('ADM');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {

    return useContext(AuthContext);

};
