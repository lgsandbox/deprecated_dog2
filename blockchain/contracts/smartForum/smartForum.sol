// contracts/smartForum/smartForum.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract SmartForum {

    event NewForum(string name, address ownerAddress);
  
    struct Data {
        string name;
        address addr;
    }

    Data[] forums;

    function createForum(string memory name) public {
        address ownerAddress = msg.sender;
        forums.push(Data(name, ownerAddress));
        emit NewForum(name, ownerAddress);
    } 

    function returnForumData() public view returns (Data[] memory) {
        return forums;       
    } 
}
