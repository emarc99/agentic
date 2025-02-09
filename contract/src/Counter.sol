// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NeuraLecto is ERC721URIStorage, Ownable {
    uint256 private _tokenIds;
    mapping(string => bool) private bookExists;
    mapping(uint256 => string) public tokenIdToBook;
    mapping(string => uint256) public bookPrices;
    mapping(string => uint256) public bookVotes;
    
    event BookPurchased(address indexed buyer, uint256 tokenId, string bookTitle, uint256 price);
    event BookVoted(string bookTitle, uint256 votes);

    constructor() ERC721("NeuraLecto", "NLT") Ownable(msg.sender) {
        _tokenIds = 0;

    }

    function setBookPrice(string memory _title, uint256 _price) public onlyOwner {
        bookPrices[_title] = _price;
    }

    function purchaseBook(string memory _title, string memory _tokenURI) public payable returns (uint256) {
        require(bookPrices[_title] > 0, "Book not available for sale");
        require(msg.value >= bookPrices[_title], "Insufficient payment");
        require(!bookExists[_title], "Book already purchased");
        
        _tokenIds++;
        uint256 newItemId = _tokenIds;
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, _tokenURI);
        
        tokenIdToBook[newItemId] = _title;
        bookExists[_title] = true;
        
        emit BookPurchased(msg.sender, newItemId, _title, msg.value);
        return newItemId;
    }

    function voteBook(string memory _title) public {
        bookVotes[_title]++;
        emit BookVoted(_title, bookVotes[_title]);
    }
}
