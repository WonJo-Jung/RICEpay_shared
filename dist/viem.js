"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USDC_DECIMALS = exports.BASE_SEPOLIA = exports.BASE = exports.mainnetRpc = exports.sepoliaRpc = void 0;
// Base mainnet + Base Sepolia IDs (per viem)
const alchemy_network_api_key = "DN_2iNz6IGdOy9a9n7Px6";
exports.sepoliaRpc = `https://base-sepolia.g.alchemy.com/v2/${alchemy_network_api_key}`;
// === RPC (Mainnet) ===
// 프론트는 공개돼도 되는 URL이지만, rate-limit 관리를 위해 백엔드 프록시 권장
// 아래는 Alchemy Base Mainnet
exports.mainnetRpc = `https://base-mainnet.g.alchemy.com/v2/${alchemy_network_api_key}`;
exports.BASE = {
    id: 8453,
    name: 'BASE_MAINNET',
    label: 'Base',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: [exports.mainnetRpc] }, // 앱/웹에서 env RPC로 override 권장
    },
    blockExplorers: {
        default: { name: 'Basescan', url: 'https://basescan.org' },
    },
};
exports.BASE_SEPOLIA = {
    id: 84532,
    name: 'BASE_SEPOLIA',
    label: 'Base Sepolia Testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: { default: { http: [exports.sepoliaRpc] } },
    blockExplorers: {
        default: { name: 'Sepolia Explorer', url: 'https://sepolia-explorer.base.org' },
    },
    testnet: true,
};
exports.USDC_DECIMALS = 6;
