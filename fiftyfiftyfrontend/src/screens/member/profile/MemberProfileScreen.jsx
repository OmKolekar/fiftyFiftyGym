import React, { useState } from 'react';
import { User, Phone, Mail, Lock } from 'lucide-react';
import { Input } from '../../../shared/components/Input/Input';
import { Button } from '../../../shared/components/Button/Button';
import { useAuth } from '../../../context/AuthContext';
import { useToast } from '../../../context/ToastContext';

export const MemberProfileScreen = () => {
  const { user } = useAuth();
  const { showToast } = useToast();

  const [fullName, setFullName] = useState(user?.fullName || 'Alex Mercer');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    showToast('Profile information successfully updated', 'success');
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (!currentPassword || !newPassword) {
      showToast('Please provide current and new password', 'warning');
      return;
    }
    showToast('Password successfully changed!', 'success');
    setCurrentPassword('');
    setNewPassword('');
  };

  return (
    <div className="animate-fade-in" style={{ maxWidth: 640 }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: '1.75rem', marginBottom: 4 }}>Account Settings</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Manage your personal details and security</p>
      </div>

      <div style={{ background: 'var(--bg-surface)', padding: 28, borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', marginBottom: 24 }}>
        <h2 style={{ fontSize: '1.15rem', marginBottom: 20 }}>Personal Information</h2>
        <form onSubmit={handleUpdateProfile}>
          <Input
            label="Full Name"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <Input
            label="Phone Number"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <Button type="submit">Save Profile Changes</Button>
        </form>
      </div>

      <div style={{ background: 'var(--bg-surface)', padding: 28, borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
        <h2 style={{ fontSize: '1.15rem', marginBottom: 20 }}>Change Password</h2>
        <form onSubmit={handleChangePassword}>
          <Input
            label="Current Password"
            name="currentPassword"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <Input
            label="New Password"
            name="newPassword"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Button type="submit" variant="secondary">Update Password</Button>
        </form>
      </div>
    </div>
  );
};

export default MemberProfileScreen;
