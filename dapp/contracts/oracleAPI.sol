// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

abstract contract IOracle{
    function createRequest (string memory, string memory) public virtual;
    function updateRequest (uint _id, string memory _valueRetrieved) public virtual;
}

contract OracleAPI{

    address OracleAddress = <address-Oracle-contract>;

    IOracle oracle = IOracle(OracleAddress);

    constructor() {
    }

}
