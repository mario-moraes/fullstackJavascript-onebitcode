module.exports = class Account {
  #balance;
  //#deposits
  //#loans
  //#transfers 
  // values are public for exercice purposes, but in real-world applications be careful to set to private atributes
  constructor(user) {
    this.owner = user;
    this.#balance = 0;
    this.deposits = [];
    this.loans = [];
    this.transfers = [];
  }

  get balance() {
    return this.#balance
  }
  addDeposit(deposit) {
    this.#balance += deposit.value;
    this.deposits.push(deposit);
  }
  addLoan(loan) {
    this.#balance =+ loan.value;
    this.loans.push(loan);
  }
  addTransfer(transfer) {
    if (transfer.toUser.email === this.owner.email) {
      this.#balance += transfer.value;
      this.transfers.push(transfer);
    } else if (transfer.fromUser.email === this.owner.email) {
      this.#balance -= transfer.value;
      this.transfers.push(transfer);
    }
  }
}
