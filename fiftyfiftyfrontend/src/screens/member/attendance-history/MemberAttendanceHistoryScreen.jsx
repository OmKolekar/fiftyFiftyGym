import React from 'react';
import { CalendarCheck, Award } from 'lucide-react';
import { Table } from '../../../shared/components/Table/Table';
import { Badge } from '../../../shared/components/Badge/Badge';
import { formatDate } from '../../../shared/utils/formatters';

export const MemberAttendanceHistoryScreen = () => {
  const checkIns = [
    { id: 1, date: '2026-03-24', time: '07:15 AM', session: 'Morning Strength Workout' },
    { id: 2, date: '2026-03-22', time: '07:30 AM', session: 'Cardio & Abs' },
    { id: 3, date: '2026-03-20', time: '06:55 AM', session: 'Leg Day Routine' },
    { id: 4, date: '2026-03-18', time: '07:10 AM', session: 'Chest & Triceps' },
    { id: 5, date: '2026-03-16', time: '07:05 AM', session: 'Back & Biceps' }
  ];

  const columns = [
    {
      header: 'Date',
      key: 'date',
      render: (r) => <span style={{ fontWeight: 600 }}>{formatDate(r.date)}</span>
    },
    { header: 'Check-in Time', key: 'time' },
    { header: 'Workout Focus', key: 'session' },
    {
      header: 'Attendance',
      key: 'status',
      render: () => <Badge status="active">Present</Badge>
    }
  ];

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: '1.75rem', marginBottom: 4 }}>My Attendance History</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Review all your gym check-ins and monthly workout visit records
        </p>
      </div>

      <Table columns={columns} data={checkIns} />
    </div>
  );
};

export default MemberAttendanceHistoryScreen;
