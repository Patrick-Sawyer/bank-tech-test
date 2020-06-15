class Bank {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  date() {
    return new Date().toLocaleDateString();
  }
  deposit(
    amount,
    txn = new Transaction(this.date(), amount, this.balance + amount)
  ) {
    this.balance += amount;
    this.transactions.push(txn);
  }
  withdraw(
    amount,
    txn = new Transaction(this.date(), -amount, this.balance - amount)
  ) {
    this.balance -= amount;
    this.transactions.push(txn);
  }
  statement() {
    console.log("date || credit || debit || balance");
    this.transactions.reverse().forEach(function (transaction, index) {
      console.log(transaction.print());
    });
  }
}
