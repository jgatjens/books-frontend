var Account = function() {
  this.balance = 0;
}

Account.prototype.credit = function(amount) {
  this.balance += amount;
};

Account.prototype.debit = function(amount) {
  this.balance -= amount;
};

Account.prototype.transferTo = function(account, amount) {
  if (this.balance < amount) {
    throw new Error('Not enough funds');
  }
  this.debit(amount);
  account.credit(amount);
};

