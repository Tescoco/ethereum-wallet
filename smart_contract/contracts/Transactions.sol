pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionsCounter;

    event Transfer(
        address from,
        address recever,
        uint256 amount,
        string message,
        uint256 tiestamp,
        string keyword
    );

    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockChain() public {}

    function addToBlockChain() public {}

    function addToBlockChain() public {}
}
