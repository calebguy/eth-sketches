pragma solidity ^0.8.13;

import "solmate/tokens/ERC1155.sol";

contract MockERC1155 is ERC1155 {
    function uri(uint256 id) public view override returns (string memory) {
        return "https://test.com/metadata/{id}.json";
    }

    function mint(uint256 id, uint256 amount) public {
        _mint(msg.sender, id, amount, "");
    }
}
