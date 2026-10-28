import React, { useState } from 'react';
import { IndianRupee, Receipt, Plus, Printer, CheckCircle, Smartphone } from 'lucide-react';
import { Button } from '../../../shared/components/Button/Button';
import { Table } from '../../../shared/components/Table/Table';
import { Badge } from '../../../shared/components/Badge/Badge';
import { Modal } from '../../../shared/components/Modal/Modal';
import { formatCurrency, formatDate } from '../../../shared/utils/formatters';

export const PaymentManagementScreen = () => {
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  const payments = [
    {
      id: 'RCP-2026-90412',
      memberName: 'Rahul Sharma',
      amount: 4500,
      mode: 'UPI',
      date: '2026-03-20',
      status: 'paid',
      plan: 'Quarterly Pro'
    },
    {
      id: 'RCP-2026-88123',
      memberName: 'Ananya Roy',
      amount: 14000,
      mode: 'ONLINE',
      date: '2026-03-18',
      status: 'paid',
      plan: 'Annual Gold Elite'
    },
    {
      id: 'RCP-2026-77341',
      memberName: 'Vikram Singh',
      amount: 1800,
      mode: 'CASH',
      date: '2026-03-15',
      status: 'paid',
      plan: 'Monthly Standard'
    },
    {
      id: 'RCP-2026-66522',
      memberName: 'Priya Patel',
      amount: 2000,
      mode: 'UPI',
      date: '2026-03-12',
      status: 'partial',
      plan: 'Quarterly Pro'
    }
  ];

  const columns = [
    { header: 'Receipt No.', key: 'id' },
    {
      header: 'Member',
      key: 'memberName',
      render: (p) => <span style={{ fontWeight: 600 }}>{p.memberName}</span>
    },
    {
      header: 'Amount Paid',
      key: 'amount',
      render: (p) => (
        <span style={{ fontWeight: 700, color: 'var(--brand-accent)' }}>
          {formatCurrency(p.amount)}
        </span>
      )
    },
    {
      header: 'Payment Mode',
      key: 'mode',
      render: (p) => (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.85rem' }}>
          <Badge status="info">{p.mode}</Badge>
        </span>
      )
    },
    {
      header: 'Date',
      key: 'date',
      render: (p) => formatDate(p.date)
    },
    {
      header: 'Status',
      key: 'status',
      render: (p) => <Badge status={p.status} />
    },
    {
      header: 'Receipt',
      key: 'actions',
      render: (p) => (
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => setSelectedReceipt(p)}
        >
          <Receipt size={14} />
          <span>View</span>
        </button>
      )
    }
  ];

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', marginBottom: 4 }}>Payment Management</h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Track collections, record cash/UPI transactions, and issue receipts
          </p>
        </div>
        <Button>
          <Plus size={18} />
          <span>Record New Payment</span>
        </Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 28 }}>
        <div style={{ background: 'var(--bg-surface)', padding: 20, borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Today's Collections</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: 4 }}>₹4,500</div>
        </div>
        <div style={{ background: 'var(--bg-surface)', padding: 20, borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>This Month's Collections</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-accent)', marginTop: 4 }}>₹1,85,000</div>
        </div>
        <div style={{ background: 'var(--bg-surface)', padding: 20, borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Pending Dues</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-warning)', marginTop: 4 }}>₹12,500</div>
        </div>
      </div>

      <Table columns={columns} data={payments} />

      {/* Printable Receipt Modal */}
      <Modal
        isOpen={Boolean(selectedReceipt)}
        onClose={() => setSelectedReceipt(null)}
        title="Payment Receipt"
        footer={
          <Button onClick={() => window.print()}>
            <Printer size={16} />
            <span>Print Receipt</span>
          </Button>
        }
      >
        {selectedReceipt && (
          <div style={{ padding: 12, border: '1px dashed var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <h2 style={{ fontSize: '1.25rem' }}>FiftyFifty Gym</h2>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Official Payment Acknowledgment</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Receipt No:</span>
              <strong style={{ fontFamily: 'monospace' }}>{selectedReceipt.id}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Member Name:</span>
              <strong>{selectedReceipt.memberName}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Plan:</span>
              <span>{selectedReceipt.plan}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Payment Mode:</span>
              <Badge status="info">{selectedReceipt.mode}</Badge>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border-subtle)', fontSize: '1.1rem' }}>
              <strong>Total Amount Paid:</strong>
              <strong style={{ color: 'var(--brand-accent)' }}>{formatCurrency(selectedReceipt.amount)}</strong>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PaymentManagementScreen;
