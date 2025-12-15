"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withRetry = withRetry;
exports.assertAddress = assertAddress;
exports.toUserMessage = toUserMessage;
const viem_1 = require("viem");
// 에러가 "재시도 가능"한지 판별
function isRetryable(err) {
    if (err instanceof viem_1.UserRejectedRequestError)
        return false; // ❌ 절대 재시도 금지
    if (err instanceof viem_1.WaitForTransactionReceiptTimeoutError)
        return true;
    if (err instanceof viem_1.HttpRequestError)
        return true;
    if (err instanceof viem_1.RpcRequestError)
        return true;
    const msg = err?.message || err?.shortMessage || '';
    // 네트워크성 문자열 핸들링(환경별)
    if (/timeout|timed out|network error|fetch failed|ECONNRESET/i.test(msg))
        return true;
    return false;
}
async function withRetry(fn, retries = 2, baseMs = 400) {
    let lastErr;
    for (let i = 0; i <= retries; i++) {
        try {
            return await fn();
        }
        catch (err) {
            lastErr = err;
            if (!isRetryable(err) || i === retries)
                break;
            await new Promise(r => setTimeout(r, baseMs * Math.pow(2, i)));
        }
    }
    throw lastErr;
}
function assertAddress(addr) {
    if (!(0, viem_1.isAddress)(addr)) {
        const e = new Error("INVALID_ADDRESS");
        e.ux = "잘못된 지갑 주소예요. 0x로 시작하는 올바른 주소를 입력해 주세요.";
        throw e;
    }
}
function toUserMessage(err) {
    if (err && typeof err === "object" && "ux" in err) {
        return err.ux;
    }
    const msg = err?.shortMessage || err?.message;
    if (msg?.includes("User rejected"))
        return "서명을 취소했어요.";
    if (msg?.includes("chainId"))
        return "Base Sepolia 네트워크로 전환해 주세요.";
    if (msg?.includes("insufficient funds"))
        return "가스비가 부족해요.";
    if (msg?.includes('"transfer" reverted'))
        return '토큰 잔액이 부족합니다.';
    return msg || "알 수 없는 오류가 발생했어요.";
}
