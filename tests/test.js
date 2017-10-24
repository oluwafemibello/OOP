const assert = require('chai').assert;
const BankAccount = require('../src/main.js').BankAccount;

describe("TestCases for methods in class BankAccount", () => {

	describe("test for method deposit", () => {

		it("should return invalid input check the amount you supplied as output for", () => {
			let test = new BankAccount('er', 4000);
			assert(test.deposit(), 'invalid input, check the amount you supplied');
		})

		it("should return invalid input check the balance you supplied as output for", () => {
			let test = new BankAccount(4000, 'er');
			assert(test.deposit(), 'invalid input, check the amount you supplied');
		})

		it("should return invalid input check the amount is grater than Zero", () => {
			let test = new BankAccount(-1, 4000);
			assert(test.deposit(), 'invalid input, check the amount you supplied is positive');
		})

		it("should return invalid input check the amount is grater than Zero", () => {
			let test = new BankAccount(4000, -1);
			assert(test.deposit(), 'invalid input, check the amount you supplied is positive');
		})

		it("should return valid input and check the balance is updated", () => {
			let test = new BankAccount(4000, 3000);
			assert(test.deposit(), 7000);
		})
	})		

	describe("test for method transfer", () => {

		it("should return invalid input check the amount you supplied as output for", () => {
			let test = new BankAccount('er', 4000);
			assert(test.transfer(), 'invalid input, check the amount you supplied');
		})

        it("should return invalid input check the target balance is anumber", () => {
			let test = new BankAccount(200, 4000);
			assert(test.transfer(-200), 'check target balance');
		})

		it("should return invalid input check the balance you supplied as output for", () => {
			let test = new BankAccount(4000, 'er');
			assert(test.transfer(), 'invalid input, check the amount you supplied');
		})

		it("should return invalid input check the amount is grater than Zero", () => {
			let test = new BankAccount(-1, 4000);
			assert(test.transfer(), 'invalid input, check the amount you supplied is positive');
		})

		it("should return invalid input check the amount is grater than Zero", () => {
			let test = new BankAccount(4000, -1);
			assert(test.transfer(), 'invalid input, check the amount you supplied is positive');
		})

		it("should return valid input and check the balance is updated if balance is more than amount", () => {
			let test = new BankAccount(3000, 4000);
			assert(test.transfer(), 1000);
		})

		it("should return valid input and return error cause balance is less than amount", () => {
			let test = new BankAccount(4000, 3000);
			assert(test.transfer(), 'insufficient fund');
		})

	})		

describe("test for method withdraw", () => {

		it("should return invalid input check the amount you supplied as output for", () => {
			let test = new BankAccount('er', 4000);
			assert(test.withdraw(), 'invalid input, check the amount you supplied');
		})

		it("should return invalid input check the balance you supplied as output for", () => {
			let test = new BankAccount(4000, 'er');
			assert(test.withdraw(), 'invalid input, check the amount you supplied');
		})

		it("should return invalid input check the amount is grater than Zero", () => {
			let test = new BankAccount(-1, 4000);
			assert(test.withdraw(), 'invalid input, check the amount you supplied is positive');
		})

		it("should return invalid input check the amount is grater than Zero", () => {
			let test = new BankAccount(4000, -1);
			assert(test.withdraw(), 'invalid input, check the amount you supplied is positive');
		})

		it("should return valid input and check the balance is updated if balance is more than amount", () => {
			let test = new BankAccount(3000, 4000);
			assert(test.withdraw(), 1000);
		})

		it("should return valid input and return error cause balance is less than amount", () => {
			let test = new BankAccount(4000, 3000);
			assert(test.withdraw(), 'insufficient fund');
		})

	})		



});