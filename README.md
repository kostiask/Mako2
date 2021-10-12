# Mako2

## Requirements:
 * NodeJs - https://nodejs.org/en/download/
 * Truffle - https://www.trufflesuite.com/truffle
 * Metamask - https://metamask.io/download.html


## Usage

Clone the repository to the user's home directory and go to the project directory:
```bash
cd "${HOME}" && git clone https://github.com/kostiask/Mako2.git && cd Mako2
```

## Instruction
1. Go to directory Oracle: 
```bash
cd Oracle
```
2. Install modulle:
```bash
npm install
```

3. Into [truffle-config.js](https://github.com/kostiask/Mako2/blob/b5079509fed42840f3987b1477ad849ec321106c/Oracle/truffle-config.js#L36) put blockchain and account data:
```js
development: {
      host: '<host blockchain>',
      port: <port>,
      network_id: '*',
      from: <address account>
    }
```
### If using a client Besu.
Besu does not support private key management. To use Besu with Truffle, you must configure a Truffle wallet.
To install a Truffle wallet:
```bash
npm install --save @truffle/hdwallet-provider
```
To add the wallet provider, update the [truffle-config.js](https://github.com/kostiask/Mako2/blob/b5079509fed42840f3987b1477ad849ec321106c/Oracle/truffle-config.js#L22) file in the project directory. Replace:
* <JSON-RPC-http-endpoint> with the JSON-RPC endpoint (IP address and port) of a Besu node.
* <account-private-key> with the private key of an Ethereum account containing Ether.
```js
const PrivateKeyProvider = require("@truffle/hdwallet-provider");
const privateKey = "<account-private-key>";
const privateKeyProvider = new PrivateKeyProvider(privateKey, "<JSON-RPC-http-endpoint>");
```
4. Compile Smart Contract: 
```bash
truffle compile
```
5. Deploy Smart Contract:
```bash
truffle migrate
```
If you using Besu: 
```bash
truffle migrate --network besuWallet
```
Po wykonaniu polecenia w terminale pojawi sie address nowego contractu Oraclu:
![alt text](https://github.com/kostiask/Mako2/blob/master/img/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0-20211012134429-811x292.png?raw=true) 

6. Address z punktu 5 trzebo umiescic w pliku [js_Oracle/index.js](https://github.com/kostiask/Mako2/blob/ba130171d9b289831d5abf177dad010e3ba3a1ad/js_Oracle/index.js#L100):
```js
const addressOracle = "<address-Oracle-contract>";
```
i w pliku [dapp/contracts/oracleAPI.sol](https://github.com/kostiask/Mako2/blob/ba130171d9b289831d5abf177dad010e3ba3a1ad/dapp/contracts/oracleAPI.sol#L11):
```sol
address OracleAddress = <address-Oracle-contract>;
```
7. Go to directory js_Oracle:
```bash
cd Oracle
```
8. Install module:
```bash
npm install
```
9. In [index.js](https://github.com/kostiask/Mako2/blob/ba130171d9b289831d5abf177dad010e3ba3a1ad/js_Oracle/index.js#L147) put blockchain websocket address: 
```js
web3 = new Web3(new Web3.providers.WebsocketProvider('<blockchain-websocket>'));
```
10. In [index.js](https://github.com/kostiask/Mako2/blob/ba130171d9b289831d5abf177dad010e3ba3a1ad/js_Oracle/index.js#L5) put private account key for signing transactions:
```js
const privateKey = "<private-key-account>";
```
11. Start an application: 
```bash
node index.js
```
12. Go to dapp directory in a new terminal window:
```bash
cd dapp
```
13. Install module:
```bash
npm install
```
14. Follow step 2 from the instructions for the file [truffle-config.js](https://github.com/kostiask/Mako2/blob/b5fa28dca04603b9058bb201b86c0f2afc8dfba4/dapp/truffle-config.js).
      
15. Compile Smart Contracts: 
```bash
truffle compile
```
16. Deploy Smart Contracts:
```bash
truffle migrate
```
If you using Besu: 
```bash
truffle migrate --network besuWallet
```
Po wykonaniu polecenia w terminale pojawi sie address nowego contractu Oraclu:
![alt text](https://github.com/kostiask/Mako2/blob/master/img/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0-20211012134429-811x292.png?raw=true) 
### Simple server which return graph
1. Go to server directory:
```bash
cd server
```
2. Start server:
```bash
node server.js
```

### Client application
1. Go to dapp/client/src directory:
```bash
cd dapp/client/src
```
2. Install module:
```bash
npm install
```
3. Open app.js file and add RDF SC address:
```js
const rdf = new web3.eth.Contract(
      data.abi,
      "<address RDF contract>"
      );
```
4. Go to dapp/client directory.
5. Start app: 
```bash
npm run dev
```
### Metamask
1. In Metamask connect to proper blockchain network.
![alt text](https://www.trufflesuite.com/img/tutorials/pet-shop/metamask-networkmenu.png) 
