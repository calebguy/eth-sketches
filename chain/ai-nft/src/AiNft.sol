// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "solmate/tokens/ERC721.sol";
import "solmate/tokens/ERC1155.sol";
import "solmate/auth/Owned.sol";

// import "forge-std/console.sol";

error MaxSupplyReached();
error TokenDoesNotExist();
error AlreadyMinted();

contract AiNft is ERC721, ERC1155TokenReceiver, ERC721TokenReceiver, Owned {
    string public URI;
    uint256 public maxSupply = 1000;
    uint256 public totalSupply = 0;
    mapping(address => bool) public addressHasMinted;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _uri
    ) ERC721(_name, _symbol) Owned(msg.sender) {
        URI = _uri;
    }

    function tokenURI(uint256 id) public view override returns (string memory) {
        if (_ownerOf[id] == address(0)) {
            revert TokenDoesNotExist();
        }
        return URI;
    }

    function setURI(string memory _uri) public onlyOwner {
        URI = _uri;
    }

    function _mintTo(address mintTo) internal {
        if (addressHasMinted[mintTo]) revert AlreadyMinted();
        if (totalSupply + 1 > maxSupply) revert MaxSupplyReached();

        unchecked {
            uint256 tokenId = totalSupply + 1;
            totalSupply++;
            addressHasMinted[mintTo] = true;
            _mint(mintTo, tokenId);
        }
    }

    function onERC1155Received(
        address,
        address from,
        uint256,
        uint256,
        bytes calldata
    ) external override returns (bytes4) {
        _mintTo(from);
        return this.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(
        address,
        address from,
        uint256[] calldata,
        uint256[] calldata,
        bytes calldata
    ) external override returns (bytes4) {
        _mintTo(from);
        return this.onERC1155BatchReceived.selector;
    }

    function onERC721Received(
        address,
        address from,
        uint256,
        bytes calldata
    ) external override returns (bytes4) {
        _mintTo(from);
        return this.onERC721Received.selector;
    }
}
