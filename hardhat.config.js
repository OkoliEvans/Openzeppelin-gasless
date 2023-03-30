require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
const { HardhatUserConfig } = require("hardhat/config");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "goerli",
  
  networks: {
  hardhat: {
  },
  goerli: {
    url: process.env.GOERLI_RPC,
    //@ts-ignore
    accounts: [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY2]
  }
},

etherscan: {
  apiKey: process.env.ETHERSCAN_API,
}
};
