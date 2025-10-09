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
    };

export type PreflightResponse = PreflightOk | PreflightBlock;

/** Guard가 던지는 에러 바디(451/403/503 등) — FE에서 상태코드와 함께 사용 */
export type ComplianceErrorBody =
  | { ok: false; type: 'GEOFENCE'; level: 'COUNTRY' | 'REGION'; country?: string | null; region?: string | null; reason?: string }
  | { ok: false; type: 'SANCTIONS'; reason?: string; checksum: `0x${string}` }
  | { ok: false; type: 'SANCTIONS'; error: 'provider_unavailable' };