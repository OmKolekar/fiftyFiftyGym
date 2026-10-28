import React, { useState } from 'react';
import { CalendarCheck, Search, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '../../../shared/components/Button/Button';
import { Table } from '../../../shared/components/Table/Table';
import { Badge } from '../../../shared/components/Badge/Badge';
import { useToast } from '../../../context/ToastContext';

export const AttendanceScreen = () => {
  const [memberQuery, setMemberQuery] = useState('');
  const { showToast } = useToast();

  const [attendanceLogs, setAttendanceLogs] = useState([
    { id: 1, memberName: 'Rahul Sharma', phone: '+91 98765 43210', checkInTime: '07:15 AM', plan: 'Quarterly Pro' },
    { id: 2, memberName: 'Ananya Roy', phone: '+91 98111 22334', checkInTime: '07:45 AM', plan: 'Annual Gold' },
    { id: 3, memberName: 'Vikram Singh', phone: '+91 98333 44556', checkInTime: '08:20 AM', plan: 'Monthly Standard' }
  ]);

  const handleQuickCheckIn = (e) => {
    e.preventDefault();
    if (!memberQuery.trim()) return;

    // Duplicate check check-in validation
    const alreadyCheckedIn = attendanceLogs.some(
      (log) => log.memberName.toLowerCase() === memberQuery.toLowerCase()
    );

    if (alreadyCheckedIn) {
      showToast(`${memberQuery} has already checked in today!`, 'warning');
      return;
    }

    const newLog = {
      id: Date.now(),
      memberName: memberQuery,
      phone: '+91 98000 12345',
      checkInTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      plan: 'Active Member'
    };

    setAttendanceLogs([newLog, ...attendanceLogs]);
    showToast(`Check-in recorded for ${memberQuery}`, 'success');
    setMemberQuery('');
  };

  const columns = [
    {
      header: 'Member Name',
      key: 'memberName',
      render: (log) => <span style={{ fontWeight: 600 }}>{log.memberName}</span>
    },
    { header: 'Phone', key: 'phone' },
    { header: 'Plan', key: 'plan' },
    {
      header: 'Check-in Time',
      key: 'checkInTime',
      render: (log) => (
        <span style={{ color: 'var(--brand-accent)', fontWeight: 600 }}>
          {log.checkInTime}
        </span>
      )
    },
    {
      header: 'Status',
      key: 'status',
      render: () => <Badge status="active">Checked In</Badge>
    }
  ];

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: '1.75rem', marginBottom: 4 }}>Daily Attendance Management</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Record manual check-ins and monitor today's gym attendance logs
        </p>
      </div>

      {/* Quick Check-in Bar */}
      <form
        onSubmit={handleQuickCheckIn}
        style={{
          display: 'flex',
          gap: 12,
          padding: 20,
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          marginBottom: 24,
          alignItems: 'center'
        }}
      >
        <div style={{ flex: 1 }}>
          <input
            type="text"
            className="input-control"
            placeholder="Type member name to check in (e.g. Priya Patel)..."
            value={memberQuery}
            onChange={(e) => setMemberQuery(e.target.value)}
          />
        </div>
        <Button type="submit">
          <CheckCircle2 size={18} />
          <span>Record Check-in</span>
        </Button>
      </form>

      <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '1.25rem' }}>Today's Check-ins ({attendanceLogs.length})</h2>
      </div>

      <Table columns={columns} data={attendanceLogs} />
    </div>
  );
};

export default AttendanceScreen;
