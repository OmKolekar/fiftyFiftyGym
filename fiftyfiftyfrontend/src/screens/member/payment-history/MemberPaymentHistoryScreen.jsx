import React, { useState } from 'react';
import { Receipt, Download, Printer } from 'lucide-react';
import { Table } from '../../../shared/components/Table/Table';
import { Badge } from '../../../shared/components/Badge/Badge';
import { Modal } from '../../../shared/components/Modal/Modal';
import { Button } from '../../../shared/components/Button/Button';
import { formatCurrency, formatDate } from '../../../shared/utils/formatters';

export const MemberPaymentHistoryScreen = () => {
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  const payments = [
    { id: 'RCP-2026-90412', date: '2026-01-15', plan: 'Quarterly Pro Membership', amount: 4500, mode: 'UPI', status: 'paid' },
    { id: 'RCP-2025-45129', date: '2025-10-15', plan: 'Quarterly Pro Membership', amount: 4500, mode: 'CARD', status: 'paid' },
    { id: 'RCP-2025-11024', date: '2025-07-15', plan: 'Quarterly Pro Membership', amount: 4500, mode: 'ONLINE', status: 'paid' }
  ];

  const columns = [
    { header: 'Receipt No.', key: 'id' },
    { header: 'Plan Description', key: 'plan' },
    {
      header: 'Amount Paid',
      key: 'amount',
      render: (p) => (
        <span style={{ fontWeight: 700, color: 'var(--brand-accent)' }}>
          {formatCurrency(p.amount)}
        </span>
      )
    },
    { header: 'Payment Method', key: 'mode' },
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
      header: 'Action',
      key: 'action',
      render: (p) => (
        <button className="btn btn-secondary btn-sm" onClick={() => setSelectedReceipt(p)}>
          <Receipt size={14} />
          <span>Receipt</span>
        </button>
      )
    }
  ];

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: '1.75rem', marginBottom: 4 }}>My Payment History & Receipts</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          View past subscription fees, payment modes, and printable receipts
        </p>
      </div>

      <Table columns={columns} data={payments} />

      <Modal
        isOpen={Boolean(selectedReceipt)}
        onClose={() => setSelectedReceipt(null)}
        title="Official Payment Receipt"
        footer={
          <Button onClick={() => window.print()}>
            <Printer size={16} />
            <span>Print Receipt</span>
          </Button>
        }
      >
        {selectedReceipt && (
          <div style={{ padding: 12, border: '1px dashed var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ textAlign: 'center', marginBottom: 16 }}>
              <h3>FiftyFifty Downtown Fitness</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Payment Acknowledgment</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Receipt Number:</span>
              <strong style={{ fontFamily: 'monospace' }}>{selectedReceipt.id}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Plan:</span>
              <span>{selectedReceipt.plan}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Date:</span>
              <span>{formatDate(selectedReceipt.date)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Payment Mode:</span>
              <Badge status="info">{selectedReceipt.mode}</Badge>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border-subtle)' }}>
              <strong>Total Paid:</strong>
              <strong style={{ color: 'var(--brand-accent)', fontSize: '1.2rem' }}>
                {formatCurrency(selectedReceipt.amount)}
              </strong>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MemberPaymentHistoryScreen;
