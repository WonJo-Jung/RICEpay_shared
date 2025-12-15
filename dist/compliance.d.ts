/** 백엔드 /v1/compliance/preflight 응답 타입 (항상 200 OK) */
export type PreflightOk = {
    ok: true;
    /** viem getAddress checksum (백엔드에서 반환) */
    checksum?: `0x${string}`;
};
export type PreflightBlock = {
    ok: false;
    type: 'GEOFENCE';
    country?: string | null;
    region?: string | null;
    reason?: string;
} | {
    ok: false;
    type: 'SANCTIONS';
    reason?: string;
    checksum: `0x${string}`;
} | {
    ok: false;
    type: 'SANCTIONS';
    reason: 'provider_unavailable';
};
export type PreflightResponse = PreflightOk | PreflightBlock;
/** Guard가 던지는 에러 바디(451/403/503 등) — FE에서 상태코드와 함께 사용 */
export type ComplianceErrorBody = {
    ok: false;
    type: 'GEOFENCE';
    level: 'COUNTRY' | 'REGION';
    country?: string | null;
    region?: string | null;
    reason?: string;
} | {
    ok: false;
    type: 'SANCTIONS';
    reason?: string;
    checksum: `0x${string}`;
} | {
    ok: false;
    type: 'SANCTIONS';
    reason: 'provider_unavailable';
};
export declare const complianceMessages: {
    preflight: {
        451: {
            ko: string;
            en: string;
        };
        403: {
            ko: string;
            en: string;
        };
        503: {
            ko: string;
            en: string;
        };
        201: {
            ko: string;
            en: string;
        };
    };
    complianceGuard: {
        451: {
            ko: string;
            en: string;
        };
        403: {
            ko: string;
            en: string;
        };
        503: {
            ko: string;
            en: string;
        };
        201: {
            ko: string;
            en: string;
        };
    };
};
export declare function getComplianceMessage(context: 'preflight' | 'complianceGuard', code: 451 | 403 | 503 | 201, lang: 'ko' | 'en'): string;
