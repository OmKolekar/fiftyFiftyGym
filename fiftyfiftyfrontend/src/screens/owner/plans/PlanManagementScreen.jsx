import React, { useState } from 'react';
import { Plus, Check, Clock, IndianRupee } from 'lucide-react';
import { Button } from '../../../shared/components/Button/Button';
import { formatCurrency } from '../../../shared/utils/formatters';

export const PlanManagementScreen = () => {
  const [plans, setPlans] = useState([
    {
      id: 1,
      name: 'Monthly Standard',
      duration: '30 Days',
      price: 1800,
      activeSubscribers: 48,
      features: ['Full gym access', 'Locker facilities', 'General trainer assistance']
    },
    {
      id: 2,
      name: 'Quarterly Pro',
      duration: '90 Days',
      price: 4500,
      activeSubscribers: 62,
      features: ['Full gym access', '1 Diet Consultation', 'Free Steam Bath (2/mo)']
    },
    {
      id: 3,
      name: 'Annual Gold Elite',
      duration: '365 Days',
      price: 14000,
      activeSubscribers: 22,
      features: ['Unlimited all-hours access', 'Monthly diet reviews', 'Free gym kit & shaker', 'Guest pass x 4']
    }
  ]);

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', marginBottom: 4 }}>Membership Plans</h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Configure gym plans, prices, durations, and member renewals
          </p>
        </div>
        <Button>
          <Plus size={18} />
          <span>Create New Plan</span>
        </Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
        {plans.map((plan) => (
          <div
            key={plan.id}
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xl)',
              padding: 28,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 4 }}>{plan.name}</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Clock size={14} /> {plan.duration}
                </span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-primary)' }}>
                  {formatCurrency(plan.price)}
                </div>
              </div>
            </div>

            <div style={{ flex: 1, margin: '20px 0', borderTop: '1px solid var(--border-subtle)', paddingTop: 16 }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 12 }}>INCLUDED BENEFITS:</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {plan.features.map((feature, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem' }}>
                    <Check size={16} color="var(--brand-accent)" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <strong>{plan.activeSubscribers}</strong> active members
              </span>
              <button className="btn btn-secondary btn-sm">Edit Plan</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanManagementScreen;
