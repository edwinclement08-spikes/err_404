var Web3 = require('web3');

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
    
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

console.log("____________________WEB3 ETH_________________\n"+web3.eth);

var abiArray = [ { "constant": false, "inputs": [], "name": "terminate", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "c", "type": "address" } ], "name": "removeCompany", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "stu", "type": "address" }, { "name": "name", "type": "string" } ], "name": "giveCertificate", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "c", "type": "address" }, { "name": "s", "type": "string" } ], "name": "addStudent", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "c", "type": "address" } ], "name": "isTheStudentHaveCertificate", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0x907da848801dbf5270522d9b4b1983f0b3348736" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "company", "outputs": [ { "name": "", "type": "string", "value": "" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "certified", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "student", "outputs": [ { "name": "", "type": "string", "value": "" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "c", "type": "address" }, { "name": "p", "type": "string" } ], "name": "addCompany", "outputs": [], "payable": false, "type": "function" }, { "inputs": [], "payable": false, "type": "constructor" } ]
var MyContract = new web3.eth.Contract(abiArray, "0xc9184cB7df425eD6C0c28abA777e05DA61F2e820");

web3.eth.defaultAccount = web3.eth.coinbase;


MyContract.methods.addCompany("0x907da848801DBF5270522D9B4B1983f0B3348736", "Tetsu Swords " ).send({from: '0x907da848801DBF5270522D9B4B1983f0B3348736'})
    
//0xc9184cB7df425eD6C0c28abA777e05DA61F2e821