// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MetaToken is ERC721A {
    address public owner;

    // Base url for the nfts
    string baseUrl =
        "https://gateway.pinata.cloud/ipfs/QmYPzpno3febYhoxsrHGhCTQUntsUbfAA7nJLMEzAgEp67/";

    //  for the prompt description
    string[] public description ;
    constructor() ERC721A("AINFT", "AFT") {
        owner = msg.sender;
    }

    // Modifier that only allows the owner to execute a function
    modifier ownerAllowed() {
        require(msg.sender == owner, "Only owner can perform this action!");
        _;
    }

    function promptUsed()public {
        description.push("a snowy city");
        description.push("a reddish city painting");
        description.push("A large structure in centre of city");
        description.push("a beautiful morning scene");
        description.push("A new era modern painting");
    }
    // Function to mint NFT which only owner can perform
    function mint(uint256 quantity) external payable ownerAllowed() {
        require(quantity <= 5,"only 5 nfts to be minted");
            
        _mint(msg.sender, quantity);
    }

    // Override the baseURI function to return the base URL for the NFTs
    function _baseURI() internal view override returns (string memory) {
        return baseUrl;
    }

    // Return the URL for the prompt description
    function promptDescription() external view returns (string[] memory) {
        return description;
    }
}