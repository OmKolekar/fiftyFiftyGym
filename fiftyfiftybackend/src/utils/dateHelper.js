export const dateHelper = {
  getTodayDateString: () => {
    const now = new Date();
    return now.toISOString().split('T')[0];
  },

  calculateExpiryDate: (startDate, durationDays) => {
    const start = new Date(startDate);
    const end = new Date(start);
    end.setDate(start.getDate() + parseInt(durationDays, 10));
    return end;
  },

  isExpired: (expiryDate) => {
    return new Date(expiryDate).getTime() < new Date().getTime();
  },

  daysRemaining: (expiryDate) => {
    const diffMs = new Date(expiryDate).getTime() - new Date().getTime();
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  }
};
