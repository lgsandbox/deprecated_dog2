const hre = require("hardhat");
const ethers = hre.ethers;



async function main() {

    const SmartForum = await ethers.getContractFactory("SmartForum");
    const forum = await SmartForum.deploy();

    await forum.deployed("testnet deployment script");
    console.log("First forum generated with deploy script @", forum.address)

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });