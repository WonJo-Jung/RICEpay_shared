import type { Chain } from "./chain";
export interface AddressBookEntry {
    id: string;
    name: string;
    chain: Chain;
    address: string;
    memo: string;
    usageCount: number;
    lastUsedAt?: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
}
export declare function normalizeEvmAddress(address: string): string;
