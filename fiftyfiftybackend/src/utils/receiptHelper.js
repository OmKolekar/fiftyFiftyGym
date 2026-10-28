export const receiptHelper = {
  generateReceiptNumber: (prefix = 'RCP') => {
    const year = new Date().getFullYear();
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    return `${prefix}-${year}-${randomSuffix}`;
  }
};
