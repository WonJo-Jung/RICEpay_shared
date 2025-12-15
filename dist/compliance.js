"use strict";
// RICEpay_shared/lib/compliance.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.complianceMessages = void 0;
exports.getComplianceMessage = getComplianceMessage;
exports.complianceMessages = {
    preflight: {
        451: {
            ko: "현재 지역에서는 송금이 제한되어 있습니다.",
            en: "Transfers are not available from your current region.",
        },
        403: {
            ko: "해당 주소는 제재 대상에 포함되어 있어 송금할 수 없습니다.",
            en: "This address is on a sanctions list and cannot receive transfers.",
        },
        503: {
            ko: "검증 서비스가 일시적으로 중단되었습니다. 잠시 후 다시 시도해 주세요.",
            en: "Compliance verification is temporarily unavailable. Please try again later.",
        },
        201: {
            ko: "사전 검사 완료 — 송금이 가능합니다.",
            en: "Preflight check completed — transfer is allowed.",
        },
    },
    complianceGuard: {
        451: {
            ko: "법적 사유로 송금 요청이 거부되었습니다.",
            en: "Your transfer request has been denied for legal reasons.",
        },
        403: {
            ko: "국제 제재 규정에 따라 송금이 차단되었습니다.",
            en: "Transfer blocked due to international sanctions compliance.",
        },
        503: {
            ko: "제재 데이터베이스에 일시적 장애가 발생했습니다. 송금이 보류되었습니다.",
            en: "The sanctions database is temporarily unavailable. Your transfer has been placed on hold.",
        },
        201: {
            ko: "송금이 성공적으로 접수되었습니다.",
            en: "Transfer successfully accepted.",
        },
    },
};
function getComplianceMessage(context, code, lang) {
    return exports.complianceMessages[context][code][lang];
}
