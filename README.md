# Mako2

Klonowanie repozaritorium:
git clone https://github.com/kostiask/Mako2.git && cd Mako2

## Deployowanie smart contraktu Oracle
1. Przejsc do katologu Oracle: cd Mako2
2. Uzupelnic plik truffle-config.js. Trzebo podac dane blockczaina i akaunta.
3. Zokmpilowac sc: truffle compile
4. Zdeplijowac sc: truffle migrate

## Aplikacja js_Oracle
1. Przejsc do katologu js_Oracle: cd js_Oracle
2. Otworzyc plik index.js
3. Podstawic websocket blockczaina: 
```
  web3 = new Web3(new Web3.providers.WebsocketProvider("<websocket>"));
```
4. Podstawic address sc Oracle:
```
const address = "<address>";
```
