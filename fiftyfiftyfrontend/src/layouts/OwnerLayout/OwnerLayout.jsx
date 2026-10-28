import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  CreditCard,
  CalendarCheck,
  Receipt,
  Bell,
  LogOut,
  Dumbbell
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const OwnerLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinks = [
    { to: '/owner/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/owner/members', label: 'Members', icon: Users },
    { to: '/owner/plans', label: 'Membership Plans', icon: CreditCard },
    { to: '/owner/attendance', label: 'Attendance', icon: CalendarCheck },
    { to: '/owner/payments', label: 'Payments', icon: Receipt },
    { to: '/owner/notifications', label: 'Notifications', icon: Bell }
  ];

  return (
    <div className="app-layout-wrapper">
      <aside className="app-sidebar">
        <div className="sidebar-brand">
          <Dumbbell size={24} color="var(--brand-primary)" />
          <span><span className="brand-highlight">FIFTY</span>FIFTY</span>
        </div>

        <nav className="sidebar-nav">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <button
            onClick={handleLogout}
            className="nav-item w-full"
            style={{ color: 'var(--color-danger)' }}
          >
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      <div className="app-main-viewport">
        <header className="app-topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Gym:</span>
            <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
              {user?.gymName || 'FiftyFifty Gym'}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{user?.fullName || 'Gym Owner'}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Gym Manager</div>
            </div>
          </div>
        </header>

        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default OwnerLayout;
