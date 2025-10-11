// RICEpay_shared/lib/compliance.ts

/** 백엔드 /v1/compliance/preflight 응답 타입 (항상 200 OK) */
export type PreflightOk = {
  ok: true;
  /** viem getAddress checksum (백엔드에서 반환) */
  checksum?: `0x${string}`;
};

export type PreflightBlock =
  | {
      ok: false;
      type: 'GEOFENCE';
      country?: string | null;
      region?: string | null;
      reason?: string; // ex) "OFAC comprehensive sanctions"
    }
  | {
      ok: false;
      type: 'SANCTIONS';
      reason?: string; // ex) "Suspected entity"
      checksum: `0x${string}`;
    }
  | {
      ok: false;
      type: 'SANCTIONS';
      reason: 'provider_unavailable',
  };

export type PreflightResponse = PreflightOk | PreflightBlock;

/** Guard가 던지는 에러 바디(451/403/503 등) — FE에서 상태코드와 함께 사용 */
export type ComplianceErrorBody =
  | { ok: false; type: 'GEOFENCE'; level: 'COUNTRY' | 'REGION'; country?: string | null; region?: string | null; reason?: string } // 451
  | { ok: false; type: 'SANCTIONS'; reason?: string; checksum: `0x${string}` }                                                     // 403
  | { ok: false; type: 'SANCTIONS'; reason: 'provider_unavailable' };                                                              // 503

export const complianceMessages = {
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

export function getComplianceMessage(context: 'preflight' | 'complianceGuard', code: 451 | 403 | 503 | 201, lang: 'ko' | 'en') {
  return complianceMessages[context][code][lang];
}