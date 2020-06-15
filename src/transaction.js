class Transaction {
  constructor(date, amount, balance) {
    this.date = date;
    this.amount = amount;
    this.balance = balance;
  }
  print() {
    if (this.amount < 0) {
      return (
        this.date +
        " || || " +
        Math.abs(this.amount).toFixed(2) +
        " || " +
        this.balance.toFixed(2)
      );
    } else {
      return (
        this.date +
        " || " +
        this.amount.toFixed(2) +
        " || || " +
        this.balance.toFixed(2)
      );
    }
  }
}
