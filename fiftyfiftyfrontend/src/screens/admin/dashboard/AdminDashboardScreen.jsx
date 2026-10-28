import React from 'react';
import { Building2, Users, CheckCircle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StatCard } from '../../../shared/components/StatCard/StatCard';
import { Table } from '../../../shared/components/Table/Table';
import { Badge } from '../../../shared/components/Badge/Badge';
import { formatDate } from '../../../shared/utils/formatters';

export const AdminDashboardScreen = () => {
  const stats = {
    totalGyms: 28,
    activeGyms: 25,
    inactiveGyms: 3,
    totalPlatformMembers: 4120,
    newGymsThisMonth: 6
  };

  const newRegistrations = [
    { id: 'GYM-101', name: 'Spartan Strength Lab', owner: 'Vikram Malhotra', email: 'spartan@fit.in', phone: '+91 98111 00011', registeredOn: '2026-03-22', status: 'pending' },
    { id: 'GYM-102', name: 'Pulse CrossFit Arena', owner: 'Neha Joshi', email: 'pulse@gym.com', phone: '+91 98222 00022', registeredOn: '2026-03-21', status: 'active' },
    { id: 'GYM-103', name: 'Iron & Grace Fitness', owner: 'Dev Patel', email: 'iron@grace.in', phone: '+91 98333 00033', registeredOn: '2026-03-19', status: 'active' }
  ];

  const columns = [
    { header: 'Gym ID', key: 'id' },
    {
      header: 'Gym Name',
      key: 'name',
      render: (g) => <span style={{ fontWeight: 600 }}>{g.name}</span>
    },
    { header: 'Owner', key: 'owner' },
    { header: 'Contact', key: 'email' },
    {
      header: 'Registered On',
      key: 'registeredOn',
      render: (g) => formatDate(g.registeredOn)
    },
    {
      header: 'Status',
      key: 'status',
      render: (g) => <Badge status={g.status} />
    },
    {
      header: 'Action',
      key: 'action',
      render: (g) => (
        <button className="btn btn-secondary btn-sm">Review & Approve</button>
      )
    }
  ];

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: '1.75rem', marginBottom: 4 }}>Platform Super Admin Dashboard</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          System-wide metrics and gym-owner account management
        </p>
      </div>

      <div className="admin-stats-grid">
        <StatCard
          title="Total Registered Gyms"
          value={stats.totalGyms}
          subtitle={`${stats.activeGyms} Active • ${stats.inactiveGyms} Inactive/Pending`}
          icon={Building2}
        />
        <StatCard
          title="Active Gym Accounts"
          value={stats.activeGyms}
          subtitle="Operational tenant instances"
          icon={CheckCircle}
        />
        <StatCard
          title="Total Platform Members"
          value={stats.totalPlatformMembers.toLocaleString()}
          subtitle="Members across all gyms"
          icon={Users}
        />
        <StatCard
          title="New Gyms This Month"
          value={`+${stats.newGymsThisMonth}`}
          subtitle="Onboarded recently"
          icon={Clock}
        />
      </div>

      <div style={{ background: 'var(--bg-surface)', padding: 24, borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2 style={{ fontSize: '1.15rem' }}>Recent Gym Registrations</h2>
          <Link to="/admin/gyms" style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 4 }}>
            Manage All Gyms <ArrowRight size={14} />
          </Link>
        </div>
        <Table columns={columns} data={newRegistrations} />
      </div>
    </div>
  );
};

export default AdminDashboardScreen;
