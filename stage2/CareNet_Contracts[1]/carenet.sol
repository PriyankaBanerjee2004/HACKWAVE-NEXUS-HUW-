// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DonationContract {
    address public owner;
    mapping(address => uint256) public donations;

    event DonationReceived(address indexed from, uint256 amount);
    event Withdrawal(address indexed to, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can perform this action");
        _;
    }

    function donate() external payable {
        require(msg.value > 0, "Donation amount must be greater than 0");
        donations[msg.sender] += msg.value;
        emit DonationReceived(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) external onlyOwner {
        require(amount > 0, "Withdrawal amount must be greater than 0");
        require(amount <= address(this).balance, "Insufficient contract balance");
        payable(owner).transfer(amount);
        emit Withdrawal(owner, amount);
    }

    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
