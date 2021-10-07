pragma solidity >=0.4.22 <0.9.0;

abstract contract IOracle{
    function createRequest (string memory, string memory) public virtual;
    function updateRequest (uint _id, string memory _valueRetrieved) public virtual;
}

contract OracleAPI{

    address OracleAddress = 0xc9f4e7aACe3314017dFF14455E17e2B28DBeEc2E;

    IOracle oracle = IOracle(OracleAddress);

    constructor() {
    }

}
