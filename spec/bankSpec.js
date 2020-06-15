describe("bank", function () {
  let bank;
  let date;
  let deposit;
  let withdrawal;
  beforeEach(function () {
    bank = new Bank();
    date = new Date().toLocaleDateString();
    deposit = {
      date: date,
      amount: 5,
      balance: 5,
      print() {
        return date + " || 5.00 || || 5.00";
      },
    };
    withdrawal = {
      date: date,
      amount: -2,
      balance: 3,
      print() {
        return date + " || || 2.00 || 3.00";
      },
    };
  });
  it("has balance of 0", function () {
    expect(bank.balance).toEqual(0);
  });
  it("starts with history array", function () {
    expect(bank.transactions).toEqual([]);
  });
  describe("date", function () {
    it("returns date in correct format", function () {
      expect(bank.date()).toEqual(date);
    });
  });

  describe("deposit", function () {
    it("adds itself to balance", function () {
      bank.deposit(5);
      expect(bank.balance).toEqual(5);
    });
    it("pushes transaction object to array", function () {
      bank.deposit(5, deposit);
      expect(bank.transactions[0]).toEqual(deposit);
    });
  });
  describe("withdrawal", function () {
    it("deducts itself from balance", function () {
      bank.balance = 10;
      bank.withdraw(5);
      expect(bank.balance).toEqual(5);
    });
    it("pushes transaction object to array", function () {
      bank.withdraw(-6, withdrawal);
      expect(bank.transactions[0]).toEqual(withdrawal);
    });
  });
  describe("statement", function () {
    it("prints header", function () {
      console.log = jasmine.createSpy("log");
      bank.statement();
      expect(console.log).toHaveBeenCalledWith(
        "date || credit || debit || balance"
      );
    });
    it("prints history", function () {
      console.log = jasmine.createSpy("log");
      bank.deposit(5, deposit);
      bank.withdraw(6, withdrawal);
      bank.statement();
      expect(console.log).toHaveBeenCalledWith(date + " || || 2.00 || 3.00");
      expect(console.log).toHaveBeenCalledWith(date + " || 5.00 || || 5.00");
    });
  });
});
