import { z } from 'zod';

/** 네트워크 enum */
export const NetworkEnum = z.enum(['ETHEREUM', 'BASE', 'POLYGON', 'ARBITRUM']);
export type Network = z.infer<typeof NetworkEnum>;

/** 생성/수정 입력 스키마 */
export const AddressBookCreateSchema = z.object({
  name: z.string().min(1).max(64),
  network: NetworkEnum,
  address: z.string().min(1), // 상세 검증은 레이어별 유틸에서
  memo: z.string().max(2000).optional(),
});
export type CreateAddressBookDto = z.infer<typeof AddressBookCreateSchema>;

export const AddressBookUpdateSchema = AddressBookCreateSchema.partial();
export type UpdateAddressBookDto = z.infer<typeof AddressBookUpdateSchema>;