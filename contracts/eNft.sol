//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ENFT is ERC721 {

    constructor() ERC721("Evans NFT", "eNFT") {
        _mint( 0xBd032b770f364605BfE8D16E27ae4D241b9061c8, 1);
    }

}