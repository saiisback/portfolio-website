// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;


contract counterDAPP {
 
  //create a variable
    uint public counter; //storage


  //modifiers
    modifier checkIncerement(uint value) {
        require(counter+value<type(uint).max,"Counter cannot be incremented");_;
        emit counterUpdated(counter);
    }


     modifier checkDecerement(uint value) {
        require(counter-value>type(uint).min,"Counter cannot be decremented");_;
        emit counterUpdated(counter);
    }




   // Events
   event counterUpdated(uint counter);
  // initialise the counter with a constructor
    constructor(uint initialValue) {
        counter = initialValue;
    }
  // getCounterValue
    function getCounterValue() external view returns(uint){
        return counter;
    }
    // increment
    function increment() checkIncerement(1) public {        
        counter++;
    }
    // decrement
    function decrement() checkDecerement(1) public {
        counter--;
    }


    // incrementBy
    function incrementBy(uint value) checkIncerement(value) public {
        counter = counter + value;
    }
    // decrementBy
    function decrementBy(uint value) checkDecerement(value) public {
        counter = counter - value;
    }
    // reset
    function reset() public {
        counter = 0;
        emit counterUpdated(counter);
    }
}
