// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "forge-std/console.sol";
import "../src/AiNft.sol";
import "./mocks/MockERC721.sol";
import "./mocks/MockERC1155.sol";

contract AiNftTest is Test, ERC1155TokenReceiver, ERC721TokenReceiver {
    AiNft public ai;
    MockERC721 public mockERC721;
    MockERC1155 public mockERC1155;

    function setUp() public {
        ai = new AiNft("AI NFT", "AINFT", "https://localhost:3000/ai/metadata");
        mockERC721 = new MockERC721();
        mockERC1155 = new MockERC1155();
    }

    function testERC721() public {
        mockERC721.mint();
        mockERC721.safeTransferFrom(address(this), address(ai), 1);
        assertEq(ai.balanceOf(address(this)), 1);
    }

    function testSingleERC1155() public {
        uint256 tokenId = 0;
        mockERC1155.mint(tokenId, 1);
        mockERC1155.safeTransferFrom(address(this), address(ai), 0, 1, "");
        assertEq(ai.balanceOf(address(this)), 1);
    }

    function testMultipleERC1155() public {
        uint256 tokenId1 = 1;
        uint256 amount1 = 10;
        uint256 tokenId2 = 2;
        uint256 amount2 = 20;
        mockERC1155.mint(tokenId1, amount1);
        mockERC1155.mint(tokenId2, amount2);

        uint256[] memory tokenIds = new uint256[](2);
        tokenIds[0] = tokenId1;
        tokenIds[1] = tokenId2;

        uint256[] memory amounts = new uint256[](2);
        amounts[0] = amount1;
        amounts[1] = amount2;

        mockERC1155.safeBatchTransferFrom(
            address(this),
            address(ai),
            tokenIds,
            amounts,
            ""
        );
        assertEq(ai.balanceOf(address(this)), 1);
    }

    function testFailMultipleERC721Transfers() public {
        vm.expectRevert(AlreadyMinted.selector);

        mockERC721.mint();
        mockERC721.safeTransferFrom(address(this), address(ai), 1);
        assertEq(ai.balanceOf(address(this)), 1);

        mockERC721.mint();
        mockERC721.safeTransferFrom(address(this), address(ai), 2);
        assertEq(ai.balanceOf(address(this)), 1);
    }

    function testFailMultipleERC1155Transfers() public {
        vm.expectRevert(AlreadyMinted.selector);

        mockERC1155.mint(0, 5);
        mockERC1155.safeTransferFrom(address(this), address(ai), 0, 1, "");
        assertEq(ai.balanceOf(address(this)), 1);

        mockERC1155.safeTransferFrom(address(this), address(ai), 0, 1, "");
        assertEq(ai.balanceOf(address(this)), 1);
    }

    function testFailERC721ThenERC1155() public {
        vm.expectRevert(AlreadyMinted.selector);

        mockERC721.mint();
        mockERC721.safeTransferFrom(address(this), address(ai), 1);
        assertEq(ai.balanceOf(address(this)), 1);

        mockERC1155.mint(0, 1);
        mockERC1155.safeTransferFrom(address(this), address(ai), 0, 1, "");
        assertEq(ai.balanceOf(address(this)), 1);
    }

    function testMintTillMaxSupply() public {
        mintAll();
    }

    function testFailMintOverMaxSupply() public {
        vm.expectRevert(MaxSupplyReached.selector);
        mintAll();

        mockERC1155.mint(0, 1);
        mockERC1155.safeTransferFrom(address(this), address(ai), 0, 1, "");
    }

    function mintAll() internal {
        uint256 maxSupply = ai.maxSupply();
        for (uint256 i = 0; i < maxSupply; i++) {
            address caller = address(uint160(i + 1));
            vm.startPrank(caller);
            mockERC721.mint();

            mockERC721.safeTransferFrom(caller, address(ai), i + 1);
            assertEq(ai.balanceOf(caller), 1);
            vm.stopPrank();
        }
    }

    function onERC1155Received(
        address,
        address,
        uint256,
        uint256,
        bytes calldata
    ) external pure override returns (bytes4) {
        return this.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(
        address,
        address,
        uint256[] calldata,
        uint256[] calldata,
        bytes calldata
    ) external pure override returns (bytes4) {
        return this.onERC1155BatchReceived.selector;
    }

    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external pure override returns (bytes4) {
        return this.onERC721Received.selector;
    }
}
