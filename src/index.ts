/**
 * Maxiel-Xy starter scaffold.
 * This does not implement WhatsApp connectivity or Baileys protocol APIs.
 */
export const maxielXy = {
  name: "Maxiel-Xy",
  version: "0.1.0",
  status: "scaffold",
} as const;

export function assertSupportedNode(version = process.versions.node): void {
  const major = Number(version.split(".")[0]);
  if (!Number.isInteger(major) || major < 20) {
    throw new Error(`Maxiel-Xy requires Node.js 20 or newer; found ${version}`);
  }
}
