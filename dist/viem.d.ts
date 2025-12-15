import { Chain } from "./chain";
export declare const sepoliaRpc = "https://base-sepolia.g.alchemy.com/v2/DN_2iNz6IGdOy9a9n7Px6";
export declare const mainnetRpc = "https://base-mainnet.g.alchemy.com/v2/DN_2iNz6IGdOy9a9n7Px6";
export declare const BASE: {
    id: number;
    name: string;
    label: Chain;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    rpcUrls: {
        default: {
            http: string[];
        };
    };
    blockExplorers: {
        default: {
            name: string;
            url: string;
        };
    };
};
export declare const BASE_SEPOLIA: {
    id: number;
    name: string;
    label: Chain;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    rpcUrls: {
        default: {
            http: string[];
        };
    };
    blockExplorers: {
        default: {
            name: string;
            url: string;
        };
    };
    testnet: boolean;
};
export declare const USDC_DECIMALS = 6;
