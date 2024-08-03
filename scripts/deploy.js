const { ethers } = require("hardhat");

async function main() {
    //get signers
    const [deployer] = await ethers.getSigners();


    let initialValue = 1;
    //getcontract
    const Counter = await ethers.getContractFactory("counterDAPP");


    //deploy
    const counter = await Counter.deploy(initialValue);
    await counter.deployed()


    console.log(`Contract is deployed at ${counter.address}`);


    //interact with the contract
    let countervalue = await counter.getCounterValue()
    console.log(`Initial counter value is ${countervalue} \n`)


    let transaction = await counter.increment()
    let receipt = await transaction.wait();
    console.log(`After increment value is ${receipt.events[0].args[0].toNumber()}`)


    transaction = await counter.decrement()
    receipt = await transaction.wait();
    console.log(`After decrement value is ${receipt.events[0].args[0].toNumber()}`)


    transaction = await counter.incrementBy(10)
    receipt = await transaction.wait();
    console.log(`After incrementBy value is ${receipt.events[0].args[0].toNumber()}`)


    transaction = await counter.decrementBy(5)
    receipt = await transaction.wait();
    console.log(`After decrement value is ${receipt.events[0].args[0].toNumber()}`)


    transaction = await counter.reset()
    receipt = await transaction.wait();
    console.log(`After reset value is ${receipt.events[0].args[0].toNumber()}`)
}


main().catch((error)=>{
    console.log(error)
    process.exitCode = 1;
})
