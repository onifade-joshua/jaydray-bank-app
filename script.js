"use strict";

const account1 = {
    owner: "Onifade Joshua",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
};
const account2 = {
    owner: "Obayan Joshua",
    movements: [5000, 3100, -150, 3000, -750, -130, 50, 1000],
    interestRate: 1.5,
    pin: 2222,
}
const account3 = {
    owner: "Onifade David",
    movements: [4000, 700, -300, 2000, -450, -300, 100, 400],
    interestRate: 0.7,
    pin: 3333,
}
const account4 = {
    owner: "Onifade Daniel",
    movements: [6000, 250, -150, 2000, -650, -180, 110, 800],
    interestRate: 1,
    pin: 4444,
}
const accounts = [account1, account2, account3, account4];

const labelWelcome = document.querySelector("Welcome");

const labelDate = document.querySelector(".date");

const labelBalance = document.querySelector(".balance__value");

const labelSumIn = document.querySelector(".summary__value--in");

const labelSumOut = document.querySelector(".summary__value--out");

const labelSumInterest = document.querySelector(".summary__value--interest");

const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");

const containerMovements = document.querySelector(".movements");
const btnLogin = document.querySelector(".login__btn");

const btnTransfer = document.querySelector(".form__btn--transfer");

const btnLoan = document.querySelector(".form__btn--loan");

const btnClose = document.querySelector(".form__btn--close");

const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector.querySelector("login__input--user");

const inputLoginPin = document.querySelector(".login__input--pin");

const inputTransferTo = document.querySelector(".form__input--to");

const inputTransferAmount = document.querySelector(".form__input--amount");

const inputLoanAmount = document.querySelector(".form__input__loan-amount");

const inputCloseUsername = document.querySelector(".form__input--user");

const inputClosePin = document.querySelector(".form__input--pin");