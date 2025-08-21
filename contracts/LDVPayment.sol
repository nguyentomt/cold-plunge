// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
}

contract LDVPayment {
    address public owner;
    address public ldvToken;
    
    event PaymentReceived(address indexed payer, uint256 amount, uint256 timestamp);
    event TokensWithdrawn(address indexed to, uint256 amount, uint256 timestamp);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "LDVPayment: caller is not the owner");
        _;
    }

    constructor(address _ldvToken) {
        require(_ldvToken != address(0), "LDVPayment: zero address");
        owner = msg.sender;
        ldvToken = _ldvToken;
    }

    function payWithLDV(uint256 amount) public {
        require(amount > 0, "LDVPayment: amount must be greater than zero");

        IERC20 token = IERC20(ldvToken);
        require(token.balanceOf(msg.sender) >= amount, "LDVPayment: insufficient balance");

        bool success = token.transferFrom(msg.sender, address(this), amount);
        require(success, "LDVPayment: transfer failed");

        emit PaymentReceived(msg.sender, amount, block.timestamp);
    }

    function withdrawTokens(address to, uint256 amount) public onlyOwner {
        require(to != address(0), "LDVPayment: zero address");
        require(amount > 0, "LDVPayment: amount must be greater than zero");

        IERC20 token = IERC20(ldvToken);
        require(token.balanceOf(address(this)) >= amount, "LDVPayment: insufficient contract balance");

        bool success = token.transfer(to, amount);
        require(success, "LDVPayment: transfer failed");

        emit TokensWithdrawn(to, amount, block.timestamp);
    }

    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "LDVPayment: zero address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    function claimLDV(uint256 amount) public {
        IERC20 token = IERC20(ldvToken);
        require(token.balanceOf(address(this)) >= amount, "LDV faucet dry");
        require(token.transfer(msg.sender, amount), "Transfer failed");
}

    function getContractBalance() public view returns (uint256) {
        return IERC20(ldvToken).balanceOf(address(this));
    }
}
