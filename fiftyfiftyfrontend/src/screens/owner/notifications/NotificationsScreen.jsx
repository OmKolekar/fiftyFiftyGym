import React from 'react';
import { Bell, AlertTriangle, AlertCircle, DollarSign, Calendar } from 'lucide-react';
import { Badge } from '../../../shared/components/Badge/Badge';

export const NotificationsScreen = () => {
  const alerts = [
    {
      id: 1,
      type: 'EXPIRY',
      title: '3 Memberships Expiring in 48 Hours',
      description: 'Rahul Sharma, Sneha Gupta, and Arjun Das have memberships expiring soon.',
      time: '2 hours ago',
      level: 'warning'
    },
    {
      id: 2,
      type: 'DUE',
      title: 'Pending Balance Alert: ₹2,500',
      description: 'Priya Patel has an outstanding partial payment balance for Quarterly Pro plan.',
      time: '5 hours ago',
      level: 'danger'
    },
    {
      id: 3,
      type: 'EXPIRED',
      title: 'Membership Expired: Vikram Singh',
      description: 'Monthly Standard plan expired on 2026-03-24. Membership status updated to inactive.',
      time: 'Yesterday',
      level: 'info'
    }
  ];

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: '1.75rem', marginBottom: 4 }}>Alerts & Notifications</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Automated operational alerts for membership expirations and overdue payments
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {alerts.map((alert) => (
          <div
            key={alert.id}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 16,
              padding: 20,
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)'
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: alert.level === 'warning' ? 'var(--color-warning-bg)' : alert.level === 'danger' ? 'var(--color-danger-bg)' : 'var(--color-info-bg)',
                color: alert.level === 'warning' ? 'var(--color-warning)' : alert.level === 'danger' ? 'var(--color-danger)' : 'var(--color-info)'
              }}
            >
              {alert.level === 'warning' ? <AlertTriangle size={22} /> : alert.level === 'danger' ? <DollarSign size={22} /> : <Calendar size={22} />}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                <h3 style={{ fontSize: '1rem' }}>{alert.title}</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{alert.time}</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{alert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsScreen;
