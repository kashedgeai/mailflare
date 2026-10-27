import { eq } from "drizzle-orm";
import type { AppDatabase } from "@/db";
import { licenseSettings } from "@/db/schema";
import { SELF_HOSTED_ALL_FEATURES } from "@/lib/licenses/constants";

export async function isTeamMailboxSharingEnabled(db: AppDatabase): Promise<boolean> {
	if (SELF_HOSTED_ALL_FEATURES) return true;
	try {
		const [license] = await db
			.select({ plan: licenseSettings.plan, state: licenseSettings.state })
			.from(licenseSettings)
			.where(eq(licenseSettings.id, "default"))
			.limit(1);

		return license?.plan === "team" && license.state === "active";
	} catch {
		return false;
	}
}
