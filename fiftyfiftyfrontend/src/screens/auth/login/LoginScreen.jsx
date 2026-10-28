import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { useToast } from '../../../context/ToastContext';
import { Button } from '../../../shared/components/Button/Button';
import { Input } from '../../../shared/components/Input/Input';

export const LoginScreen = () => {
  const [selectedRole, setSelectedRole] = useState('GYM_OWNER');
  const [email, setEmail] = useState('owner@fiftyfifty.com');
  const [password, setPassword] = useState('password123');
  const { login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const detectRoleFromEmail = (emailStr) => {
    const lower = (emailStr || '').toLowerCase();
    if (lower.includes('admin')) return 'PLATFORM_ADMIN';
    if (lower.includes('member')) return 'MEMBER';
    return 'GYM_OWNER';
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    if (role === 'PLATFORM_ADMIN') {
      setEmail('admin@fiftyfifty.com');
    } else if (role === 'GYM_OWNER') {
      setEmail('owner@fiftyfifty.com');
    } else {
      setEmail('member@fiftyfifty.com');
    }
  };

  const handleEmailChange = (val) => {
    setEmail(val);
    const autoRole = detectRoleFromEmail(val);
    setSelectedRole(autoRole);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Determine role by email pattern or active tab
    const effectiveRole = detectRoleFromEmail(email) || selectedRole;

    const mockUser = {
      id: 'usr_' + Date.now(),
      email,
      role: effectiveRole,
      fullName: effectiveRole === 'PLATFORM_ADMIN' ? 'Platform Tech Admin' : effectiveRole === 'GYM_OWNER' ? 'Om Gym Owner' : 'Alex Mercer',
      gymId: effectiveRole === 'PLATFORM_ADMIN' ? null : 'gym_alpha_1',
      gymName: 'FiftyFifty Downtown Fitness'
    };

    login(mockUser, 'mock_jwt_token_' + Date.now());
    showToast(`Welcome back, ${mockUser.fullName}! (${effectiveRole})`, 'success');

    if (effectiveRole === 'PLATFORM_ADMIN') navigate('/admin/dashboard');
    else if (effectiveRole === 'GYM_OWNER') navigate('/owner/dashboard');
    else navigate('/member/dashboard');
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="login-role-tabs">
        <button
          type="button"
          className={`login-tab-btn ${selectedRole === 'GYM_OWNER' ? 'active' : ''}`}
          onClick={() => handleRoleSelect('GYM_OWNER')}
        >
          Gym Owner
        </button>
        <button
          type="button"
          className={`login-tab-btn ${selectedRole === 'PLATFORM_ADMIN' ? 'active' : ''}`}
          onClick={() => handleRoleSelect('PLATFORM_ADMIN')}
        >
          Admin
        </button>
        <button
          type="button"
          className={`login-tab-btn ${selectedRole === 'MEMBER' ? 'active' : ''}`}
          onClick={() => handleRoleSelect('MEMBER')}
        >
          Member
        </button>
      </div>

      <Input
        label="Email Address"
        name="email"
        type="email"
        value={email}
        onChange={(e) => handleEmailChange(e.target.value)}
        required
      />

      <Input
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <div style={{
        background: 'var(--bg-surface-elevated)',
        padding: '10px 14px',
        borderRadius: 'var(--radius-md)',
        marginBottom: 16,
        fontSize: '0.85rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid var(--border-subtle)'
      }}>
        <span style={{ color: 'var(--text-secondary)' }}>Target Portal:</span>
        <span style={{
          fontWeight: 700,
          color: selectedRole === 'PLATFORM_ADMIN' ? 'var(--brand-secondary)' : selectedRole === 'GYM_OWNER' ? 'var(--brand-primary)' : 'var(--brand-accent)'
        }}>
          {selectedRole === 'PLATFORM_ADMIN' ? '🛡️ Super Admin Portal' : selectedRole === 'GYM_OWNER' ? '🏋️ Gym Owner Portal' : '👤 Member Portal'}
        </span>
      </div>

      <Button type="submit" className="w-full" style={{ marginTop: 4 }}>
        Sign In to Portal
      </Button>

      <div className="login-form-footer">
        <span>Protected by FiftyFifty Enterprise RBAC</span>
      </div>
    </form>
  );
};

export default LoginScreen;
