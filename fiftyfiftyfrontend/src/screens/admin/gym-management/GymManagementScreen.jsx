import React, { useState } from 'react';
import { Building2, Plus, KeyRound, Check, XCircle, Search } from 'lucide-react';
import { Button } from '../../../shared/components/Button/Button';
import { Table } from '../../../shared/components/Table/Table';
import { Badge } from '../../../shared/components/Badge/Badge';
import { useToast } from '../../../context/ToastContext';

export const GymManagementScreen = () => {
  const { showToast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');

  const [gyms, setGyms] = useState([
    { id: 'GYM-001', name: 'FiftyFifty Downtown Fitness', owner: 'Om Kolekar', email: 'owner@fiftyfifty.com', phone: '+91 98765 00001', members: 148, status: 'active' },
    { id: 'GYM-002', name: 'Spartan Strength Lab', owner: 'Vikram Malhotra', email: 'spartan@fit.in', phone: '+91 98111 00011', members: 84, status: 'pending' },
    { id: 'GYM-003', name: 'Pulse CrossFit Arena', owner: 'Neha Joshi', email: 'pulse@gym.com', phone: '+91 98222 00022', members: 210, status: 'active' },
    { id: 'GYM-004', name: 'Titan Barbell Club', owner: 'Suresh Raina', email: 'titan@barbell.in', phone: '+91 98444 00044', members: 42, status: 'inactive' }
  ]);

  const toggleGymStatus = (gymId) => {
    setGyms((prev) =>
      prev.map((g) => {
        if (g.id === gymId) {
          const nextStatus = g.status === 'active' ? 'inactive' : 'active';
          showToast(`Gym ${g.name} status updated to ${nextStatus}`, 'info');
          return { ...g, status: nextStatus };
        }
        return g;
      })
    );
  };

  const handleResetPassword = (gymName) => {
    showToast(`Password recovery link generated & dispatched for ${gymName}`, 'success');
  };

  const columns = [
    { header: 'Gym ID', key: 'id' },
    {
      header: 'Gym Name',
      key: 'name',
      render: (g) => <span style={{ fontWeight: 600 }}>{g.name}</span>
    },
    { header: 'Owner Name', key: 'owner' },
    { header: 'Email & Contact', key: 'email', render: (g) => `${g.email} • ${g.phone}` },
    { header: 'Members', key: 'members' },
    {
      header: 'Status',
      key: 'status',
      render: (g) => <Badge status={g.status} />
    },
    {
      header: 'Actions',
      key: 'actions',
      render: (g) => (
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => toggleGymStatus(g.id)}
          >
            {g.status === 'active' ? 'Deactivate' : 'Approve / Activate'}
          </button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => handleResetPassword(g.name)}
            title="Reset Access Credentials"
          >
            <KeyRound size={14} />
          </button>
        </div>
      )
    }
  ];

  const filteredGyms = gyms.filter(
    (g) =>
      g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.owner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', marginBottom: 4 }}>Gym Owner Management</h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Approve, manage, onboard, and oversee tenant gym accounts
          </p>
        </div>
        <Button>
          <Plus size={18} />
          <span>Onboard New Gym</span>
        </Button>
      </div>

      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          className="input-control"
          placeholder="Search gym by name or owner..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Table columns={columns} data={filteredGyms} />
    </div>
  );
};

export default GymManagementScreen;
