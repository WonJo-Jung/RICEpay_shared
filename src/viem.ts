import { Chain } from "./chain";

// Base mainnet + Base Sepolia IDs (per viem)
const alchemy_network_api_key = "DN_2iNz6IGdOy9a9n7Px6";
export const sepoliaRpc = `https://base-sepolia.g.alchemy.com/v2/${alchemy_network_api_key}`;
// === RPC (Mainnet) ===
// 프론트는 공개돼도 되는 URL이지만, rate-limit 관리를 위해 백엔드 프록시 권장
// 아래는 Alchemy Base Mainnet
export const mainnetRpc = `https://base-mainnet.g.alchemy.com/v2/${alchemy_network_api_key}`;

export const BASE = {
  id: 8453,
  name: 'BASE_MAINNET',
  label: 'Base' as unknown as Chain,
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: [mainnetRpc] }, // 앱/웹에서 env RPC로 override 권장
  },
  blockExplorers: {
    default: { name: 'Basescan', url: 'https://basescan.org' },
  },
};

export const BASE_SEPOLIA = {
  id: 84532,
  name: 'BASE_SEPOLIA',
  label: 'Base Sepolia Testnet' as unknown as Chain,
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: { default: { http: [sepoliaRpc] } },
  blockExplorers: {
    default: { name: 'Sepolia Explorer', url: 'https://sepolia-explorer.base.org' },
  },
  testnet: true,
};

export const USDC_DECIMALS = 6;