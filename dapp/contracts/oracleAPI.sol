// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

abstract contract IOracle{
    function createRequest (string memory, string memory) public virtual;
    function updateRequest (uint _id, string memory _valueRetrieved) public virtual;
}

contract OracleAPI{

    address OracleAddress = 0xb9A219631Aed55eBC3D998f17C3840B7eC39C0cc;

    IOracle oracle = IOracle(OracleAddress);

    constructor() {
    }

}
