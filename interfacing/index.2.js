var Web3 = require('web3');

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
    
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

console.log("____________________WEB3 ETH_________________\n"+web3.eth);

var abiArray = [ { "constant": true, "inputs": [], "name": "getCounter", "outputs": [ { "name": "", "type": "uint256", "value": "1" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "decrease", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "increase", "outputs": [], "payable": false, "type": "function" } ];
var MyContract = new web3.eth.Contract(abiArray, "0x8b9A6f9D2bC1F7EC6e32Fd5255AA1049A75B7A1A");


console.log("WEB3 after adding contract\n"+web3);
console.log("------------");
console.log(web3.eth.accounts);
console.log("------------");
console.log(web3.eth.personal.unlockAccount);
console.log("------------");
console.log(web3.eth.defaultAccount);
//console.log("------------");
//console.log(web3.eth.accounts);
web3.eth.defaultAccount = web3.eth.coinbase;

//"0x907da848801DBF5270522D9B4B1983f0B3348736";
console.log("------------");
console.log(web3.eth.defaultAccount);
console.log("-----MY CONTRACT -------");
console.log(MyContract);
/*console.log(web3.eth.personal.unlockAccount);
console.log("------------");
console.log(web3.eth);
*/
// web3.eth.personal.unlockAccount("0x907da848801dbf5270522d9b4b1983f0b3348736", "8/18/105-c",1000);

MyContract.methods.decrease().send({from: '0x907da848801DBF5270522D9B4B1983f0B3348736'})
    
//MyContract.methods.increase().call({from: '0x907da848801DBF5270522D9B4B1983f0B3348736'}, function(error, result){
  // console.log(result);
   //console.log(error);
   
//});
