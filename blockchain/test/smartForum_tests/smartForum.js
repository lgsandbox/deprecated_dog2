const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("smartForum", function () {
  it("Generate forum for user", async function () {

    const Forum = await ethers.getContractFactory("SmartForum");

    const smartForum = await Forum.deploy();
    smartForum;
    expect(await console.log("Forum address created @",smartForum.address));


  });
});