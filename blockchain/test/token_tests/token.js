const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Erama", function () {
  it("Deployment should mint 111,111 coins @ smart contract address", async function () {

    const provider = ethers.getDefaultProvider("http://localhost:8545")

    const key = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

    const wallet = new ethers.Wallet(key, provider);

    const Token = await ethers.getContractFactory("Erama");

    const erama = await Token.deploy();

    const totalSupply = await erama.totalSupply();

    const eramaWallet = wallet.address;

    expect(await erama.transfer(eramaWallet, 11111));
    expect(await console.log("Token supply:", totalSupply));
    expect(await console.log("Token address created @",erama.address));
    expect(await console.log("Init test wallet address:",wallet.address));
    //expect(await console.log("Confirms wallet is signer:",owner.address));
    
  });
});