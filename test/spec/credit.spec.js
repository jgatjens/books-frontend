/* global describe, it */

(function () {
    'use strict';

    describe('Some dummy test', function () {

      it('object should have property name', function() {
        expect({ name: 'yez' }).to.have.property('name');
      });

      it('boolean value to not be equal to false', function() {
        expect(true).to.not.be.eql(false);
      });


      it('sum 2 + 2 should be equal to 4', function() {
        expect(2 + 2).to.be.eql(4);
      });

    });

    describe('Account example', function () {

      it('initial balance should be 0', function() {
        var account = new Account();
        expect(account).have.property('balance');
        expect(account.balance).eql(0);
      });

      it('credit should increase the balance', function() {
        var account = new Account();
        account.credit(10);
        expect(account.balance).eql(10);
      });

      it('debit should decrease the balance', function() {
        var account = new Account();
        account.debit(10);
        expect(account.balance).eql(-10);
      });

      it('transfer should credit one account and debit the other', function() {
        var accountA = new Account();
        accountA.credit(20);
        var accountB = new Account();
        accountA.transferTo(accountB, 5);
        expect(accountA.balance).eql(15);
        expect(accountB.balance).eql(5);
      });

      it('transfer should throw error if not enough funds', function() {
        var accountA = new Account();
        accountA.credit(5);
        var accountB = new Account();
        assert.throws(function() {
          accountA.transferTo(accountB, 10);
        });
      });

    });

})();
