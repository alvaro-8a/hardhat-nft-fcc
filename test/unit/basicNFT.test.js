const { assert } = require("chai")
const { network, getNamedAccounts, ethers, deployments } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("BasicNFT Unit Tests", function () {
          let basicNFT, deployer

          beforeEach(async function () {
              deployer = (await getNamedAccounts()).deployer
              await deployments.fixture(["basicNFT"])
              basicNFT = await ethers.getContract("BasicNFT")
          })

          it("Allows users to mint and updates counter and tokenURI", async function () {
              const txResponse = await basicNFT.mintNFT()
              await txResponse.wait(1)
              const counter = await basicNFT.getTokenCounter()
              const tokenURI = await basicNFT.tokenURI(0)

              assert.equal(counter.toString(), "1")
              assert.equal(tokenURI, await basicNFT.TOKEN_URI())
          })
      })

module.exports.tags = ["all", "basicNftTest"]
