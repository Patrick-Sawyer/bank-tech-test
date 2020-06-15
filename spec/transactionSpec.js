describe("transaction", function () {
  let depositTransaction;
  let withdrawalTransaction;
  beforeEach(function () {
    depositTransaction = new Transaction("11/11/1111", 5, 10);
    withdrawalTransaction = new Transaction("11/11/1111", -5, 10);
  });

  it("stores transaction info", function () {
    expect(depositTransaction.amount).toEqual(5);
    expect(depositTransaction.balance).toEqual(10);
    expect(depositTransaction.date).toEqual("11/11/1111");
  });

  describe("print", function () {
    it("prints correctly when deposit", function () {
      expect(depositTransaction.print()).toEqual(
        "11/11/1111 || 5.00 || || 10.00"
      );
    });
    it("prints correctly when withdrawal", function () {
      expect(withdrawalTransaction.print()).toEqual(
        "11/11/1111 || || 5.00 || 10.00"
      );
    });
  });
});
