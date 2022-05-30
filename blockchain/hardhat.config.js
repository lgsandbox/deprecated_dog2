require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require('@nomiclabs/hardhat-ethers');

// list account task
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: '../client/src/abi/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/5VCUwtEnkKTHNFua_rMy37YqWe5JqL7p",
      accounts: ["fff78da54cb1f11ca2c46d158237c6586b87b1cda1389b4fb52f988d343815c9"]
    }
  }
};
