const Utils = {
  calculateNumber: function calculateNumber(type, a, b) {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    } if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    } if (type === 'DIVIDE') {
      const B = Math.round(b);
      const A = Math.round(a);
      if (B === 0) return 'Error';
      return A / B;
    }
    return 'Error';
  },
};

module.exports = Utils;
