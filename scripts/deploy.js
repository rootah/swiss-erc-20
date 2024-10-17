const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Rootah = await hre.ethers.getContractFactory("Rootah");

  // Deploy the contract
  const token = await Rootah.deploy(deployer.address);

  // Wait for the contract to be mined
  await token.waitForDeployment();

  // Get the deployed contract address
  const tokenAddress = await token.getAddress();

  console.log("Token deployed to:", tokenAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});