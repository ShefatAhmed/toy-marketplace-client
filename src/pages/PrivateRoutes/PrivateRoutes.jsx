import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="text-center">
            <div className="radial-progress" style={{ "--value": "70", "--size": "5rem", "--thickness": "1rem" }}>70%</div>
        </div>
    }
    if (user) {
        return children;
    }
    else{
        Swal.fire({
            text: 'You have to log in first to view details',
            icon: 'warning',
            confirmButtonText: 'Okay'
        })
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;