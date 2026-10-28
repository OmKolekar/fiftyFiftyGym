import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import RoleRoute from './RoleRoute';

// Layouts
import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import OwnerLayout from '../layouts/OwnerLayout/OwnerLayout';
import MemberLayout from '../layouts/MemberLayout/MemberLayout';

// Screens
import LoginScreen from '../screens/auth/login/LoginScreen';
import AdminDashboardScreen from '../screens/admin/dashboard/AdminDashboardScreen';
import GymManagementScreen from '../screens/admin/gym-management/GymManagementScreen';
import OwnerDashboardScreen from '../screens/owner/dashboard/OwnerDashboardScreen';
import MemberManagementScreen from '../screens/owner/members/MemberManagementScreen';
import PlanManagementScreen from '../screens/owner/plans/PlanManagementScreen';
import AttendanceScreen from '../screens/owner/attendance/AttendanceScreen';
import PaymentManagementScreen from '../screens/owner/payments/PaymentManagementScreen';
import NotificationsScreen from '../screens/owner/notifications/NotificationsScreen';
import MemberDashboardScreen from '../screens/member/dashboard/MemberDashboardScreen';
import MemberAttendanceHistoryScreen from '../screens/member/attendance-history/MemberAttendanceHistoryScreen';
import MemberPaymentHistoryScreen from '../screens/member/payment-history/MemberPaymentHistoryScreen';
import MemberProfileScreen from '../screens/member/profile/MemberProfileScreen';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginScreen />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        {/* 1. Platform Admin Routes */}
        <Route element={<RoleRoute allowedRoles={['PLATFORM_ADMIN']} />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="/admin/dashboard" element={<AdminDashboardScreen />} />
            <Route path="/admin/gyms" element={<GymManagementScreen />} />
            <Route path="/admin/access" element={<AdminDashboardScreen />} />
          </Route>
        </Route>

        {/* 2. Gym Owner Routes */}
        <Route element={<RoleRoute allowedRoles={['GYM_OWNER']} />}>
          <Route element={<OwnerLayout />}>
            <Route path="/owner" element={<Navigate to="/owner/dashboard" replace />} />
            <Route path="/owner/dashboard" element={<OwnerDashboardScreen />} />
            <Route path="/owner/members" element={<MemberManagementScreen />} />
            <Route path="/owner/plans" element={<PlanManagementScreen />} />
            <Route path="/owner/attendance" element={<AttendanceScreen />} />
            <Route path="/owner/payments" element={<PaymentManagementScreen />} />
            <Route path="/owner/notifications" element={<NotificationsScreen />} />
          </Route>
        </Route>

        {/* 3. Gym Member Portal Routes */}
        <Route element={<RoleRoute allowedRoles={['MEMBER']} />}>
          <Route element={<MemberLayout />}>
            <Route path="/member" element={<Navigate to="/member/dashboard" replace />} />
            <Route path="/member/dashboard" element={<MemberDashboardScreen />} />
            <Route path="/member/attendance" element={<MemberAttendanceHistoryScreen />} />
            <Route path="/member/payments" element={<MemberPaymentHistoryScreen />} />
            <Route path="/member/profile" element={<MemberProfileScreen />} />
          </Route>
        </Route>
      </Route>

      {/* Fallback to Login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
