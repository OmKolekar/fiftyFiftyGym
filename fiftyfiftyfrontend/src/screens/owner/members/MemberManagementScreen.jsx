import React, { useState } from 'react';
import { UserPlus, Search, Filter } from 'lucide-react';
import { Button } from '../../../shared/components/Button/Button';
import { Table } from '../../../shared/components/Table/Table';
import { Badge } from '../../../shared/components/Badge/Badge';
import { formatDate } from '../../../shared/utils/formatters';

export const MemberManagementScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const members = [
    { id: 'MEM001', name: 'Rahul Sharma', phone: '+91 98765 43210', plan: 'Quarterly Pro', joinDate: '2026-01-15', status: 'active' },
    { id: 'MEM002', name: 'Ananya Roy', phone: '+91 98111 22334', plan: 'Annual Gold', joinDate: '2025-11-01', status: 'active' },
    { id: 'MEM003', name: 'Vikram Singh', phone: '+91 98333 44556', plan: 'Monthly Standard', joinDate: '2026-02-10', status: 'expired' },
    { id: 'MEM004', name: 'Priya Patel', phone: '+91 98444 55667', plan: 'Annual Gold', joinDate: '2025-08-20', status: 'active' },
    { id: 'MEM005', name: 'Karan Mehra', phone: '+91 98555 66778', plan: 'Monthly Standard', joinDate: '2026-03-01', status: 'active' }
  ];

  const columns = [
    { header: 'Member ID', key: 'id' },
    {
      header: 'Member Name',
      key: 'name',
      render: (m) => <span style={{ fontWeight: 600 }}>{m.name}</span>
    },
    { header: 'Phone Number', key: 'phone' },
    { header: 'Current Plan', key: 'plan' },
    {
      header: 'Joining Date',
      key: 'joinDate',
      render: (m) => formatDate(m.joinDate)
    },
    {
      header: 'Status',
      key: 'status',
      render: (m) => <Badge status={m.status} />
    },
    {
      header: 'Actions',
      key: 'actions',
      render: (m) => (
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-secondary btn-sm">Profile</button>
          <button className="btn btn-secondary btn-sm">Renew</button>
        </div>
      )
    }
  ];

  const filteredMembers = members.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.phone.includes(searchTerm)
  );

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', marginBottom: 4 }}>Member Management</h1>
          <p style={{ color: 'var(--text-secondary)' }}>View, add, search, and manage your gym's member base</p>
        </div>
        <Button>
          <UserPlus size={18} />
          <span>Add New Member</span>
        </Button>
      </div>

      <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <input
            type="text"
            className="input-control"
            placeholder="Search member by name or phone number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="btn btn-secondary">
          <Filter size={18} />
          <span>Filter</span>
        </button>
      </div>

      <Table columns={columns} data={filteredMembers} />
    </div>
  );
};

export default MemberManagementScreen;
