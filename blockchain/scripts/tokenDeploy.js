
const hre = require("hardhat");
const ethers = hre.ethers;



async function main() {

  const [deployer] = await ethers.getSigners();
  const Token = await ethers.getContractFactory("Erama");
  const erama = await Token.deploy();
  await erama.deployed();
  const totalSupply = await erama.totalSupply();
  
  console.log("Token deployed to:", erama.address);
  console.log("Total supply:", totalSupply);
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });