import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const RoleRoute = ({ allowedRoles = [] }) => {
  const { role, isLoading } = useAuth();

  if (isLoading) return null;

  if (!allowedRoles.includes(role)) {
    // Redirect to their respective home dashboard based on role
    if (role === 'PLATFORM_ADMIN') return <Navigate to="/admin/dashboard" replace />;
    if (role === 'GYM_OWNER') return <Navigate to="/owner/dashboard" replace />;
    if (role === 'MEMBER') return <Navigate to="/member/dashboard" replace />;
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default RoleRoute;
