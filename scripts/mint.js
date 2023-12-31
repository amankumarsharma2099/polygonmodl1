// Script for Batch Mint

// Import required libraries
const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  // Get private key from env
  const privateKey = "2160702757ea47f08d7cbc21be51b0e6be8953dc3c912d9ab441fa9eae001021";

  // The URL of the network provider
  const networkAddress = "https://ethereum-goerli.publicnode.com";

  // Create a provider using the URL
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Create a signer from the private key and provider
  const signer = new ethers.Wallet(privateKey, provider);

  // Tthe address of the deployed contract
  const contractAddress = "0x97E57A95bb925CDb4A654A454d7EF5ED819111eA";

  // Get the contract factory and attach it to the signer
  const NFT = await ethers.getContractFactory("MetaToken", signer);
  const contract = await NFT.attach(contractAddress);

  // Call the mint function on the contract to mint 5 tokens
  await contract.mint(5);

  // Log a message to the console to indicate that the tokens have been minted
  console.log("Your 5 tokens are successfully minted.");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });