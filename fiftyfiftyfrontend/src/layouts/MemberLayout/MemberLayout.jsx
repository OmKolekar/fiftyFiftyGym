import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { User, CalendarCheck, Receipt, LogOut, Dumbbell } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const MemberLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinks = [
    { to: '/member/dashboard', label: 'My Membership', icon: User },
    { to: '/member/attendance', label: 'Attendance', icon: CalendarCheck },
    { to: '/member/payments', label: 'Receipts & Payments', icon: Receipt },
    { to: '/member/profile', label: 'Profile', icon: User }
  ];

  return (
    <div className="member-layout-wrapper">
      <header className="member-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Dumbbell size={24} color="var(--brand-primary)" />
          <span style={{ fontWeight: 800, fontFamily: 'var(--font-display)' }}>
            FIFTY<span style={{ color: 'var(--brand-primary)' }}>FIFTY</span> MEMBER
          </span>
        </div>

        <nav style={{ display: 'flex', gap: 16 }}>
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <button onClick={handleLogout} className="btn btn-secondary btn-sm">
          <LogOut size={16} />
          <span>Exit</span>
        </button>
      </header>

      <main className="member-content">
        <Outlet />
      </main>
    </div>
  );
};

export default MemberLayout;
