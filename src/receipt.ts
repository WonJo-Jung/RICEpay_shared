export type Direction = 'SENT' | 'RECEIVED' | 'UNKNOWN';

export type ReceiptItem = {
  id: string;
  chainId: number;
  network: string;
  txHash: string;
  direction: Direction; // 서버 값(현재 SENT 위주) — 없으면 클라에서 계산 fallback 가능
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
export type ActivityResp = { items: ReceiptItem[]; nextCursor: string | null };