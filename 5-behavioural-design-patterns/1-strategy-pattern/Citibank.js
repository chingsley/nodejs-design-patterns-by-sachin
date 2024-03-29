const Bank = require('./Bank');

class Citibank extends Bank {
  processPayment() {
    console.log(
      `Your payment of ${this.amount} for ${this.account} has been processed by Citibank`
    );
  }
  processRefund() {
    console.log(
      `Your refund of ${this.amount} for ${this.account} has been processed by Citibank`
    );
  }
}

module.exports = Citibank;