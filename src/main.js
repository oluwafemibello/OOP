'use strict';

class BankAccount {
  constructor(amount, balance) {

    // the next set of lines initializes the inputs 
    this.amount = amount;
    this.balance = balance;
  }


  testInput(){

  	// Check that amount is a number
    
    if (typeof(amount) !== 'number'){
      
      return 'invalid input, check the amount you supplied';
      
    }
    
    // Check that balance is number
    
    else if (typeof(balance) !== 'number'){
      
      return 'invalid input, check the balance you supplied';
      
    }
    
        // Check that amount is a number
        
    if (amount < 0){
      
      return 'invalid input, check the amount you supplied is positive';
      
    }
    
    // Check that balance is valid
    
    else if (balance < 0){
      
      return 'invalid input, check the balance you supplied is positive';
      
    }


  }
  
  // this method and the deposited amount to the previous balance
  deposit() {

 this.testInput();

    this.balance += this.amount;
    return this.balance;
  }
  
  // this method deducts an amount from previous balance
  withdraw(){
    
    // this checks if the withdrawal amount is more than previous balance
    
    if(this.balance - this.amount < 0){
        return 'insufficient fund';
    } else{ 
        return this.balance -= this.amount;
    }
  }
  
  // this method transfer an amount from the owner's account
  // and adds it to the balance of the targetBalance
  
  transfer(targetBalance){

  	 this.testInput();
   if (typeof(targetBalance) != 'number'){

   	return "check target balance"


   } else{
    
    // Check that target balance is valid
    
    // if valid, this initalizes the balance in the target account which is supplied
    
    this.targetBalance = targetBalance;
    
  //next line checks if the balance is more than the amount to be transferd
      
	if(this.targetBalance - this.amount < 0){
      return 'insufficient fund';
  }else{
        this.balance -= this.amount;
            this.targetBalance += this.amount;
  
  //next line return's both the owner's new balance after transferd
  //and the updated balance of the target account
    
        return [this.balance, this.targetBalance];
    }
  }

 }
  
}

//this is a sub class to the super class BankAccount
// this class is expected to withdraw and transfer amount
//if the account is a NoZeroBankAccount with minimum amount of 1000

class NoZeroBalanceBankAccount extends BankAccount {
  
  //this calls the constructor of the super class into the sub class
  
  constructor(amount, balance) {
    super(amount, balance);
  
  //initalises the minimum balance to 1000
    
    this.minBalance = 1000;
  }
  // Here, withdraw() is a subclassed method which
  // overrides their superclass method of the same name.
  
  // this method deducts an amount from previous balance
  withdraw(){
    
    //this call the withdraw method in super class
        super.withdraw();
        
    //the method below with the same name will over write it
        
   // this checks if the withdrawal amount is more than previous balance
    
        
    if(this.balance - this.amount < this.minBalance){
        return 'insufficient fund';
    } else{ 
        return this.balance -= this.amount;
    }
  }
  
  transfer(targetBalance){
    
      //this call the transfer method in super class
    
    super.transfer();
    
    this.targetBalance = targetBalance;
    
    // Check that target balance is valid
    
  //next line checks if the balance is more than the amount to be transferd
      
	if(this.balance - this.amount < this.minBalance){
      return 'insufficient fund';
  }else{
        this.balance -= this.amount;
            this.targetBalance += this.amount;
  
  //next line return's both the owner's new balance after transferd
  //and the updated balance of the target account
    
        return [this.balance, this.targetBalance];
    }
  }
  
}


let p = new NoZeroBalanceBankAccount(300, 4000);
p.transfer(500);



module.exports = {BankAccount};