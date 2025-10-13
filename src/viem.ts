// Base mainnet + Base Sepolia IDs (per viem)
export const BASE = {
  id: 8453,
  name: 'Base',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://base-mainnet.g.alchemy.com/v2/DN_2iNz6IGdOy9a9n7Px6', 'https://mainnet.base.org'] }, // 앱/웹에서 env RPC로 override 권장
  },
  blockExplorers: {
    default: { name: 'Basescan', url: 'https://basescan.org' },
  },
};

export const BASE_SEPOLIA = {
  id: 84532,
  name: 'Base Sepolia',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: { default: { http: ['https://base-sepolia.g.alchemy.com/v2/DN_2iNz6IGdOy9a9n7Px6', 'https://sepolia.base.org'] } },
  blockExplorers: {
    default: { name: 'Base Sepolia', url: 'https://sepolia-explorer.base.org' },
  },
  testnet: true,
};

export const USDC_DECIMALS = 6;