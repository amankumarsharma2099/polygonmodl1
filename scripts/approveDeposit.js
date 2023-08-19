const hre = require("hardhat");
const tokenJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");
require('dotenv').config();

const tokenAddress = '0x97E57A95bb925CDb4A654A454d7EF5ED819111eA';
const tokenABI = tokenJSON.abi;
const walletAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

const fxRootContractABI = require("../fxRootContractABI.json");
const fxERC21RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

  
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC21RootAddress);
    

    const approveTx = await token.setApprovalForAll(fxERC21RootAddress, true);
    await approveTx.wait();

    console.log("Approval confirmed");
    for (let i = 1; i < 6; i++) {
    const depositTx = await fxContract.deposit(tokenAddress,walletAddress, i,'0x6566');
    await depositTx.wait();

    }
    console.log("Tokens deposited");
    
  }
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });