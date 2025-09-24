import { getAddress, isAddress } from "viem";

// shared/types (프론트/앱 공용)
export type Network = 'ETHEREUM' | 'BASE' | 'POLYGON' | 'ARBITRUM';

export interface AddressBookEntry {
  id: string;            // uuid/cuid
  name: string;
  network: Network;
  address: string;       // 체크섬 정규화 후 저장 권장
  memo: string;
  usageCount: number;    // 기본 0
  lastUsedAt?: string;   // ISO
  createdAt: string;     // ISO
  updatedAt: string;     // ISO
  deletedAt?: string;    // 소프트 삭제
}

export function normalizeEvmAddress(address: string): string {
  if (!isAddress(address)) {
    throw new Error(`Invalid EVM address: ${address}`);
  }
  return getAddress(address);
}