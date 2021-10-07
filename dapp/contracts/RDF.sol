pragma solidity >=0.4.22 <0.9.0;
pragma abicoder v2;


import "./oracleAPI.sol";


contract RDF is OracleAPI {

    event LogNewProvableQuery(string description);
    event LogNewProvableResult(string result);

    uint256 public grafCounter = 0;

    mapping(uint256 => string[]) graphs;

    constructor() {
    }

    function uploadGraph(string memory _request) public payable{
        // emit LogNewProvableQuery("Provable query was sent, standing by for the answer...");
        oracle.createRequest(_request,"");
    }

    function __callback(string memory _result) public {
        require(msg.sender == OracleAddress);
        string[] memory tmp = split(_result);
        graphs[grafCounter] = tmp;
        grafCounter++;
        emit LogNewProvableQuery("Upload graf");
    }

    function saveEditGraph(string[] memory _graph) public {
        // require(msg.sender == OracleAddress);
        // string[] memory tmp = split(_result);
        graphs[grafCounter] = _graph;
        grafCounter++;
        emit LogNewProvableQuery("Upload graf");
    }

    function split(string memory _ontology_terms) private pure returns(string[] memory){
        uint256 ile = 0; 
        bytes memory stringAsBytesArray = bytes(_ontology_terms);
        // require(ile == 100, "Nie prawilnj string");
        require(stringAsBytesArray[0] == '<', "Nie prawilnj string");
        // require(stringAsBytesArray[stringAsBytesArray.length - 1] == '>', "Nie prawilnj string");
        for(uint256 i = 0; i < stringAsBytesArray.length; i++){
            if(stringAsBytesArray[i] == '<'){
                ile++;
            }
        }

        string[] memory array = new string[](ile);
        ile = 0;
        uint256 count = 0;
        bytes memory tmp;

        for(uint256 i = 0; i < stringAsBytesArray.length; i++){
            if(count == 0){
                for(uint256 j = i; j < stringAsBytesArray.length; j++){
                    if(stringAsBytesArray[j] != '>'){
                        count++;
                    } else {
                        count++;
                        tmp = new bytes(count);
                        count = 0;
                        break;
                    }
                }
            }
            if(stringAsBytesArray[i] != '>'){
                tmp[count++] = stringAsBytesArray[i];
            } else {
                tmp[count++] = stringAsBytesArray[i];
                array[ile++] = string(tmp);
                count = 0;
            }
        }

        return array;
    } 

    function getGraf(uint256 _id) public view returns(string[] memory){
        string[] memory tmp = new string[](graphs[_id].length);
        for(uint256 i = 0; i < graphs[_id].length; i++){
            tmp[i] = graphs[_id][i];
        }
        return tmp;
    }

}
