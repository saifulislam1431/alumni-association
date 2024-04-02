import React from 'react';
import useAlumni from '../Hooks/useAlumni';
import useAuth from '../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AlumniRoute = ({ children }) => {
    const { isAlumni, isAlumniLoading } = useAlumni()
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    if (loading || isAlumniLoading) {
        return <h1>Loading</h1>
    }
    if (user && isAlumni) {
        return children;
    }
    return navigate("/")
};

export default AlumniRoute;