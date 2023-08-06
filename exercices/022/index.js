const App = require("./App");

App.createUser("mario@email.com", "Mario Moraes");
App.createUser("neto@email.com", "Antonio Neto");
App.createUser("lucas@email.com", "Lucas Braga");

App.deposit("mario@email.com", 100);

App.transfer("mario@email.com", "neto@email.com", 20);

App.changeLoanFee(10);
App.takeLoan("lucas@email.com", 2000, 24);

console.log(App.findUser("mario@email.com"));

console.log(App.findUser("mario@email.com").account);

console.log(App.findUser("neto@email.com"));

console.log(App.findUser("neto@email.com").account);

console.log(App.findUser("lucas@email.com"));

console.log(App.findUser("lucas@email.com").account);

console.log(App.findUser("lucas@email.com").account.loans[0].installments);