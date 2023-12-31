import { MetaMaskSDK } from '@metamask/sdk';
import Web3 from 'web3';
import MINT_NFT_ABI from '@/lib/mintNFT.json';
import SALE_NFT_ABI from '@/lib/saleNft.json';
const MMSDK = new MetaMaskSDK();

export const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum

export const web3 = new Web3(ethereum);
const MINT_NFT_ADDRESS = '0xE07675529794B77B193a42eb1375b6d8b4fAeA87';
const SALE_NFT_ADDRESS = '0x8aED796D37363A5bE66446E1e1c0b8904f8e473B';

export const mintNftContract = new web3.eth.Contract(
  MINT_NFT_ABI,
  MINT_NFT_ADDRESS
);
export const saleNftContract = new web3.eth.Contract(
  SALE_NFT_ABI,
  SALE_NFT_ADDRESS
);

export const MUMBAI_CHAIN_ID = 80001;

export const PINATA_URL =
  'https://olbm.mypinata.cloud/ipfs/QmU52T5t4bXtoUqQYStgx39DdXy3gLQq7KDuF1F9g3E9Qy';

export interface INft {
  name: string;
  description: string;
  image: string;
  attributes: {
    trait_type: string;
    value: string;
  }[];
}
