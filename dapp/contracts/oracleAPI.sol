// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

abstract contract IOracle{
    function createRequest (string memory, string memory) public virtual;
    function updateRequest (uint _id, string memory _valueRetrieved) public virtual;
}

contract OracleAPI{

    address OracleAddress = 0xB7A6FAA6726099c32D81aDf845F15d2285570664;

    IOracle oracle = IOracle(OracleAddress);

    constructor() {
    }

}
