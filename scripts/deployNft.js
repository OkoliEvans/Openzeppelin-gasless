const { ethers } = require('hardhat');

async function main() {

    

    const signer = "0xBd032b770f364605BfE8D16E27ae4D241b9061c8";
    const ENFT = await ethers.getContractFactory("ENFT");
    const eNft = await ENFT.deploy();
    await eNft.deployed();
    console.log(`NFT: ${eNft.address}`);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
//  hardhat verify --contract contracts/Example.sol:ExampleContract CONTRACT ADDRESS