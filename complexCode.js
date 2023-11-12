/* 
   Filename: complexCode.js
   Description: This code demonstrates a complex banking system with multiple classes and functions to perform various transactions and account management operations.
*/

// Class representing a Bank
class Bank {
  constructor(name) {
    this.name = name;
    this.customers = [];
    this.accounts = [];
  }

  // Method to add a customer to the bank
  addCustomer(customer) {
    this.customers.push(customer);
  }

  // Method to create a new account for a customer
  createAccount(customer, initialDeposit) {
    const account = new Account(customer, initialDeposit);
    this.accounts.push(account);
    return account;
  }

  // Method to get a customer's balance
  getCustomerBalance(customer) {
    let balance = 0;
    this.accounts.forEach(account => {
      if (account.customer === customer) {
        balance += account.balance;
      }
    });
    return balance;
  }
}

// Class representing a Customer
class Customer {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

// Class representing an Account
class Account {
  constructor(customer, initialDeposit) {
    this.customer = customer;
    this.balance = initialDeposit;
  }

  // Method to deposit money into the account
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  // Method to withdraw money from the account
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    }
  }
}

// Example usage
const bank = new Bank("MyBank");

const customer1 = new Customer("John Doe", "123 Main St");
const customer2 = new Customer("Jane Smith", "456 Elm St");

bank.addCustomer(customer1);
bank.addCustomer(customer2);

const account1 = bank.createAccount(customer1, 1000);
const account2 = bank.createAccount(customer2, 500);

console.log(bank.name); // Output: MyBank
console.log(account1.balance); // Output: 1000
console.log(account2.balance); // Output: 500

account1.deposit(500);
account1.withdraw(200);
console.log(account1.balance); // Output: 1300

console.log(bank.getCustomerBalance(customer1)); // Output: 1300
console.log(bank.getCustomerBalance(customer2)); // Output: 500