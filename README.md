# Mako2

Co potrzebho:
 * NodeJs - https://nodejs.org/en/download/
 * Truffle - https://www.trufflesuite.com/truffle
 * Metamask - https://metamask.io/download.html

Clone the repository to the user's home directory and go to the project directory:
```bash
cd "${HOME}" && git clone https://github.com/kostiask/Mako2.git && cd Mako2
```

## Deployowanie smart contraktu Oracle
1. Przejsc do katologu Oracle: 
```bash
cd Oracle
```
2. Uzupelnic plik truffle-config.js. Trzebo podac dane blockczaina i akaunta.
3. Skompilowac sc: 
```bash
truffle compile
```
4. Zdeplijowac sc: 
```bash
truffle migrate
```

## Aplikacja js_Oracle
1. Przejsc do katologu js_Oracle: 
```bash
cd js_Oracle
```
2. Zainstalowac moduli:
```bash
npm install
```
3. Otworzyc plik index.js
4. Podstawic websocket blockczaina: 
```js
web3 = new Web3(new Web3.providers.WebsocketProvider("<websocket>"));
```
5. Podstawic address sc Oracle:
```js
const address = "<address Oracle contract>";
```
6. Zapuscic aplikacje: 
```bash
node index.js
```

## Deployowanie smart contraktu RDF
1. Przejsc do katologu dapp:
```bash
cd dapp
```
2. Uzupelnic plik truffle-config.js. Trzebo podac dane blockczaina i akaunta.
3. W pliku contracts/oracleAPI.sol dodac address sc Oracle:
```sol
address OracleAddress = <address Oracle contract>;
```
4. Zkompilowac sc: 
```bash
truffle compile
```
5. Zdeplijowac sc: 
```bash
truffle migrate
```

## Aplikacja clijencks
1. Przejsc do katalogu dapp/client/src: 
```bash
cd dapp/client/src
```
2. Zainstalowac moduli:
```bash
npm install
```
3. Otworzyc plik app.js i dodaj adres smart contraktu RDF:
```js
const rdf = new web3.eth.Contract(
      data.abi,
      "<address RDF contract>"
      );
```
4. Przejsc do katologu dapp/client
5. Uruchomic client: 
```bash
npm run dev
```
