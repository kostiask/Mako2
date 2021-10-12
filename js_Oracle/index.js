import Web3 from "web3";
import Net from "net";
import request from "request";

const privateKey = "0xae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f";

const abi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_adr",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "urlToQuery",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "attributeToFetch",
          "type": "string"
        }
      ],
      "name": "NewRequest",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "urlToQuery",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "attributeToFetch",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "agreedValue",
          "type": "string"
        }
      ],
      "name": "UpdatedRequest",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_urlToQuery",
          "type": "string"
        },
        {
          "name": "_attributeToFetch",
          "type": "string"
        }
      ],
      "name": "createRequest",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        },
        {
          "name": "_valueRetrieved",
          "type": "string"
        }
      ],
      "name": "updateRequest",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

const addressOracle = "0xb9A219631Aed55eBC3D998f17C3840B7eC39C0cc";

var server = Net.createServer().listen();
var web3;
var contract;

initWeb3();
initDefaultAccount();
initContract();

contract.events.NewRequest({})
.on('data', (event) => {
	print("Id:" + event.returnValues.id + " " + "URL: " + event.returnValues.urlToQuery + " Address sender: " + event.returnValues._adr);
  var ID = event.returnValues.id;
  var _request = event.returnValues.urlToQuery;
  request(_request, function(error, response, body) {
    if(error){
      print("ERROR: " + error);
    }
    else {
      print('Status code '+ response.statusCode);
      print("Response: " + body);
      contract.methods.updateRequest(ID,body).send({from: web3.eth.defaultAccount, gas: 17000000000});
    }
  });

})
.on('error', console.error);

contract.events.UpdatedRequest({})
.on('data', (event) => {
  print("Update request id = " + event.returnValues.id);
})
.on('error', console.error);

function initContract(){
    print("Smart contract Oracle initialization");
    try{
        contract = new web3.eth.Contract(abi,addressOracle);
        print("Address Oracle - " + addressOracle);
    } catch(err){
        print(err);
    }
}

function initWeb3(){
    print("Web3 initialization");
    web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8546'));
    print("WebSocket - " + web3.currentProvider.url);
}

function initDefaultAccount(){
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  web3.eth.accounts.wallet.add(account);
  web3.eth.defaultAccount = account.address;
  print("Default signing account - " + account.address);
}

function print(_str){
    var data = new Date()
    console.log('\x1b[36m%s\x1b[0m',"[" + data.toLocaleDateString() + " " + data.toLocaleTimeString() + "] ", _str);
}
