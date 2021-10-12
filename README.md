# Mako2

## Requirements:
 * NodeJs - https://nodejs.org/en/download/
 * Truffle - https://www.trufflesuite.com/truffle
 * Metamask - https://metamask.io/download.html

In the blockchain that you are using, you need to enable websocket. If you are using the [Hyperledger Besu](https://besu.hyperledger.org/en/stable/) client, you can find instructions [here](https://besu.hyperledger.org/en/stable/Reference/CLI/CLI-Syntax/)

## Instruction

1. Clone the repository to the user's home directory and go to the project directory:
```bash
cd "${HOME}" && git clone https://github.com/kostiask/Mako2.git && cd Mako2
```
2. Go to directory Oracle: 
```bash
cd Oracle
```
3. Install modulle:
```bash
npm install
```
4. Into [truffle-config.js](https://github.com/kostiask/Mako2/blob/b5079509fed42840f3987b1477ad849ec321106c/Oracle/truffle-config.js#L36) put blockchain and account data:
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
5. Compile Smart Contract: 
```bash
truffle compile
```
6. Deploy Smart Contract:
```bash
truffle migrate
```
If you using Besu: 
```bash
truffle migrate --network besuWallet
```
Po wykonaniu polecenia w terminale pojawi sie address nowego contractu Oraclu:
![alt text](https://github.com/kostiask/Mako2/blob/master/img/1.png?raw=true) 

7. Address z punktu 5 trzebo umiescic w pliku [js_Oracle/index.js](https://github.com/kostiask/Mako2/blob/ba130171d9b289831d5abf177dad010e3ba3a1ad/js_Oracle/index.js#L100):
```js
const addressOracle = "<address-Oracle-contract>";
```
i w pliku [dapp/contracts/oracleAPI.sol](https://github.com/kostiask/Mako2/blob/ba130171d9b289831d5abf177dad010e3ba3a1ad/dapp/contracts/oracleAPI.sol#L11):
```sol
address OracleAddress = <address-Oracle-contract>;
```
8. Go to directory js_Oracle:
```bash
cd ../js_Oracle
```
9. Install module:
```bash
npm install
```
10. In [index.js](https://github.com/kostiask/Mako2/blob/ba130171d9b289831d5abf177dad010e3ba3a1ad/js_Oracle/index.js#L147) put blockchain websocket address: 
```js
web3 = new Web3(new Web3.providers.WebsocketProvider('<blockchain-websocket>'));
```
11. In [index.js](https://github.com/kostiask/Mako2/blob/ba130171d9b289831d5abf177dad010e3ba3a1ad/js_Oracle/index.js#L5) put private account key(0x.....) for signing transactions:
```js
const privateKey = "<private-key-account>";
```
12. Start an application: 
```bash
node index.js
```
13. In the new terminal window, go from the main directory to the [dapp](https://github.com/kostiask/Mako2/tree/master/dapp) directory 
```bash
cd dapp
```
14. Install module:
```bash
npm install
```
15. Follow step 2 from the instructions for the file [truffle-config.js](https://github.com/kostiask/Mako2/blob/b5fa28dca04603b9058bb201b86c0f2afc8dfba4/dapp/truffle-config.js).
      
16. Compile Smart Contracts: 
```bash
truffle compile
```
17. Deploy Smart Contracts:
```bash
truffle migrate
```
If you using Besu: 
```bash
truffle migrate --network besuWallet
```
Po wykonaniu polecenia w terminale pojawi sie address nowego contractu Oraclu:
![alt text](https://github.com/kostiask/Mako2/blob/master/img/2.png?raw=true) 
18. Smart contract sddress of point 16 of the instruction must be inserted into the file [dapp/client/src/app.js](https://github.com/kostiask/Mako2/blob/0bf20725b176d49ee7f1de1e6638effce14e23a2/dapp/client/src/app.js#L9):
```js
address: "<smart-contract-RDF-address>",
```
19. From root directory, go to the directory [server](https://github.com/kostiask/Mako2/tree/master/server):
```bash
cd ../server
```
20. Start server, which will return the graph:
```bash
node server.js
```
21. In a new terminal window, from the root directory, go to the directory [dapp/client](https://github.com/kostiask/Mako2/tree/master/dapp/client)
```bash
cd dapp/client
```
22. Install module:
```bash
npm install
```
23. Start app: 
```bash
npm run dev
```
### Metamask
1. In Metamask connect to proper blockchain network.
![alt text](https://www.trufflesuite.com/img/tutorials/pet-shop/metamask-networkmenu.png) 
