import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ConditionalLink = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        const destination = isAuthenticated ? '/dashboard' : '/login';
        navigate(destination);
    };

    return (
        <a href="#" onClick={handleClick}>
            {children}
        </a>
    );
};

export default ConditionalLink;