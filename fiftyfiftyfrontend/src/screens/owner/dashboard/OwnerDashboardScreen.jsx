import React from 'react';
import { Users, CalendarCheck, IndianRupee, Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StatCard } from '../../../shared/components/StatCard/StatCard';
import { Badge } from '../../../shared/components/Badge/Badge';
import { formatCurrency } from '../../../shared/utils/formatters';

export const OwnerDashboardScreen = () => {
  // Initial dummy metric state for Phase 1 view
  const stats = {
    totalMembers: 148,
    activeMembers: 132,
    expiredMembers: 16,
    todayAttendance: 42,
    monthlyCollections: 185000,
    expiringSoonCount: 5
  };

  const recentCheckIns = [
    { id: 1, name: 'Rahul Sharma', time: '18:45', plan: 'Quarterly Pro', status: 'active' },
    { id: 2, name: 'Ananya Roy', time: '18:32', plan: 'Annual Gold', status: 'active' },
    { id: 3, name: 'Vikram Singh', time: '17:50', plan: 'Monthly Standard', status: 'active' },
    { id: 4, name: 'Priya Patel', time: '17:15', plan: 'Annual Gold', status: 'active' }
  ];

  const expiringMemberships = [
    { id: 101, name: 'Karan Mehra', daysLeft: 2, plan: 'Monthly Standard', phone: '+91 98765 43210' },
    { id: 102, name: 'Sneha Gupta', daysLeft: 4, plan: 'Quarterly Pro', phone: '+91 98123 45678' },
    { id: 103, name: 'Arjun Das', daysLeft: 5, plan: 'Monthly Standard', phone: '+91 98989 12345' }
  ];

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', marginBottom: 4 }}>Gym Dashboard</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Welcome to your operations command center</p>
        </div>
        <Link to="/owner/attendance" className="btn btn-primary">
          <CalendarCheck size={18} />
          <span>Mark Attendance</span>
        </Link>
      </div>

      <div className="owner-dashboard-grid">
        <StatCard
          title="Total Registered Members"
          value={stats.totalMembers}
          subtitle={`${stats.activeMembers} Active • ${stats.expiredMembers} Expired`}
          icon={Users}
        />
        <StatCard
          title="Today's Attendance"
          value={stats.todayAttendance}
          subtitle="Check-ins recorded today"
          icon={CalendarCheck}
        />
        <StatCard
          title="Monthly Collections"
          value={formatCurrency(stats.monthlyCollections)}
          subtitle="Collected this calendar month"
          icon={IndianRupee}
        />
        <StatCard
          title="Expiring Within 7 Days"
          value={stats.expiringSoonCount}
          subtitle="Members need renewal follow-up"
          icon={AlertTriangle}
        />
      </div>

      <div className="owner-dashboard-sections">
        {/* Today's Check-ins */}
        <div className="dashboard-panel">
          <div className="dashboard-panel-header">
            <h2 className="dashboard-panel-title">Today's Recent Check-ins</h2>
            <Link to="/owner/attendance" style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: 4 }}>
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {recentCheckIns.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  background: 'var(--bg-surface-elevated)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div>
                  <div style={{ fontWeight: 600 }}>{item.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.plan}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.time}</span>
                  <Badge status={item.status} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Expirations */}
        <div className="dashboard-panel">
          <div className="dashboard-panel-header">
            <h2 className="dashboard-panel-title">Upcoming Expirations</h2>
            <Link to="/owner/notifications" style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: 4 }}>
              Alerts <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {expiringMemberships.map((item) => (
              <div
                key={item.id}
                style={{
                  padding: '14px',
                  background: 'var(--bg-surface-elevated)',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: '4px solid var(--color-warning)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontWeight: 600 }}>{item.name}</span>
                  <Badge status="pending">{item.daysLeft} days left</Badge>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {item.plan} • {item.phone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboardScreen;
