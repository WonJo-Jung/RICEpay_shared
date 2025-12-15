"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeEvmAddress = normalizeEvmAddress;
const viem_1 = require("viem");
function normalizeEvmAddress(address) {
    if (!(0, viem_1.isAddress)(address)) {
        throw new Error(`Invalid EVM address: ${address}`);
    }
    return (0, viem_1.getAddress)(address);
}
