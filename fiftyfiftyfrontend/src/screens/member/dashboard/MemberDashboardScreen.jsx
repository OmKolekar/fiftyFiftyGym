import React from 'react';
import { ShieldCheck, Calendar, Clock, Award, CheckCircle } from 'lucide-react';
import { Badge } from '../../../shared/components/Badge/Badge';
import { useAuth } from '../../../context/AuthContext';
import { formatDate } from '../../../shared/utils/formatters';

export const MemberDashboardScreen = () => {
  const { user } = useAuth();

  const membershipInfo = {
    planName: 'Quarterly Pro Membership',
    startDate: '2026-01-15',
    expiryDate: '2026-04-15',
    status: 'active',
    visitsThisMonth: 14,
    totalVisits: 38
  };

  const daysLeft = Math.ceil(
    (new Date(membershipInfo.expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="animate-fade-in">
      <div className="member-card-hero">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              CURRENT MEMBERSHIP
            </span>
            <div className="member-plan-name">{membershipInfo.planName}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8 }}>
              <Badge status={membershipInfo.status}>{membershipInfo.status} Member</Badge>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {daysLeft} days remaining
              </span>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Gym Location</div>
            <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>FiftyFifty Downtown Fitness</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginTop: 32, paddingTop: 20, borderTop: '1px solid var(--border-subtle)' }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Start Date</div>
            <div style={{ fontWeight: 600 }}>{formatDate(membershipInfo.startDate)}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Valid Until (Expiry)</div>
            <div style={{ fontWeight: 600, color: 'var(--brand-accent)' }}>{formatDate(membershipInfo.expiryDate)}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Visits This Month</div>
            <div style={{ fontWeight: 600 }}>{membershipInfo.visitsThisMonth} Sessions</div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Total Check-ins</div>
            <div style={{ fontWeight: 600 }}>{membershipInfo.totalVisits} Workouts</div>
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--bg-surface)', padding: 24, borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: 12 }}>Workout Motivation</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
          "Consistency is what transforms average into excellence. 14 workouts completed this month — keep pushing your limits!"
        </p>
      </div>
    </div>
  );
};

export default MemberDashboardScreen;
