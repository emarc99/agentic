// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import {NeuraLecto} from "../src/Neura.sol";

contract NeuraLectoTest is Test {
    NeuraLecto private neuraLecto;
    address private owner = address(1);
    address private user = address(2);

    function setUp() public {
        vm.prank(owner);
        neuraLecto = new NeuraLecto();
    }

    function testSetBookPrice() public {
        vm.prank(owner);
        neuraLecto.setBookPrice("Ethereum Basics", 1 ether);
        assertEq(neuraLecto.bookPrices("Ethereum Basics"), 1 ether);
    }

    function testPurchaseBook() public {
        vm.prank(owner);
        neuraLecto.setBookPrice("Ethereum Basics", 1 ether);

        vm.deal(user, 2 ether);
        vm.prank(user);
        neuraLecto.purchaseBook{value: 1 ether}("Ethereum Basics", "ipfs://book-uri");

        assertEq(neuraLecto.tokenIdToBook(1), "Ethereum Basics");
    }

    function testVoteBook() public {
        vm.prank(user);
        neuraLecto.voteBook("Ethereum Basics");
        assertEq(neuraLecto.bookVotes("Ethereum Basics"), 1);
    }
}