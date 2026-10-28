import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Building2, Shield, LogOut, Dumbbell } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AdminLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinks = [
    { to: '/admin/dashboard', label: 'Overview', icon: LayoutDashboard },
    { to: '/admin/gyms', label: 'Gym Accounts', icon: Building2 },
    { to: '/admin/access', label: 'Access Control', icon: Shield }
  ];

  return (
    <div className="app-layout-wrapper">
      <aside className="app-sidebar">
        <div className="sidebar-brand">
          <Dumbbell size={24} color="var(--brand-secondary)" />
          <span><span style={{ color: 'var(--brand-secondary)' }}>ADMIN</span>PORTAL</span>
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
          <span className="admin-badge">Platform Super Admin</span>
          <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{user?.email || 'admin@fiftyfifty.com'}</div>
        </header>

        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
