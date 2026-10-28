import React from 'react';

export const Badge = ({ children, status = 'info' }) => {
  const statusMap = {
    active: 'success',
    paid: 'success',
    expired: 'danger',
    inactive: 'danger',
    cancelled: 'danger',
    pending: 'warning',
    partial: 'warning',
    archived: 'info'
  };

  const badgeType = statusMap[status?.toLowerCase()] || status || 'info';

  return <span className={`badge badge-${badgeType}`}>{children || status}</span>;
};
