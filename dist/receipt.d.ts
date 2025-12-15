export type Direction = 'SENT' | 'RECEIVED' | 'UNKNOWN';
export type ReceiptItem = {
    id: string;
    chainId: number;
    network: string;
    txHash: string;
    direction: Direction;
    token: string;
    amount: string;
    fiatCurrency: string;
    fiatRate: string;
    fiatAmount: string;
    gasPaid?: string | null;
    gasFiatAmount?: string | null;
    appFee?: string | null;
    appFeeFiat?: string | null;
    policyVersion: string;
    fromAddress: string;
    toAddress: string;
    submittedAt: string;
    confirmedAt: string;
    shareToken?: string | null;
};
export type ActivityResp = {
    items: ReceiptItem[];
    nextCursor: string | null;
};
