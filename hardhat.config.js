require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: ["ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"],
    },
    goerli: {
      url: 'https://ethereum-goerli.publicnode.com',
      accounts: ["2160702757ea47f08d7cbc21be51b0e6be8953dc3c912d9ab441fa9eae001021"],
    },
  }
};
