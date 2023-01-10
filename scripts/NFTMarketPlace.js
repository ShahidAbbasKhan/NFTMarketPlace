const hre = require("hardhat");

async function main() {
  
  const NFTMarketPlace = await hre.ethers.getContractFactory("NFTMarketPlace");
  const nft = await NFTMarketPlace.deploy();

  await nft.deployed();

  console.log(
    `NFTMarketPlace Contract is deployed to ${nft.address}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0x609D8b863e00f67696e3588130a8BeB46e175669