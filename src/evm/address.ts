import { getAddress, isAddress } from 'viem';

/**
 * 주소 유효성 검사 및 체크섬 정규화
 * 유효하면 체크섬 주소를 반환, 아니면 null 반환
 */
export function normalizeEvmAddress(input: string): string | null {
  try {
    if (!isAddress(input)) return null;
    return getAddress(input);
  } catch {
    return null;
  }
}