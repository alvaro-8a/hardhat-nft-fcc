const { assert, expect } = require("chai")
const { network, getNamedAccounts, ethers, deployments } = require("hardhat")
const { developmentChains, networkConfig } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("BasicNFT Unit Tests", function () {
          let randomIpfsNft, deployer, chainId, tokenUris, mintFee, vrfCoordinatorV2Mock

          beforeEach(async function () {
              deployer = (await getNamedAccounts()).deployer
              await deployments.fixture(["randomIPFS", "mocks"])
              randomIpfsNft = await ethers.getContract("RandomIpfsNft")
              chainId = network.config.chainId
              tokenUris = [
                  "ipfs://QmWftbwkJZHAA1mVBxJ1Gn3EPzGc8qvcWz5V7ZHpGcroM6",
                  "ipfs://QmSdKZHnStsM6g2QmX6x1qC1mjGjPhaw61CzUx4B3EwRsw",
                  "ipfs://QmQ1qRt7GWNq1tHVmyir3FJqfjPjdT2EbyYs4VNUbKg541",
              ]
              mintFee = networkConfig[chainId].mintFee
              vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
          })

          describe("constructor", function () {
              it("Check mint fee and dog token URIs", async function () {
                  const contractMintFee = await randomIpfsNft.getMintFee()
                  assert.equal(mintFee.toString(), contractMintFee.toString())
                  assert.equal(tokenUris[2], await randomIpfsNft.getDogTokenUris(2))
              })
          })

          describe("requestNft", function () {
              it("Revert if don't send enough money", async function () {
                  await expect(randomIpfsNft.requestNft()).to.be.revertedWith(
                      "RandomIpfsNFT__NotEnoughETHSent"
                  )
              })

              it("Request Random Words and emits event", async () => {
                  await expect(randomIpfsNft.requestNft({ value: mintFee })).to.emit(
                      randomIpfsNft,
                      "NftRequested"
                  )
              })
          })

          // fulfill random words
          describe("fulfillRandomWords", function () {
              it("Mints after returning random words", async function () {
                  await new Promise(async (resolve, reject) => {
                      randomIpfsNft.once("NftMinted", async () => {
                          try {
                              const tokenUri = await randomIpfsNft.tokenURI(0)
                              const tokenCounter = await randomIpfsNft.getTokenCounter()
                              assert(tokenUri.toString().includes("ipfs://"))
                              assert(tokenCounter.toString(), "1")
                              resolve()
                          } catch (error) {
                              console.log(error)
                              reject(error)
                          }
                      })

                      // Llamar para que se ejecute la funcion
                      try {
                          const requestNftResponse = await randomIpfsNft.requestNft({
                              value: mintFee,
                          })
                          const requestNftReceipt = await requestNftResponse.wait(1)

                          await vrfCoordinatorV2Mock.fulfillRandomWords(
                              requestNftReceipt.events[1].args.requestId,
                              randomIpfsNft.address
                          )
                      } catch (error) {
                          console.log(error)
                          reject(error)
                      }
                  })
              })
          })

          describe("GetBreedFromModdedRng", function () {
              it("Revert if range out of bounds", async () => {
                  await expect(randomIpfsNft.getBreedFromModdedRng(150)).to.be.revertedWith(
                      "RandomIpfsNFT__RangeOutOfBounds"
                  )
              })
          })
      })

module.exports.tags = ["all", "randomIpfsNftTest"]
