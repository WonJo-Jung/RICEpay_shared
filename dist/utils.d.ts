export declare function withRetry<T>(fn: () => Promise<T>, retries?: number, baseMs?: number): Promise<T>;
export declare function assertAddress(addr: string): asserts addr is `0x${string}`;
export declare function toUserMessage(err: unknown): string;
