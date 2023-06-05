pragma solidity ^0.8.13;

import "solmate/tokens/ERC721.sol";

contract MockERC721 is ERC721 {
    uint256 public totalSupply = 0;
    string public baseURI = "https://test.com/";

    constructor() ERC721("MOCKERC721", "M721") {}

    function tokenURI(uint256 id) public view override returns (string memory) {
        return string(abi.encodePacked(baseURI, id));
    }

    function mint() public {
        totalSupply++;
        _mint(msg.sender, totalSupply);
    }
}
