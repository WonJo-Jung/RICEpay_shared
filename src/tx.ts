import { BASE_SEPOLIA } from "./viem";
import type { Network } from "./chain";

export type ChainId = typeof BASE_SEPOLIA.id; // Base Sepolia

export type TxStatus =
  | 'PENDING'
  | 'CONFIRMED'
  | 'FAILED'
  | 'DROPPED_REPLACED'
  | 'EXPIRED'
  | 'UNKNOWN';

export interface TxRecord {
  id: string;
  chainId: ChainId;
  network: Network;
  txHash: `0x${string}`;
  from: `0x${string}`;
  to: `0x${string}`;
  token?: `0x${string}`;
  amount?: string; // decimal string ("12.34")
  status: TxStatus;
  blockNumber?: number;
  confirmations?: number;
  createdAt: string;
  updatedAt: string;
}