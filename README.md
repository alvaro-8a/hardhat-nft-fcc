# NFT Smart Contracts Hardhat Project

<div id="top"></div>


[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- ABOUT THE PROJECT -->
## About The Project

Check the BasicNFT Smart Contract deployed:
- [Rinkeby Etherscan](https://rinkeby.etherscan.io/address/0x6Cf2fFFF4EB83E5E39B488f92eca32b5D18C9521#code)
- [OpenSea](https://testnets.opensea.io/collection/dogie-alvaro-8a)

Check the RandomIpfsNft Smart Contract deployed:
- [Rinkeby Etherscan](https://rinkeby.etherscan.io/address/0xC8c73713614f208B509Bd87731014e519207851E#code)
- [OpenSea](https://testnets.opensea.io/collection/random-ipfs-nft-alvaro-8a)

Check the DynamicSvgNft Smart Contract deployed:
- [Rinkeby Etherscan](https://rinkeby.etherscan.io/address/0x46134C95e1a6898d2c7F6Ebef4fbEef210C33af0#code)
- [OpenSea](https://testnets.opensea.io/collection/dynamic-svg-nft-alvaro-8a)

All the code was developed for learning purposes and is from [Learn Blockchain, Solidity, and Full Stack Web3 Development with JavaScript – 32-Hour Course](https://www.youtube.com/watch?v=gyMwXuJrbJQ&lis) by freeCodeCamp.org and Patrick Collins

The project represents different ways to create an NFT. It includes 3 contracts:

1. Basic NFT - Simple ERC721 token with metadata stored on IPFS

2. Random IPFS NFT - Random NFT generated at mint time between 3 possibilities. This random NFT is selected using the Chainlink VRF Random Number generator.

The Pug has a 10% probability
The Shiba Inu has a 20% 
The St. Bernard has a 70%

This NFTs have the metadata also on IPFS

- Pros: Cheap
- Cons: Someone needs to pin our data

3. Dynamic SVG NFT - Creates a dynamic SVG NFT that changes the image depending on the price of ETH. It uses the Chainlink Price Feed for ETH / USD

The user sets a value to make the NFT change when calling the mint function.

If the price is above the stablished value at minting, the NFT will show a Happy face

If the price is below, the NFT will show a Sad face

- Pros: The data is on chain!
- Cons: MUCH more expensive!



It includes tests for the contracts and deployment functions for hardhat and real networks (ethereum, rinkeby, polygon...)

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

<p align="right">(<a href="#top">back to top</a>)</p>



### Etherscan verification

This project also includes automatic verification of the contract for real networks. The verification is only executed when running on real networks

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org/)
* [Solidity](https://docs.soliditylang.org/)
* [Hardhat](https://hardhat.org/)
* [Chainlink VRF & Price Feed](https://docs.chain.link/ethereum/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Make sure you have already installed Node.js in your device. Also make sure you have yarn installed, in case you don't, install it:

* yarn
  ```sh
  npm install --global yarn
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/alvaro-8a/hardhat-nft-fcc.git
   ```
2. Install YARN packages
   ```sh
   yarn install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

You can use this code it as a template to develop your own NFTs contract, there are many improvements that can be done so feel free to make any change.

This repo can also be used to learn about testing Smart Contract on hardhat, there are some tests written to understand the basics but you can write new one or redesign mines to fit you. 

You can also use it to deploy your own raffle smart contract to a Solidity supported Blockchain (Ethereum, Polygon, BSC...).

**Note: This project is a demo and I don't recommend using it without changes, there are many things that can be improved so take in consideration before using it.**


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [✔️] Basic NFT Smart Contract
- [✔️] Deploy Basic NFT
- [✔️] Tested Basic NFT on local (Hardhat)
- [✔️] Random IPFS NFT Smart Contract
- [✔️] Deploy Random IPFS NFT
- [✔️] Tested Random IPFS NFT on local (Hardhat)
- [✔️] Dynamic SVG NFT Smart Contract
- [✔️] Deploy Dynamic SVG NFT
- [✔️] Tested Dynamic SVG NFT on local (Hardhat)
- [✔️] Deploy all the contracts to Rinkeby
- [✔️] Verify contracts on real networks
- [✔️] Test mint on Rinkeby

See the [open issues](https://github.com/alvaro-8a/hardhat-nft-fcc/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion or an improvement that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@alvaro_8a_](https://twitter.com/alvaro_8a_) - alvaroblanco8a@gmail.com

Project Link: [https://github.com/alvaro-8a/hardhat-nft-fcc](https://github.com/alvaro-8a/hardhat-nft-fcc)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Learn Blockchain, Solidity, and Full Stack Web3 Development with JavaScript – 32-Hour Course](https://www.youtube.com/watch?v=gyMwXuJrbJQ&lis)
* [Patrick Collins](https://www.youtube.com/c/PatrickCollins)
* [FreeCodeCamp.org](https://www.youtube.com/c/Freecodecamp)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/alvaro-8a/hardhat-nft-fcc.svg?style=for-the-badge
[contributors-url]: https://github.com/alvaro-8a/hardhat-nft-fcc/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/alvaro-8a/hardhat-nft-fcc.svg?style=for-the-badge
[forks-url]: https://github.com/alvaro-8a/hardhat-nft-fcc/network/members
[stars-shield]: https://img.shields.io/github/stars/alvaro-8a/hardhat-nft-fcc.svg?style=for-the-badge
[stars-url]: https://github.com/alvaro-8a/hardhat-nft-fcc/stargazers
[issues-shield]: https://img.shields.io/github/issues/alvaro-8a/hardhat-nft-fcc.svg?style=for-the-badge
[issues-url]: https://github.com/alvaro-8a/hardhat-nft-fcc/issues
[license-shield]: https://img.shields.io/github/license/alvaro-8a/hardhat-nft-fcc.svg?style=for-the-badge
[license-url]: https://github.com/alvaro-8a/hardhat-nft-fcc/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/alvaro-blanco-ochoa-9b14561a9
[product-screenshot]: images/screenshot.png
