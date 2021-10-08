# Mako2

Co potrzebho:
 * NodeJs
 * Truffle
 * Metamask

Klonowanie repozaritorium:
```
git clone https://github.com/kostiask/Mako2.git && cd Mako2
```

## Deployowanie smart contraktu Oracle
1. Przejsc do katologu Oracle: 
```cd Oracle```
2. Uzupelnic plik truffle-config.js. Trzebo podac dane blockczaina i akaunta.
3. Zokmpilowac sc: 
```truffle compile```
4. Zdeplijowac sc: 
```truffle migrate```

## Aplikacja js_Oracle
1. Przejsc do katologu js_Oracle: 
```cd js_Oracle```
2. Otworzyc plik index.js
3. Podstawic websocket blockczaina: 
```
  web3 = new Web3(new Web3.providers.WebsocketProvider("<websocket>"));
```
4. Podstawic address sc Oracle:
```
const address = "<address Oracle contract>";
```
5. Zapuscic aplikacje: 
```node index.js```

## Deployowanie smart contraktu RDF
1. Przejsc do katologu dapp:
```cd dapp```
2. Uzupelnic plik truffle-config.js. Trzebo podac dane blockczaina i akaunta.
3. W pliku contracts/oracleAPI.sol dodac address sc Oracle:
```
address OracleAddress = <address Oracle contract>;
```
4. Zokmpilowac sc: 
```truffle compile```
5. Zdeplijowac sc: 
```truffle migrate```

## Aplikacja clijencks
1. Przejsc do katalogu dapp/client/src: ```cd dapp/client/src```
2. Otworzyc plik app.js i dodaj adres smart contraktu RDF:
```
const rdf = new web3.eth.Contract(
      data.abi,
      "<address RDF contract>"
      );
```
3. Przejsc do katologu dapp/client
4. Uruchomic client: 
```npm run dev```
