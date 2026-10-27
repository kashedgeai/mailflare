import type { LicensePlan } from "./types";

export const LICENSE_PRODUCT_IDS: Record<Exclude<LicensePlan, "community">, string> = {
	pro: "ebafa58f-af9f-4b8a-a48d-6cfd44dd2053",
	team: "6e42b54c-3221-4f8f-93a7-bab494f9e224",
};

export const LICENSE_STATUS_CHANGED_EVENT = "mailflare:license-status-changed";

/**
 * KashEdge self-hosted build (AGPL-3.0 modification): every feature is enabled locally,
 * with unlimited account seats and no Paymug license checks. Set to false to restore upstream licensing.
 */
export const SELF_HOSTED_ALL_FEATURES = true;
