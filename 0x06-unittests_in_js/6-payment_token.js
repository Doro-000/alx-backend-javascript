function getPaymentTokenFromAPI(success) {
  if (success === true) {
    return new Promise((resolve) => {
      const obj = { data: 'Successful response from the API' };
      resolve(obj);
    });
  }
}

module.exports = getPaymentTokenFromAPI;
