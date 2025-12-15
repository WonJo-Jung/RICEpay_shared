import { BASE_SEPOLIA } from "./viem";
export type ChainId = typeof BASE_SEPOLIA.id;
export type TxStatus = 'PENDING' | 'CONFIRMED' | 'FAILED' | 'DROPPED_REPLACED' | 'EXPIRED' | 'UNKNOWN';
export interface TxRecord {
    id: string;
    chainId: ChainId;
    chain: string;
    txHash: `0x${string}`;
    from: `0x${string}`;
    to: `0x${string}`;
    token?: `0x${string}`;
    amount?: string;
    status: TxStatus;
    blockNumber?: number;
    confirmations?: number;
    createdAt: string;
    updatedAt: string;
}
