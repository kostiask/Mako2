// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;
pragma abicoder v2;

import "./oracleAPI.sol";

contract RDF is OracleAPI {

    event LogNewProvableQuery(string description);
    event LogNewProvableResult(string result);

    uint256 public grafCounter = 0;

    struct Graph{
      address owner;
      uint256 date;
      string[] triplets;
    }

    mapping(uint256 => Graph) graphs;

    address private owner;

    constructor() {
    }

    function uploadGraph(string memory _request) public payable{
        // emit LogNewProvableQuery("Provable query was sent, standing by for the answer...");
        owner = msg.sender;
        oracle.createRequest(_request,"");
    }

    function __callback(string memory _result) public {
        require(msg.sender == OracleAddress);
        string[] memory tmp = split(_result);
        graphs[grafCounter].triplets = tmp;
        graphs[grafCounter].owner = owner;
        graphs[grafCounter].date = block.timestamp;
        grafCounter++;
        emit LogNewProvableQuery("Upload graf");
    }

    function saveEditGraph(string[] memory _graph) public {
        // require(msg.sender == OracleAddress);
        // string[] memory tmp = split(_result);
        /* graphs[grafCounter] = _graph; */

        graphs[grafCounter].triplets = _graph;
        graphs[grafCounter].owner = msg.sender;
        graphs[grafCounter].date = block.timestamp;

        grafCounter++;
        emit LogNewProvableQuery("Upload graf");
    }

    function split(string memory _ontology_terms) private pure returns(string[] memory){
        uint256 ile = 0;
        bytes memory stringAsBytesArray = bytes(_ontology_terms);
        require(stringAsBytesArray[0] == '<', "Incorrect data format.");
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
      /* require(_id >= grafCounter, "Grafa o takim indyfikatorze nie istnieje."); */
      string[] memory tmp = new string[](graphs[_id].triplets.length);
      for(uint256 i = 0; i < graphs[_id].triplets.length; i++){
        tmp[i] = graphs[_id].triplets[i];
      }
      return tmp;
    }

    function getOwner(uint256 _id) public view returns(address _owner){
      /* return owners[_id]; */
      /* require(_id >= grafCounter, "Grafa o takim indyfikatorze nie istnieje."); */
      return graphs[_id].owner;
    }

    function getDateTime(uint256 _id) public view returns(uint256 _date){
      /* require(_id >= grafCounter, "Grafa o takim indyfikatorze nie istnieje."); */
      return graphs[_id].date;
    }

    function check_rdf(uint256 _id, string[] memory _rdf_terms) public view returns(string memory){
      string memory str = "";

      for(uint256 i = 0; i < _rdf_terms.length; i++){
        for(uint256 j = 0; j < graphs[_id].triplets.length; j++){
          if(bytes(_rdf_terms[i]).length == bytes(graphs[_id].triplets[j]).length){
            string memory tmp = graphs[_id].triplets[j];
            if(keccak256(bytes(_rdf_terms[i])) == keccak256(bytes(tmp))){
              /* tab.push(_rdf_terms[i]); */
              str = string(abi.encodePacked(str, _rdf_terms[i]));
              break;
            }
          }
        }
      }

      return str;
    }

}
