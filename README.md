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

### Smart contract Oracle deploy
1. Go to directory Oracle: 
```bash
cd Oracle
```
2. Into Truffle-config.js put blockchain and account data:
```js
development: {
      host: '<host blockchain>',
      port: <port>,
      network_id: '*',
      from: <address account>
    }
```
3. Compile Smart Contract: 
```bash
truffle compile
```
4. Deploy Smart Contract:
```bash
truffle migrate
```

### js_Oracle application
1. Go to js_Oracle directory: 
```bash
cd js_Oracle
```
2. Install module:
```bash
npm install
```
3. In index.js put blockchain websocket address: 
```js
web3 = new Web3(new Web3.providers.WebsocketProvider("<websocket>"));
```
4. In index.js put address of Oracle SC:
```js
const address = "<address Oracle contract>";
```
5. Start an application: 
```bash
node index.js
```

### RDF SC deployment
1. Go to dapp directory:
```bash
cd dapp
```
2. Into truffle-config.js put blockchain and account data:
```js
development: {
      host: '<host blockchain>',
      port: <port>,
      network_id: '*',
      from: <address account>
    }
```
4. Add Oracle SC address into contracts/oracleAPI.sol file:
```sol
address OracleAddress = <address Oracle contract>;
```
4. Compile Smart Contract: 
```bash
truffle compile
```
5. Deploy Smart Contract: 
```bash
truffle migrate
```
### Simple server which return graf
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
1. W Metamasku 
(https://www.trufflesuite.com/img/tutorials/pet-shop/metamask-networkmenu.png)
